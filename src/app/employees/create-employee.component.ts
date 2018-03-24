import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';

import { Department } from '../model/department.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  /******** Initilize Date ********/
  // dateOfBirth: Date = new Date(2018, 0, 30);

  // gender = 'male';
  // isActive = true;
  // department = '3';


  departments: Department[] = [
  { id: 1, name: 'Help Desk' },
  { id: 2, name: 'HR' },
  { id: 3, name: 'IT' },
  { id: 4, name: 'Payroll' }
];

  employee: Employee = {
  id: null,
  name: null,
  gender: null,
  contactPreference: null,
  phoneNumber: null,
  email: '',
  dateOfBirth: null,
  department: "-1",
  isActive: true,
  photoPath: null
  };

  constructor(private _employeeService: EmployeeService, private _router: Router) {

     this.datePickerConfig = Object.assign({}, {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
        /******** Other Options ********/
        // showWeekNumbers: true,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31)

      });
  }

  ngOnInit() {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }



}
