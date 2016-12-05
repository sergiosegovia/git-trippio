import { Injectable } from '@angular/core';

import { TRIPS } from './mock.trips';

@Injectable()
export class TripsService {

  getTrips(){
    return TRIPS;
  }
  
}
