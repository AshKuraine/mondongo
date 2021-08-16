import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Specialty } from '../../../core/models/specialty.models';
import { Medic } from '../../../core/models/medic.models';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
import { SPECIALTIES_DATA } from '../../../mock/specialty.mock';
import { MEDICS_DATA } from '../../../mock/medic.mock';
import { APPOINTMENTS_DATA } from '../../../mock/appointment.mock';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit {
  dni!: string;
  name!: string;
  lastname!: string ;
  age!: number;
  id_history!: string;
  enabled: boolean = false;
  controlDni = new FormControl('',[Validators.required, Validators.maxLength(8)]);
  controlSpecialty = new FormControl('',[Validators.required]); 
  controlMedic = new FormControl('',[Validators.required]);
  controlDate = new FormControl('',[Validators.required]);
  controlSchedule = new FormControl('',[Validators.required]);
  specialties: Specialty[] = SPECIALTIES_DATA;
  medics!: Medic[];
  schedules: string[] = [];
  constructor() { }
  ngOnInit(): void {
  }

  searchEnsured(event: Event){
    
    for (let i = 0; i < ENSUREDS_DATA.length; i++) {
      if(ENSUREDS_DATA[i].dni==this.controlDni.value){
        this.name = ENSUREDS_DATA[i].name;
        this.lastname = ENSUREDS_DATA[i].lastname;
        this.dni = ENSUREDS_DATA[i].dni;
        this.age = ENSUREDS_DATA[i].age;
        this.id_history = ENSUREDS_DATA[i].id_history;
        this.enabled=true;
        return;
      }else{
        this.name = "";
        this.lastname = "";
        this.dni = "";
        this.age = 0;
        this.id_history = "";
      }
    }
  }
  onSelectedSpecialty(event:Event){
    this.medics = MEDICS_DATA.filter(medic=> medic.id_specialty == this.controlSpecialty.value);
  }
  onSelectedMedic(event:Event){
    this.schedules=[];
    for(let i=0;i<MEDICS_DATA.length;i++){
      if(MEDICS_DATA[i].id == this.controlMedic.value){
        for(let j=0;j<MEDICS_DATA[i].schedules.length;j++){
          this.schedules.push(MEDICS_DATA[i].schedules[j].schedule);
        }
        console.log(this.controlMedic.value)
      }
    }
  }

  generateAppointment(){
    let id: string = "";
    if(this.dni!=null && 
       this.controlDate.valid && 
       this.controlMedic.valid && 
       !(this.controlMedic.value == "Seleccione") &&
       this.controlSpecialty.valid &&
       !(this.controlSpecialty.value == "Seleccione") &&
       this.controlSchedule.valid &&
       !(this.controlSchedule.value == "Seleccione")){
        APPOINTMENTS_DATA.push({
          id: id.concat("AP",(APPOINTMENTS_DATA.length+1).toString()),
          dni_ensured:this.dni,
          id_specialty: this.controlSpecialty.value,
          id_medic:this.controlMedic.value,
          appointment_date: this.controlDate.value,
          schedule:this.controlSchedule.value
        })
        alert('Cita generada')
       }else{
         alert('Complete todos los campos')
       }
    console.log(APPOINTMENTS_DATA.length);
    console.log(this.controlDate.value)
  }
}