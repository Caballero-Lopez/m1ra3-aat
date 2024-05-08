
function eliminarPrimerFila(){
    let primerFila=document.querySelector('tbody tr:first-child');
    primerFila.parentNode.removeChild(primerFila);

}
function eliminarUltimaFila(){
    let ultimaFila=document.querySelector('tbody tr:last-child');
    ultimaFila.parentNode.removeChild(ultimaFila);

}

function agregarFila(){
    let tabla=document.querySelector("#tabla_empleados tbody");
    let fila=tabla.insertRow();
    let col1=fila.insertCell(0);
    let col2=fila.insertCell(1);
    let col3=fila.insertCell(2);
    let col4=fila.insertCell(3);

    col1.innerHTML=document.getElementById("txtnombre").value;
    col2.innerHTML=document.getElementById("txtfechaingreso").value;
    col3.innerHTML=document.getElementById("txtpuesto").value;
    col4.innerHTML=document.getElementById("txtsalario").value;


}