import { Component,  NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Spots } from '../../spot';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;

    spots: Spots = {
    name: '',
    description: '',
    website: '',
    spotType: '',
    address: ''
  }

  public nav: NavController; 
  constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, public NavParams: NavParams) {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
  }

  ionViewDidLoad() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.searchControl = new FormControl;

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = document.getElementById('adress').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null) {
                return;
            }

            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
        });
    });
});
}

private setCurrentPosition() {
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
      });
  }
}

  goToMap() {
    let data = {
      name: this.spots.name,
      description: this.spots.description,
      website: this.spots.website,
      spotType: this.spots.spotType,
      latitude: this.latitude,
      longitude: this.longitude
    }

    this.navCtrl.push(MapPage, data);
  }

  radioChangeHandler(answer){
    this.spots.spotType = answer;
  }

}
