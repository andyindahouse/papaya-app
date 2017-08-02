import { Achievement } from './achievement';

export interface User {
  name: string,
  achievements: Achievement[],
  monumentsVisited: string[]
}