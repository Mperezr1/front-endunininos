export interface EstadisticaColegios {
    seriesData: string[];
    atributoSeleccionado: string;
    //Ayuda al back-end a saber cuales son las busquedas
    parametrosAUsar: string[],
    //Estos son los parametros para el eje x
    barChartLabels: string[],
    //Los siguientes datos son llenados normalmente en el back-end , estan representados aqui ya que esta es la forma en que funcionan los charts.
    //El tipo del chart
    barChartType: string,
    barChartLenged: boolean,
    //Los datos que se muestras, data: valores del eje y, estos datos son correspondientes al orden que hay en los strings.
    //; label: los items a ser analizados;
    barChartData: [{data: number[], label: string}]
}