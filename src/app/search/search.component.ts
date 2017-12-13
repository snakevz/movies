import { Component, OnInit } from '@angular/core';

import { SearchService } from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue:string = "game";
  itemResult:any;
  itemsList:any[] = [];
  
  constructor(private searchService:SearchService){}

  ngOnInit() {
  }  

  searchGo(){
    this.searchService.getMovies(this.searchValue).subscribe(
      (items) => this.itemResult = items
    );
  }
  saveItem(){
    if(!this.itemsList.find(x => x.Title === this.itemResult.Title)){
      this.itemsList.push(this.itemResult);
    }
  }
  deleteItem(index){
    this.itemsList.splice(index, 1);
  }  

}
