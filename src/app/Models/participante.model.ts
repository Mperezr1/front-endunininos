import { Barrio } from "./barrio.model";
import { Colegio } from "./colegio.model";

export class Participante {
    constructor(
        estadodb: string,
        estado: string,
        imagen: string,
        edadParticipaciones: number,
        genero: string,
        nombre: string,
        nombreCompleto: string,
        tipoDocumento: string,
        documento: string,
        fechaNacimiento: string,
        telefono: number,
        celular: number,
        direccion: string,
        barrio: Barrio,
        estrato: string,
        email: string,
        eps: string,
        origen: Origen,
        colegioActual: Colegio,
        gradoActual: string,
        egresado: boolean,
        ocupacion: string,
        areaLaboral: string,
        nivelFormacion: string,
        programaAcademico: string,
        universidad: string,
        observaciones : string,
        acudientes: [Acudiente],
        activo: boolean,
        participaciones: [Participacion],
        numParticipaciones: Number, 
        participacionExpediciones:  Boolean, 
    ){}
}

export class Origen {
    constructor(
        // si llena colegio colegio sino otro
        tipoIngreso: string,
        colegioIngreso: Colegio,
        gradoIngreso: string,
        añoIngreso: Date
    ){}
}

export class Acudiente {
    constructor(
        relacion: string,
        nombreCompleto: string,
        tipoDocumento: string,
        documento: string,
        celular: string,
        email: string,
        nivelFormacion: string,
        areaConocimiento: string,
        ocupacion: string,
        lugarTrabajo: string,
        telefonoTrabajo: string
    ){}
}

export class Participacion {
    constructor(
        programa: string,
        nombre: string,
        grupo: string,
    ){}
}