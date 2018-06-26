import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public details=[  
    {"name":"Ram", "email":"Ram@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"}, 
    {"name":"shyam", "email":"shyam@gmail.com"},  
    {"name":"john", "email":"john32@gmail.com"},
    {"name":"amir", "email":"amir@gmail.com"},  
    {"name":"vivek", "email":"vivek@gmail.com"}  
      
]  ;
  public row=[];
  constructor() { }

  ngOnInit() {
    //console.log(this.details[0]);
    //console.log(this.details);
    for(var i=0;i<this.details.length;i+=3){
      this.row.push(this.details.slice(i,i+3));
    }
    console.log(this.row);
    
    
  }

}
