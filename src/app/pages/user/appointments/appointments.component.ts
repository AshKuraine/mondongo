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
  now!: Date;
  dni!: number;
  name !: string;
  lastname!: string ;
  age!: number;
  id_history!: string;
  enabled: boolean = false;
  controlDni!: FormControl;
  controlSpecialty!: FormControl;
  controlMedic!: FormControl; 
  controlDate !: FormControl;
  controlSchedule !: FormControl;
  specialties: Specialty[] = SPECIALTIES_DATA;
  medics!: Medic[];
  schedules: string[] = [];
  constructor(
  ) {
    this.controlDni = new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(8), Validators.maxLength(8)]),
    this.controlSpecialty = new FormControl('',[Validators.required]),
    this.controlMedic = new FormControl('',[Validators.required]),
    this.controlDate = new FormControl('',[Validators.required]),
    this.controlSchedule = new FormControl('',[Validators.required]),
    this.now = new Date()
   }
  ngOnInit(): void {
  }

  searchEnsured(event: Event){
    
    for (let i = 0; i < ENSUREDS_DATA.length; i++) {
      if(ENSUREDS_DATA[i].dni==this.controlDni.value){
        this.name = ENSUREDS_DATA[i].name;
        this.lastname = ENSUREDS_DATA[i].lastname_p + " "  + ENSUREDS_DATA[i].lastname_m;
        this.dni = ENSUREDS_DATA[i].dni;
        this.age = this.now.getFullYear() - ENSUREDS_DATA[i].birthday.getFullYear();
        this.id_history = ENSUREDS_DATA[i].id_history;
        this.enabled=true;
        console.log(this.id_history);
        return;
      }else{
        this.name = "";
        this.lastname = "";
        this.dni = 0;
        this.age = 0;
        this.id_history = "";
      }
    }
  }
  onSelectedSpecialty(){
    this.medics = MEDICS_DATA.filter(medic=> medic.id_specialty == this.controlSpecialty.value);
  }
  onSelectedMedic(){
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
    if(this.dni!=0 && 
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
        this.dni=0;
        this.id_history="";
        this.name="";
        this.lastname="";
        this.age=0;
        this.controlDni = new FormControl('',[Validators.required, Validators.maxLength(8)]),
        this.controlSpecialty = new FormControl('',[Validators.required]),
        this.controlMedic = new FormControl('',[Validators.required]),
        this.controlDate = new FormControl('',[Validators.required]),
        this.controlSchedule = new FormControl('',[Validators.required])
       }else{
         alert('Complete todos los campos')
       }
    console.log(APPOINTMENTS_DATA.length);
    console.log(this.controlDate.value)
  }
}