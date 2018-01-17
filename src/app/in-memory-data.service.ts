import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      { id: 11, name: 'Lionel Messi', strength: 85, description: 'Leo' },
      { id: 12, name: 'Cristiano Ronaldo', strength: 85, description: 'CR7' },
      { id: 14, name: 'Neymar Jr.', strength: 84, description: 'Neymar' },
      { id: 15, name: 'Eden Hazard', strength: 83, description: 'Eden' },
      { id: 16, name: 'Manuel Neuer', strength: 84, description: 'GK' },
      { id: 13, name: 'Nicklas Bendtner', strength: 50, description: 'Lord' }
    ];

    return {heroes};
  }

}
