import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }
  color: string;

  markerContent(): string {
    return `
    <div>
        <h3>Company Name: ${this.companyName}</h3>
        <h4>Catchphrase: ${this.catchPhrase}</h4>
    </div>    `;
  }
}
