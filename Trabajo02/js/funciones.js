
function calcularMasaCorporal() {
    imc=peso/(altura*altura)
    return imc
}

function obtenerEstado() {
    estado = ""
    if (imc < 15)                   estado = "Delgadez muy severa"
    if (imc >= 15 && imc <= 15.9)   estado = "Delgadez severa"
    if (imc >= 16 && imc <= 18.4)   estado = "Delgadez"
    if (imc >= 18.5 && imc <= 24.9) estado = "Peso normal"
    if (imc >= 25 && imc <= 29.9)   estado = "Sobrepeso"
    if (imc >=30 && imc <= 34.9)    estado = "Obesidad moderada"
    if (imc >= 35 && imc <= 39.9)   estado = "Obesidad severa"
    if (imc >= 40)                  estado = "Obesidad mórbida"
    return estado
}







