import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Spots } from '../../spot';
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const that = this;
    setTimeout(function () {
      that.GoogleMap();
    }, 2000)
  }

  ionViewDidLoad(){
   console.log (this.navParams.get('name'));
   console.log(this.navParams.get('latitude'));

  }

  GoogleMap () {

    const latitude = this.navParams.get('latitude');
    const longitude = this.navParams.get('longitude');
    const mapLocation = new google.maps.LatLng(latitude, longitude);
    const name = this.navParams.get('name');
    const description = this.navParams.get('description');
    const website = this.navParams.get('website');
    this.image = this.navParams.get('spotType');
    const pinLocation = {lat: latitude, lng: longitude};
   
    /* Setup the map and center it */
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: mapLocation
    });

/* Define the Information Window */
    var contentString= '<div id="content"'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>'+
                        '<div id="bodyContent">'+
                        description +
                        '<p>' + name + ', <a href="http://' + website + '" target="_blank">'+
                        'Go to Website.</p>'+
                        '</div>'+
                        '</div>';

    var infoWindow = new google.maps.InfoWindow({
      maxWidth: 280,
      content: contentString
    });
    
/* Create and position the pin on the map */

    let pin = new google.maps.Marker({
      position: pinLocation,
      map: this.map,
      icon: this.image,
      title: name   
    });
    pin.addListener('click', function(){
      infoWindow.open(Map, pin);
    });
    
    
   /*  this.image = 'assets/imgs/IconCafe.png';
    let beachMarker1 = new google.maps.Marker({
      position: {lat: 48.204651, lng: 15.625694},
      map: this.map,
      icon: this.image,
      title: 'Cafe Schubert'
    });

    this.image = 'assets/imgs/IconCafe.png';
    let beachMarker2 = new google.maps.Marker({
      position: {lat: 48.20373, lng: 15.623767},
      map: this.map,
      icon: this.image,
      title: 'Cafe Emmi'
    });
  } */

 
}
goToHome() {
 this.navCtrl.push(HomePage);
}
}
