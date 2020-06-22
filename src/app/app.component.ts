import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 mArticles :[];
 mSources :[];
 
 constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }
  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data =>this.mSources = data['sources']);
  }

  searchArticles(sources)
  {
    console.log("Selected Sources is : {0}",sources);
    this.newsapi.getArticlesById(sources).subscribe(data => this.mArticles = data['articles']);
  }

}
