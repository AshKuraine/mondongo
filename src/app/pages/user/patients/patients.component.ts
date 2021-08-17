import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  dni!: number;
  id_history!: string;
  name!: string;
  lastname_p!: string;
  lastname_m!: string;
  birthday!: Date;
  gender!: string;
  phone!: number;
  email!:string;
  civil_status!: string;
  country!: string;
  department!: string;   
  district!: string;
  address!: string; 

  ctrlName = new FormControl('', [Validators.required]);
  ctrlLastname_p = new FormControl('', [Validators.required]);
  ctrlLastname_m = new FormControl('', [Validators.required]);
  ctrlDni = new FormControl('', [Validators.required]);
  ctrlBirthday = new FormControl('', [Validators.required]);
  ctrlGender = new FormControl('', [Validators.required]);
  ctrlPhone = new FormControl('', [Validators.required]);
  ctrlEmail = new FormControl('', [Validators.required]);
  ctrlCivil_status = new FormControl('', [Validators.required]);
  ctrlCountry = new FormControl('', [Validators.required]);
  ctrlDepartment = new FormControl('', [Validators.required]);
  ctrlDistrict = new FormControl('', [Validators.required]);
  ctrlAddress = new FormControl('', [Validators.required])

  ctrlBuscarDni = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

  registerEnsured(event: Event){
    if(this.ctrlName.valid &&
      this.ctrlLastname_p.valid &&
      this.ctrlLastname_m.valid &&
      this.ctrlDni.valid &&
      this.ctrlBirthday.valid &&
      this.ctrlGender.valid &&
      this.ctrlPhone.valid &&
      this.ctrlEmail.valid &&
      this.ctrlCivil_status.valid &&
      this.ctrlCountry.valid &&
      this.ctrlDepartment.valid &&
      this.ctrlDistrict.valid &&
      this.ctrlAddress.valid){
        ENSUREDS_DATA.push({
        dni: this.ctrlDni.value,
        id_history:("HC"+ENSUREDS_DATA.length),
        name: this.ctrlName.value, 
        lastname_p: this.ctrlLastname_p.value,
        lastname_m: this.ctrlLastname_m.value,
        birthday: this.ctrlBirthday.value,
        gender: this.ctrlGender.value,
        phone: this.ctrlPhone.value,
        email: this.ctrlEmail.value,
        civil_status: this.ctrlCivil_status.value,
        country: this.ctrlCountry.value,
        department: this.ctrlDepartment.value,
        district: this.ctrlDistrict.value,
        address: this.ctrlAddress.value
        })
        alert('Se registró al asegurado correctamente')
        console.log(
          this.ctrlName.value,
          this.ctrlLastname_p.value + " " + this.ctrlLastname_m.value,
          this.ctrlDni.value,
          this.ctrlBirthday.value,
          this.ctrlGender.value,
          this.ctrlPhone.value,
          this.ctrlEmail.value,
          this.ctrlCivil_status.value,
          this.ctrlCountry.value,
          this.ctrlDepartment.value,
          this.ctrlDistrict.value,
          this.ctrlAddress.value);
        }else{
          alert('Complete todos los campos')
        }
      }

      searchEnsured(event:Event){
        for (let i = 0; i < ENSUREDS_DATA.length; i++) {
          if(ENSUREDS_DATA[i].dni==this.ctrlBuscarDni.value){
            this.name = ENSUREDS_DATA[i].name;
            this.lastname_p = ENSUREDS_DATA[i].lastname_p;
            this.dni = ENSUREDS_DATA[i].dni;
            this.id_history = ENSUREDS_DATA[i].id_history;
            return;
          }else{
            this.dni == null;
            this.id_history = "";
            this.name = "";
            this.lastname_p = "";
            this.lastname_m = "";
            this.gender = "";
            this.phone == null;
            this.email = "";
            this.civil_status = "";
            this.country = "";
            this.department = "" ;
            this.district = "";
            this.address = "";
          }
        } 
      }
}
