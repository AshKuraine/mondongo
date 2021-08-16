export interface Medic {
    id: string;
    dni: string;
    name: string;
    lastname: string;
    age: number;
    id_specialty: string;
    schedules: {schedule:string; quantity:number; max_quantity:number}[]
    salary: number;
  }