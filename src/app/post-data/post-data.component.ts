import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private http: HttpServerService) { }

  public ngOnInit(): void {
    const body = {
      "body": "Đây là message 4.",
      "postId": 4
    };
    this.http.postComments(body).subscribe(data => {
      console.log('post result', data);
    });
  }

}
