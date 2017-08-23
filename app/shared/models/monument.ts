import { Location } from "nativescript-geolocation";
import { Question } from './question';

export interface Monument {
  id: string,
  name: string,
  image: string,
  desc: string,
  location: Location,
  markerImg: string,
  status: string,
  distance?: string,
  quiz: Question[],
  quizAchievement: string
}