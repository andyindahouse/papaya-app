import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Accuracy } from 'tns-core-modules/ui/enums';
import { Image } from 'tns-core-modules/ui/image';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch, Location } from "nativescript-geolocation";
import { registerElement } from "nativescript-angular/element-registry";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => MapView);

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
						(markerSelect)="onMarkerEvent($event)" 
						(markerBeginDragging)="onMarkerEvent($event)"
						(markerEndDragging)="onMarkerEvent($event)" 
						(markerDrag)="onMarkerEvent($event)"
						(markerInfoWindowTapped)="onMarkerEvent($event)" 
						(coordinateTapped)="onCoordinateTapped($event)"
						(cameraChanged)="onCameraChanged($event)">
						</MapView>
			</GridLayout>
		</side-drawer-page>
	`
})
export class MapComponent implements OnInit {
	
	watchId = null;
	latitude =  40.4767906442783;
	longitude = -3.3934450149536133;
	zoom = 12;
	bearing = 0;
	tilt = 0;
	padding = 0;
	mapView: MapView;

	currentLocation: Location;

	lastCamera: String;

	constructor() { }	
	
	ngOnInit() {
		console.log('ngOnInit map');
	}

	refreshLocation(){
		if(this.watchId) clearWatch(this.watchId);
		this.watchId = watchLocation((loc) => {
			if (loc) {
				this.renderMarker(loc);
			} else {
				console.log(" Not Received location: " + loc);
			}
    }, (e) => {
      console.log("Error: " + e.message);
    }, {desiredAccuracy: Accuracy.high, updateDistance: 3, minimumUpdateTime : 1000});
	}
		
	onMapReady(event) {
		this.mapView = event.object;
		if (!isEnabled()) enableLocationRequest();		
		this.setCurrentLocation();
	}

	setCurrentLocation() {
		getCurrentLocation({desiredAccuracy: Accuracy.high, updateDistance: 10, timeout: 20000})
			.then((e) => {
				this.currentLocation = e;
				this.refreshLocation();
				this.renderMarker(this.currentLocation);
			});
	}

	renderMarker(location: Location) {
		console.log("Setting a marker...", location.latitude, location.longitude);
		let marker = new Marker();
		marker.position = Position.positionFromLatLng(location.latitude, location.longitude);
		marker.title = 'Home';
		marker.icon = 'place';
		marker.snippet = 'Álcala de Henares';
		marker.userData = {index: 1};
		this.mapView.addMarker(marker);
	}

	// Tap coord
	onCoordinateTapped(args) {
		console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
	}
	
	// Tap marker
	onMarkerEvent(args) {
		console.log("Marker Event: '" + args.eventName
				+ "' triggered on: " + args.marker.title
				+ ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
	}

	// Move the viewport map position
	onCameraChanged(args) {
		console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
		this.lastCamera = JSON.stringify(args.camera);
	}
}
