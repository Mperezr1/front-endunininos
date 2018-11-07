export class Colegio {
    constructor(
        nombre: string,
        tipo: string,
        telefono: string,
        email: string,
        sitioWeb: string,
        direccion: Date,
        barrio: number,
        estrato: Date,
        tipoCalendario: string,
        caracter: string,
        jornada: string,
        numeroEstudiantes: string,
        contactos: [Contacto]
    ){}
}

export class Contacto {
    constructor(
        nombreCompleto: string,
        cargo: string,
        tipoContacto: string,
        email: string,
        telefono: string,
        celular: string
    ){}
}