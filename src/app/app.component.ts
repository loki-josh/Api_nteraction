import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api_interaction';
  result: any = [];
  result2: any = []

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.userDetails();
    this.userDetails2();

  }

  userDetails() {
    this.api.getuserdata().subscribe((response: any) => {
      this.result = response.data;
      console.log(this.result)
    });

  }
  userDetails2() {
    this.api.getuserdata2().subscribe((response2: any) => {
      this.result2 = response2.data;
      console.log(this.result2)
    });

  }
  
  
}
  



