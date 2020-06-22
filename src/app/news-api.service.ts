import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
api_key ="969fdde39bdc4fdcba72fe165a48d92a";
baseUrl: string = "https://newsapiraygorodskijv1.p.rapidapi.com/";
  constructor(private httpClient: HttpClient)
   { }

   initSources()
   {
    // return this.httpClient.get(this.baseUrl + 'getSources', {
    //   headers: {
    //     "x-rapidapi-host": "NewsAPIraygorodskijV1.p.rapidapi.com",
    //     "x-rapidapi-key": "ff384ee089msh9c485e98f1b3b14p195dcbjsn97e9b0c68a8a"
    //   }
    // });

     return this.httpClient.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
   }

  initArticles()
  {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticlesById(source :string)
  {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
