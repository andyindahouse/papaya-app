import { Achievement } from './achievement';

export interface User {
  name: string,
  achievements: Achievement[],
  idMonumentsVisited: string[]
}