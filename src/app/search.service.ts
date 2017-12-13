import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class SearchService {

  baseUrl:string = "http://www.omdbapi.com/?apikey=68eb0337";

  constructor(private httpClient:HttpClient) { }

  getMovies(titleSearch){
    return this.httpClient.get<any[]>(this.baseUrl + '&t=' + titleSearch);
  }  

  getById(id){
    console.log(this.baseUrl + '&i=' + id);
    return this.httpClient.get<any[]>(this.baseUrl + '&i=' + id);
  }  
  

}
