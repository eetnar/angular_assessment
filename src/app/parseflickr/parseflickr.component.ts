import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-parseflickr',
  templateUrl: './parseflickr.component.html',
  styleUrls: ['./parseflickr.component.css']
})

export class ParseflickrComponent implements OnInit {

  constructor(private http:HttpClient) {
    let URL = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json'

    this.http.jsonp(URL, 'jsoncallback').subscribe(item=> { 
      this.imagesRetrieved = (<any>item).items
    })

  }


  imagesRetrieved: []
  showtime = false
  
  ngOnInit() {
  }

  showPictures() {
    this.showtime = !this.showtime
  }
  
}


