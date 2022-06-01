const $ = (id)=>document.querySelector(id)
const form = $('#form-gastos')
const personas = []

form.onsubmit=(e)=>{
    e.preventDefault()
    const pago = Number(form.pago.value)
    const nombre = form.nombre.value
    const totalp= $('#total-p')
    const divPersonasPagando = $('#personas_pagando')
    personas.push(Number(pago))

    divPersonasPagando.appendChild(personaInfoPago(nombre,pago))

    totalp.innerText= Number(totalp.innerText) + pago
    const pagoPersona= $('#pago-cada-p')
}

function personaInfoPago(nombre,pago){
    const div= document.createElement('div')
    div.classList.add('px-4')
    div.classList.add('border')
    div.classList.add('rounded-bottom')
    div.textContent=nombre+'   $'+pago
    return div
}

