import { MapComponent } from './pages/map-page';
import { FeedbackComponent } from './pages/feedback-page';
import { MonumentsListComponent } from './pages/monuments-list-page';
import { DetailMonumentPageComponent } from './pages/detail-monument-page';
import { ProfileComponent } from './pages/profile-page';
import { LoadMonuComponent } from './pages/load-monu-page';


export const routes = [
  { path: '', component: MapComponent },
  { path: 'profile', component: ProfileComponent },   
  { path: 'monuments', component: MonumentsListComponent },
  { path: 'monuments/:id', component: DetailMonumentPageComponent },
  { path: 'monuments/:id/questionary/:step', component: DetailMonumentPageComponent },  
  { path: 'load-monu', component: LoadMonuComponent },  
  { path: 'feedback', component: FeedbackComponent }    
];

export const navigatableComponents = [
  MapComponent, 
  ProfileComponent,
  MonumentsListComponent,
  DetailMonumentPageComponent,
  FeedbackComponent,
  LoadMonuComponent
];