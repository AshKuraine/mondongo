import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
import { SPECIALTIES_DATA } from '../../../mock/specialty.mock';
import { MEDICS_DATA } from '../../../mock/medic.mock';
import { APPOINTMENTS_DATA } from '../../../mock/appointment.mock';
import { Appointment } from 'src/app/core/models/appointment.models';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  now!:Date;
  controlDni!: FormControl;
  dni!: number;
  id_history!:string;
  name!: string;
  lastname!: string;
  age!:number;
  specialty!: string;
  medic!:string;
  appointment_date!:Date;
  schedule!:string;
  constructor() {
    this.controlDni = new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
    this.now = new Date();
   }

  ngOnInit(): void {
  }

  searchAppointment(){
    if(APPOINTMENTS_DATA.filter(appointment => appointment.dni_ensured == this.controlDni.value).length!=0){
      this.name = ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].name;
      this.lastname = ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].lastname_p + " " +
      ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].lastname_m;
      this.id_history = ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].id_history;
      this.dni = ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].dni;
      this.age = this.now.getFullYear() - ENSUREDS_DATA.filter(ensured => ensured.dni == this.controlDni.value)[0].birthday.getFullYear();
      this.specialty = SPECIALTIES_DATA.filter(specialty => specialty.id == (
        APPOINTMENTS_DATA.filter(appointment =>appointment.dni_ensured == this.controlDni.value)[0].id_specialty
      ))[0].name;
      this.medic = MEDICS_DATA.filter(medic => medic.id == (
        APPOINTMENTS_DATA.filter(appointment =>appointment.dni_ensured == this.controlDni.value)[0].id_medic
      ))[0].name + " " + 
      MEDICS_DATA.filter(medic => medic.id == (
        APPOINTMENTS_DATA.filter(appointment =>appointment.dni_ensured == this.controlDni.value)[0].id_medic
      ))[0].lastname ;
      this.schedule = APPOINTMENTS_DATA.filter(appointment => appointment.dni_ensured == this.controlDni.value)[0].schedule;
      this.appointment_date = APPOINTMENTS_DATA.filter(appointment => appointment.dni_ensured == this.controlDni.value)[0].appointment_date;
    }else{
      alert('No tiene citas pendientes')
    }
  }
  
  cancelAppointment(){

    if(this.dni!=0){
      for(let i = 0; i <APPOINTMENTS_DATA.length; i++){
        if(APPOINTMENTS_DATA[i].dni_ensured == this.controlDni.value){
          APPOINTMENTS_DATA.splice(i, 1);
          alert('cita cancelada');
          this.dni=0;
          this.id_history="";
          this.name="";
          this.lastname="";
          this.age=0;
          this.specialty="";
          this.medic="";
          this.appointment_date = new Date(0);
          this.schedule="";
          console.log( APPOINTMENTS_DATA.length)
          return;
        }
      }
    }else{
      alert('Digite el dni del asegurado y presione el botón "buscar"')
      console.log( APPOINTMENTS_DATA.length )
    }
  }
}
