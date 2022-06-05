import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DestinationService } from '../service/destination.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list  = {} as any ;
  listDestination= {} as any ;
  listDes= {} as any ;
  destination= {} as any ;
  searchInput ="";
  exist=true;
  constructor(private destinationService : DestinationService, private route: Router ,) { 

  }

  ngOnInit(): void {
    // get all the list of destination
    this.destinationService.getAllDestination().subscribe((res) => {
      this.list = res;
      this.listDestination=this.list.destinations;
      console.log("destination",this.listDestination); 
    });
    
  }

//search country or city
  search(){
    this.destinationService.searchDestination(this.searchInput).subscribe((res) => {
      this.listDes = res;
      this.destination= this.listDes.destinations
      this.listDestination=this.destination
      console.log("destination",this.destination)
    });

  } 



//button Go 
//send id in the router
  goToDetails(id : number){
    let navigationExtras: NavigationExtras = {
      state: {
       id
      } 
    };
   this.route.navigate(['searchResult'],navigationExtras )
  console.log("iddd",navigationExtras )

  }
}
