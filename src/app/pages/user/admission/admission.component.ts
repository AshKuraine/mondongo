import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
import { SPECIALTIES_DATA } from '../../../mock/specialty.mock';
import { MEDICS_DATA } from '../../../mock/medic.mock';
import { APPOINTMENTS_DATA } from '../../../mock/appointment.mock';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  controlDni = new FormControl();
  name!: string;
  lastname!: string;
  specialty!: string;
  medic!:string;
  appointment_date!:Date;
  schedule!:string;
  constructor() { }

  ngOnInit(): void {
  }
  searchAppointment(event:Event){
    this.name = "";
    this.lastname = "";
    this.specialty = "";
    this.medic = "";
    this.schedule = "";
    
    for(let i = 0; i <APPOINTMENTS_DATA.length; i++) {
      if(APPOINTMENTS_DATA[i].dni_ensured == this.controlDni.value){
        this.name = ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].name;
        this.lastname = ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].lastname;
        this.specialty = SPECIALTIES_DATA.filter(specialty => specialty.id = APPOINTMENTS_DATA[i].id_specialty)[0].name;
        this.medic = MEDICS_DATA.filter(medic=> medic.id == APPOINTMENTS_DATA[i].id_medic)[0].name
        +" "+ MEDICS_DATA.filter(medic=> medic.id == APPOINTMENTS_DATA[i].id_medic)[0].lastname;
        this.schedule = APPOINTMENTS_DATA[i].schedule;
        this.appointment_date = APPOINTMENTS_DATA[i].appointment_date;
      }
    }
  }
}
