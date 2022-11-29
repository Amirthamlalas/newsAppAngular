import { Component } from '@angular/core';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent {

  title=""

  search=()=>{
    let data:any={
      "title":this.title
    }
    console.log(data)
  }

}
