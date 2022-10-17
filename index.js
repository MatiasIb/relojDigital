
function traerFecha(){
    let numeros = [1,2,3,4,5,6,7,8,9]
    fecha = new Date()
    let horas = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()
    let hora = document.getElementById('hora')
    
    for(i in numeros){
    if(horas == numeros[i] ){
        horas = '0' + horas.toString()
    }
    if(minutos == numeros[i]){
        minutos = '0' + minutos.toString()
    }
}   
    hora.innerText = horas + ' : ' + minutos + ' : ' + segundos
    setTimeout("traerFecha()", 100)
}
traerFecha()



