
const salarioUsuario = document.getElementById('salario')
const inss = 0
let descontado = 0

function calcularInss(){
    if(salarioUsuario.value <= 1320){
        descontado = salarioUsuario.value - salarioUsuario.value * 0.075
        alert(`seu valor liquido foi ${descontado}`)
    }else if(salarioUsuario.value >= 1320.1 && salarioUsuario.value <= 2571.29){
        descontado = salarioUsuario.value - salarioUsuario.value * 0.09
       alert(`seu valor liquido foi ${descontado}`)
    }else if(salarioUsuario.value >= 2571.30 && salarioUsuario.value <= 3856.94){
         descontado = salarioUsuario.value - salarioUsuario.value * 0.12
       alert(`seu valor liquido foi ${descontado}`)
    }else if(salarioUsuario.value >=  3856.95 && salarioUsuario.value <= 7507.49){
        descontado = salarioUsuario.value - salarioUsuario.value * 0.14
       alert(`seu valor liquido foi ${descontado}`)
    }else{
        alert(`Não teve alterão, seu valor é ${descontado.toFixed(2)}`)
    }
}