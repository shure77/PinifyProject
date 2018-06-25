import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  GoogleMap () {
    const location = new google.maps.LatLng(48.205513,15.623266);
   
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });

    var contentString= '<div id="content"'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<h1 id="firstHeading" class="firstHeading">Cinema Paradiso</h1>'+
                        '<div id="bodyContent">'+
                        '<p><b>Cinema Paradiso</b>, is an easy going and chilled out Cafe ' +
                        'which serves the best coffee in town. Make sure to check out their '+
                        'Empanadas, too. And yes, actually it is a cinema playing mostly european arthouse movies!'+
                        '<p>Attribution: Cinema Paradiso, <a href="http://www.cinema-paradiso.at/st-poelten/" target="_blank">'+
                        'Go to Website.</p>'+
                        '</div>'+
                        '</div>';

    var cinemaInfowindow = new google.maps.InfoWindow({
      maxWidth: 320,
      content: contentString
    });

    this.image = 'assets/imgs/IconCafe.png';
    const pointCinema = {lat: 48.205513, lng: 15.623266};
    let cinemaMarker = new google.maps.Marker({
      position: pointCinema,
      map: this.map,
      icon: this.image,
      title: 'Cinema Paradiso'
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
