import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Huy Nguyễn';
  public age = 25;
  public traiCayList = ['Táo', 'Nho', 'Cam', 'Bưởi'];

  constructor() { }

  public ngOnInit(): void {
    console.log('Trái cây = ', this.traiCayList);
  }



}
