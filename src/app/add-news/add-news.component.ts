import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {

  author=""
  title=""
  description=""
  urlToImage=""

  readValue=()=>{
    let data:any={
      "author":this.author,
      "title":this.title,
      "description":this.description,
      "urlToImage":this.urlToImage
    }
    console.log(data)
  }

}
