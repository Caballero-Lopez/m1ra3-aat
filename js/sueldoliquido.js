function calcularLiquido() {
    let salario=document.getElementById("txtsalario").value;
    let bonificacion=document.getElementById("txtbonificacion").value;
    let comision=document.getElementById("txtcomision").value;
    let ahorro=document.getElementById("txtahorro").value;
    let prestamos=document.getElementById("txtprestamos").value;
    
    console.log(salario);
    
    document.getElementById("txtigss").value=parseFloat(salario)*4.83/100;
    let igss=document.getElementById("txtigss").value;
    console.log(igss);
    document.getElementById("txtingresos").value = parseFloat(salario)+parseFloat(bonificacion)+parseFloat(comision);
    let ingresos=document.getElementById("txtingresos").value;
    document.getElementById("txtegresos").value=parseFloat(ahorro)+parseFloat(igss)+parseFloat(prestamos);
    let egresos=document.getElementById("txtegresos").value;
    document.getElementById("txtliquido").value= ingresos-egresos;

    
    
}