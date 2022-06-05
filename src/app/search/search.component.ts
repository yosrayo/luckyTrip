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
  list2= {} as any ;
  list3= {} as any ;
  list4= {} as any ;
  searchInput ="";
  exist=true;
  constructor(private destinationService : DestinationService, private route: Router ,) { 

  }

  ngOnInit(): void {
    this.destinationService.getAllDestination().subscribe((res) => {
      this.list = res;
      this.list2=this.list.destinations;
      console.log("destination",this.list2); 
    });
    
  }


  search(){
    
    this.destinationService.searchDestination(this.searchInput).subscribe((res) => {
      this.list3 = res;
      this.list4= this.list3.destinations
      this.list2=this.list4
  
      if (this.list2.lengh==0){
        this.exist=false;
    }
    });
  console.log("exist",this.exist)
  } 




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
