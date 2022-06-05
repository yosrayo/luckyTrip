import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from '../service/destination.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  id:number;
  data :any;
  destination  = {} as any ;
  details = {} as any ;
  blog= {} as any ;
  url="";
  constructor(private router: Router , private destinationService : DestinationService ) { 
    let data = this.router.getCurrentNavigation();
    this.data=data
    this.id = this.data.extras.state.id;
    console.log("id", this.id)
 
  }

  ngOnInit(): void {
    this.destinationService.getDestinationById(this.id).subscribe((res) => {
      let destination = res;
      this.destination =destination;
      this.details=this.destination.destination
      this.blog= this.destination.activities
      this.url=this.destination.destination.thumbnail.image_url
      console.log("destination",this.destination);
      console.log("blog",this.blog[0].thumbnail.image_url);
     
    });

  }

}
