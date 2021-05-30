/**
 * Archivo Jquery que valida los datos a ingresar en Prueba 2
 */

/*
* Validar si el campo está vacio 
*/
function campovacio(id_campo){
    var valor = $("#" + id_campo).val();
    valor = $.trim(valor);
    return valor.length == 0;
}

/*
 * Validación de ruts
 */
 function validar_rut(rut){
    var rut_sin_puntos = rut.replaceAll('.', '');
    var dv_ingresado = rut_sin_puntos.slice(-1);
    var rut_sin_guion = rut_sin_puntos.replaceAll('-', '');
    var rut_sin_dv = rut_sin_guion.slice(0, -1); 
    if (Number.isNaN(rut_sin_dv)){
        return false;
    }
    dv_calculado = validar_dv_rut(rut_sin_dv);
    return dv_calculado == dv_ingresado.toUpperCase(); 
}

/*
 * Validación de dv
 */
function validar_dv_rut(rut_sin_dv){
    var contador = 2;
    var acumulador = 0;
    while (rut_sin_dv != 0)
    {
        multiplo = (rut_sin_dv % 10) * contador;
        acumulador += multiplo;
        rut_sin_dv = (rut_sin_dv - (rut_sin_dv % 10))/10;
        contador++;
        if (contador == 8)
        {
            contador = 2;
        }
    } /*
    * Dígito verificador 
    */
    digito = 11 - acumulador % 11;
    if (digito == 11){
        digito = 0;
    }
    if(digito == 10){
        digito = 'K';
    }
    return digito;
}