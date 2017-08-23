import { Component, ElementRef, ViewChild } from '@angular/core';
import { Accuracy } from 'tns-core-modules/ui/enums';
import { Image } from 'tns-core-modules/ui/image';
import * as dialogs from "ui/dialogs";
import * as geolocation from "nativescript-geolocation";
import { Location } from "nativescript-geolocation/nativescript-geolocation-common";
import { registerElement } from "nativescript-angular/element-registry";
import * as permissions from "nativescript-permissions";
import { RouterExtensions } from "nativescript-angular/router";
import { MapView, Marker, Position, UISettings, Style } from 'nativescript-google-maps-sdk';

import { Store } from '@ngrx/store';
import * as fromRoot from '../shared/reducers';
import { MONUMENTS_UPDATE_DISTANCE, MONUMENTS_SELECT } from '../shared/reducers/monuments';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/take";

import { Monument } from '../shared/models/monument';



// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => MapView);

declare var android: any;

@Component({
	selector: 'pay-map',
	template: `
		<ActionBar title="Mapa"></ActionBar>
		<side-drawer-page>
			<GridLayout>
					<MapView #mapView 
						[latitude]="latitude" [longitude]="longitude"
						[zoom]="zoom"
						(mapReady)="onMapReady($event)"
						(markerInfoWindowTapped)="onMarkerEvent($event)" 
						(cameraChanged)="onCameraChanged($event)">
						</MapView>
			</GridLayout>
		</side-drawer-page>
	`
})
export class MapComponent {
	monuments$: Observable<Monument[]>;
	monumentIdsAndMarkers = [];
	watchId = null;
	latitude = 40.48251311167575;
	longitude = -3.364262916147709;
	zoom = 16;
	bearing = 0;
	tilt = 0;
	padding = 0;
	mapView: MapView;

	currentLocation: Location;

	lastCamera: String;

	currentMapStyle = [{"featureType": "poi.business", "stylers": [{ "visibility": "off" }]},	{	"featureType": "poi.park", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]}];

	constructor(private store: Store<fromRoot.State>, private routerExtensions: RouterExtensions) { }	

	onMapReady(event) {
		this.mapView = event.object;
		this.mapView.setStyle(<Style>this.currentMapStyle);
		permissions.requestPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, 'Es obligatorio para mostrarte los monumentos cercanos a tu localización')
			.then(() => {
				this.mapView.gMap.setMyLocationEnabled(true);
				this.setCurrentLocation();
			})
			.catch(e => {
				dialogs.alert({
					title: 'Ops...',
					message: 'Nuestro mapa requiere de tu localización para mostrarte los monumentos cercanos, sin ello solamente tendrás acceso a ciertas funcionalidades'
				});
				console.log("Permission is not granted (sadface)");
			});
	}

	setCurrentLocation() {
		geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, updateDistance: 10, timeout: 30000 })
			.then((e: Location) => {
				this.currentLocation = e;
				this.setMonumentsLocation();
				this.refreshLocation();
			})
			.catch(e => {
				dialogs.alert({
					title: 'Ops...',
					message: 'No hemos podido localizarte, asegurate de que tu GPS funciona correctamente'
				});
			});
	}

	refreshLocation() {
		if(this.watchId) geolocation.clearWatch(this.watchId);
		this.watchId = geolocation.watchLocation(loc => {
			this.currentLocation = loc;
			this.monumentIdsAndMarkers.forEach(({ id, marker, location}) => {
				const distance = this.getMonumentDistance(location);					
				this.updateMarkers(marker, distance);
				this.updateDistanceMonument(id, distance);
			});

    }, (e) => {
      console.log("Error refresh location: " + e.message);
    }, {desiredAccuracy: Accuracy.high, updateDistance: 3, minimumUpdateTime : 1000});
	}

	setMonumentsLocation() {
		const dataSub = this.store.select(fromRoot.getMonumentsValues)
			.take(1)		
			.subscribe(monuments => {
				monuments.forEach(e => {
					const distance = this.getMonumentDistance(e.location);				
					const marker = this.renderMarker({
						location: e.location,
						title: e.name,
						snippet: this.formatDistance(distance)
					});
					this.monumentIdsAndMarkers.push({
						id: e.id,
						location: e.location,
						marker
					});
					this.updateDistanceMonument(e.id, distance);
				});
			});
	}

	updateMarkers(marker, distance) {
		// update icos and label
		const distanceNum = parseInt(distance);
		if(distanceNum <= 20)  {
			marker.snippet = '¡Comienza el desafío!';
			marker.icon = 'target';
		} else {
			marker.icon = 'flag';			
			marker.snippet = this.formatDistance(distance) + ' ' + 'Fuera de alcance';
		}

	}

	updateDistanceMonument(idMonument, distance) {
		this.store.dispatch({ type: MONUMENTS_UPDATE_DISTANCE, payload: { id: idMonument, distance }});
	}

	getMonumentDistance(monumentLocation: Location) {
		return geolocation.distance(this.currentLocation, monumentLocation).toFixed(0);
	}

	formatDistance(distance) {
		return `distancia: ${distance}m`;		
	}

	renderMarker({ location, title = '', snippet = '', icon = 'flag'}) {
		let marker = new Marker();		
		marker.position = Position.positionFromLatLng(location.latitude, location.longitude);		
		marker.title = title;
		marker.icon = icon;
		marker.snippet = snippet;
		marker.userData = {index: 1};
		this.mapView.addMarker(marker);
		return marker;
	}
	
	onMarkerEvent(args) {
			const marker = args.marker;
			const monument = this.monumentIdsAndMarkers.find(e => e.marker === marker);
			this.store.dispatch({ type: MONUMENTS_SELECT, payload: monument.id })
			this.routerExtensions.navigate(['/monuments', monument.id]);
	}

	// Move the viewport map position
	onCameraChanged(args) {
		console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
		this.lastCamera = JSON.stringify(args.camera);
	}
}
