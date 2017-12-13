import { Component, OnInit } from '@angular/core';

import { SearchService } from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue:string = "game";

  itemsResult:any;
  itemsList:any[] = [];
  
  constructor(private searchService:SearchService){}

  ngOnInit() {
  }  

  searchGo(){
    //let res;
    this.searchService.getMovies(this.searchValue).subscribe(
      (result) => this.itemsResult = result
    );
    //this.itemsResult = res;
    //console.log(this.queryResult);
  }
  
  saveItem(index){
    if(!this.itemsList.find(x => x.Title === this.itemsResult.Search[index].Title)){
      this.itemsList.push(this.itemsResult.Search[index]);
    }
  }

  deleteItem(index){
    this.itemsList.splice(index, 1);
  }  

}
