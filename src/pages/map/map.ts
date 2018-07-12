import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
  image: any;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    const that = this;
    setTimeout(function () {
      that.GoogleMap();
    }, 2000)
  }

  ionViewDidLoad(){
   /* this.storage.get('data').then((val) => {
    for (let i in val){ 
    var name = val[i].name;
    var website = val[i].website;
    var description = val[i].description;
    var image = val[i].spotType;
    var pinLocation = {lat: val[i].latitude, lng: val[i].longitude}; */
    

 /*    }
  }); */ 
}

  GoogleMap () {
    /* Setup the map and center it */
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.206329, 15.623221)
    });

    this.storage.get('data').then((val) => {
      for (let i in val){
    const latitude = val[i].latitude;
    const longitude = val[i].longitude;
    //const mapLocation = new google.maps.LatLng(latitude, longitude);
    const name = val[i].name;
    const description = val[i].description;
    const website = val[i].website;
    this.image = val[i].spotType;
    const pinLocation = {lat: latitude, lng: longitude};
   
    

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

    
    
/* Create and position the pin on the map */

    let pin = new google.maps.Marker({
      position: pinLocation,
      map: this.map,
      icon: this.image,
      title: name,
      animation: google.maps.Animation.DROP,
      info: contentString
    });
    google.maps.event.addListener( pin, 'click', function() {

      infoWindow.setContent( this.info );
      infoWindow.open( Map, this );
   
   });
  
    var infoWindow = new google.maps.InfoWindow({
      maxWidth: 250,
      content: contentString
    });
    
}
});  
}
restartApp() {
 //this.navCtrl.push(HomePage);
 document.location.href='index.html';
}
}
