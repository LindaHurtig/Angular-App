import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    console.log({ data });
    return (await data.json()) ?? [];
  }

  async getHousingLocationsById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    console.log(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
