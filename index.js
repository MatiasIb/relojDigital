
function traerFecha(){
    let numeros = "1,2,3,4,5,6,7,8,9"
    fecha = new Date()
    let horas = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()
    let hora = document.getElementById('hora')
    if(horas == parseInt(numeros) ){
        horas = '0' + horas.toString()
    }
    if(minutos == parseInt(numeros)){
        minutos = '0' + minutos.toString()
    }

    setInterval("location.reload()",10000);   
    hora.innerHTML = horas + ' : ' + minutos + ' : ' + segundos
}
traerFecha()

