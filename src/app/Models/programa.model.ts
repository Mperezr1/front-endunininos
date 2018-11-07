export class Programa {
    constructor(
        nombre: string,
        fechaInicio: Date,
        fechaFin: Date,
        actividades: [Actividad]
    ){}
}
export class Actividad {

    nombre: string = "";
    fecha: Date = new Date();
    
}