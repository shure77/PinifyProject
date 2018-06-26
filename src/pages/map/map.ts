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

  }

  GoogleMap () {

    const location = new google.maps.LatLng(48.205513,15.623266);
    const name = this.navParams.get('name');
    const description = this.navParams.get('description');
    const website = this.navParams.get('website');
    this.image = this.navParams.get('spotType');
   
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });


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

    var cinemaInfowindow = new google.maps.InfoWindow({
      maxWidth: 280,
      content: contentString
    });

    const pointCinema = {lat: 48.205513, lng: 15.623266};
    
    let cinemaMarker = new google.maps.Marker({
      position: pointCinema,
      map: this.map,
      icon: this.image,
      title: name   
    });
    cinemaMarker.addListener('click', function(){
      cinemaInfowindow.open(Map, cinemaMarker);
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
