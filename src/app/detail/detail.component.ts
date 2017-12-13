import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from "../search.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  itemDetail:any;  

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private searchService:SearchService) { }

  ngOnInit() {
    let reqid = this.activatedRoute.snapshot.params.id;
    this.searchService.getById(reqid).subscribe(
      (result) => this.itemDetail = result
    );    
  }

  pageSearch(){
    this.router.navigate(['']);
  }

}
