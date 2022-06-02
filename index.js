function agregarPersona(){
    let nombre= document.getElementById('NombreInput');
    let monto= document.getElementById('MontoInput');
    let contenedor= document.getElementById('Total-de-cada-uno');
    contenedor.innerHTML+=`<div>${nombre.value+': $'+monto.value} </div>`;
    nombre.value= '';
    monto.value='';
}