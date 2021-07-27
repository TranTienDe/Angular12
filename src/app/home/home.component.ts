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
  public traiCayList2 = [
    { ten: 'Táo', gia: 12.590, haGia: true },
    { ten: 'Nho', gia: 3.090, haGia: false },
    { ten: 'Bười', gia: -13.09, haGia: false },
    { ten: 'Cam', gia: 42.02, haGia: true }
  ];

  constructor() { }

  public ngOnInit(): void {
    console.log('Trái cây = ', this.traiCayList);
  }



}
