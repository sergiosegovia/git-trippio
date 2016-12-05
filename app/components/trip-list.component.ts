import { Component } from '@angular/core';

import { Trip } from '../models/trip';

import { TripsService } from '../services/trips.service';

@Component({
  selector: 'trip-list',
  templateUrl: 'app/views/trip-list.html',
  styleUrls: ['assets/css/trip-list.css'],
  providers: [ TripsService ]
})
export class TripListComponent  {
  public trip : Trip;
  public trips : Trip[];
  public selectedTrip : any;
  public show : boolean;

  constructor(private _tripsService: TripsService){
    this.trips = this._tripsService.getTrips();
    this.trip = this.trips[0];
    this.selectedTrip = null ;
    this.show = false;
  }

  selectTrip(trip: Trip){
    this.trip = trip;
    this.selectedTrip = trip;
    this.show = true;
  }

  onShow(){
    this.show = false;
    this.selectedTrip = null;
  }
}
