import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TrippioComponent }  from './trippio.component';
import { TrippioHeaderComponent }  from './components/trippio-header.component';
import { TrippioFooterComponent }  from './components/trippio-footer.component';
import { TripListComponent }  from './components/trip-list.component';

const appRoutes: Routes = [
  { path: 'trip-list', component: TripListComponent },
]

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(appRoutes)],
  declarations: [ TrippioComponent,
                  TrippioHeaderComponent,
                  TrippioFooterComponent,
                  TripListComponent ],
  bootstrap:    [ TrippioComponent ]
})
export class TrippioModule { }
