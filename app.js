const $ = (id)=>document.querySelector(id)
const form = $('#form-gastos')
const personas = []

form.onsubmit=(e)=>{
    e.preventDefault()
    const pago = Number(form.pago.value)
    const nombre = form.nombre.value
    const totalp= $('#total-p')
    const divPersonasPagando = $('#personas_pagando')
    const pagoPersona= $('#pago-cada-p')

    personas.push({
        pago:Number(pago),
        persona:nombre,
        fecha:Date.now()
    })

    appendAlElementoUsandoArray(divPersonasPagando,personas)
    totalp.innerText= (Number(totalp.innerText) + pago).toFixed(2)
    pagoPersona.innerText = (Number(totalp.innerText)/personas.length).toFixed(2)
    form.nombre.value = null;
    form.pago.value = null;
}

function personaInfoPago(nombre,pago){
    const div= document.createElement('div')
    div.classList.add('px-4')
    div.classList.add('border')
    div.classList.add('rounded-bottom')
    div.textContent=nombre+'   $'+pago
    return div
}

function appendAlElementoUsandoArray(htmlElemnt,array){
    htmlElemnt.innerHTML =''
    for(let elem of array ){
        htmlElemnt.appendChild(personaInfoPago(elem.persona,elem.pago))
    }
}