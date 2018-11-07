import { Participante } from "./participante.model";
import { Horario } from "./horario.model";
import { Programa } from "./programa.model";

export class Grupo {
    constructor(
        codigoGrupo: string,
        programa: Programa,
        integrantes: [Participante],
        monitor: Monitor,
        horario: Horario,
        ){}

}


export class Monitor {
    constructor(
        nombreCompleto: string,
        celular: string
    ){}
}