import { Question } from './question';
import { Achievement } from './achievement';

export interface Questionary {
  monumentId: string,
  name: string,
  questions: Question[],
  achievement: Achievement
}