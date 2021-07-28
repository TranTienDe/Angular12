import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public formData = new FormGroup(
  //   {
  //     name: new FormControl('Tiến Đề'),
  //     age: new FormControl()
  //   },
  // );

  public formData = this.formBuilder.group(
    {
      name: ['', Validators.required],
      age: ['', Validators.required]
    }
  );

  constructor(private common: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('onSubmit', this.formData.value.name);
    this.common.submitData({ name: this.formData.value.name, age: this.formData.value.age });
  }

}
