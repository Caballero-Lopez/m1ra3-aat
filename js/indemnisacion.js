function calcularimdenizacion() {
    let sueldobase = document.getElementById("txtsueldobase").value;
    let bono14 = document.getElementById("txtbono14").value;
    let aguinaldo = document.getElementById("txtaguinaldo").value;
    let ingresos = document.getElementById("txtingresos").value;
    let deudas = document.getElementById("txtdeudas").value;
    let anios=document.getElementById("txtanios").value;

    //let imdenizacion =document.getElementById("txtimdenizacion").value;
    let calcularbono = bono14 * sueldobase / 12;
    document.getElementById("txtcalculobono").value = calcularbono
    let calcularaguinaldo= parseFloat(aguinaldo)*sueldobase/12;

    document.getElementById("txtcalculoaguinaldo").value=calcularaguinaldo;
    document.getElementById("txtindemnizacion").value=parseFloat(sueldobase)*parseFloat(anios)+parseFloat(calcularbono)+parseFloat(calcularaguinaldo)-parseFloat(deudas);
}
