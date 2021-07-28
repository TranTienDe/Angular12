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

  public districts: string[] = [];
  public vietnamData = [
    { city: 'Chọn thành phố', district: [] },
    {
      city: 'An Giang', district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu'
      ]
    },
    {
      city: 'Bà Rịa - Vũng tàu',
      district: [
        'Thành phố vũng tàu',
        'Thị xã Bà Rịa'
      ]
    }
  ];

  constructor() { }

  public ngOnInit(): void {
    console.log('Trái cây = ', this.traiCayList);
  }

  public onChange(event: any): void {
    const city = event.target.value;
    console.log('event: ', city);

    //Cách 1
    // const searchItem = this.vietnamData.filter(item => item.city === city);
    // if(searchItem){
    //   this.districts = searchItem[0].district;
    // }

    //cách 2
    this.districts = this.vietnamData.find(item => item.city === city)?.district || [];

  }

}
