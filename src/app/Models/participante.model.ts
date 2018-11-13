import { Programa } from "./programa.model";
import { Barrio } from "./barrio.model";
import { Universidad } from "./universidad.model";
import { Colegio } from "./colegio.model";





export class Participante {
    constructor(
        nombre: string,
        apellidos: string,
        nombreCompleto: string,
        imagen: string,
        genero: string,
        tipoDocumento: string,
        documento: string,
        fechaNacimiento: Date,
        eps: string,
        añoIngreso: Date,
        lastUpdate: Date,
        estado: string,
        participaciones: Programa,
        usoDeImagen: string,
        numerosContacto: [string],
        direccion: string,
        estrato: string,
        barrio: Barrio,
        email: string,
        origen: Origen,
        colegioActual: Colegio,
        gradoActual: string,
        acudientes: [Acudiente],
        activo: boolean,
        egresado: boolean,
        ocupacion: string,
        areaLaboral: string,
        nivelFormacion: string,
        programaAcademico: string,
        observaciones : string,
        universidad: Universidad
    ){}
}

export class Origen {
    constructor(
        tipoIngreso: string,
        gradoIngreso: string,
        colegioIngreso: Colegio
    ){}
}

export class Acudiente {
    constructor(
        nombreCompleto: string,
        tipoDocumento: string,
        documento: string,
        relacion: string,
        celular: string,
        email: string,
        nivelFormacion: string,
        areaConocimiento: string,
        ocupacion: string,
        lugarTrabajo: string,
        telefonoTrabajo: string
    ){}
}