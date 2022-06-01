const $ = (id)=>document.querySelector(id)
const form = $('#form-gastos')
const personas = []

form.onsubmit=(e)=>{
    e.preventDefault()
    const pago = form.pago
    const nombre = form.nombre
    const totalp= $('#total-p')

    totalp.innerText=pago.value
    const pagoPersona= $('#pago-cada-p')
}

