import { Location } from "nativescript-geolocation";

export interface Monument {
  name: string,
  image: string,
  desc: string,
  location: Location,
  markerImg: string,
  status: string
}