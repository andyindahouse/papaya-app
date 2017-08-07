import { MapComponent } from './pages/map-page';
import { FeedbackComponent } from './pages/feedback-page';
import { MonumentsListComponent } from './pages/monuments-list-page';
import { AchievementsComponent } from './pages/achievements-page';
import { ProfileComponent } from './pages/profile-page';
import { LoadMonuComponent } from './pages/load-monu-page';


export const routes = [
  { path: '', component: MapComponent },
  { path: 'achievements', component: AchievementsComponent }, 
  { path: 'profile', component: ProfileComponent },   
  { path: 'monuments', component: MonumentsListComponent },
  { path: 'load-monu', component: LoadMonuComponent },  
  { path: 'feedback', component: FeedbackComponent }    
];

export const navigatableComponents = [
  MapComponent, 
  AchievementsComponent,
  ProfileComponent,
	MonumentsListComponent,
  FeedbackComponent,
  LoadMonuComponent
];