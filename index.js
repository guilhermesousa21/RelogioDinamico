const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


    //pegar os dados da data/hora atual
const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let secs = dateToday.getSeconds()

    //adiciona o 0 nos numeros até 9
    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (secs < 10) secs = '0' + secs

    //puxado do html
    //texto do html que será trocado por hr/min/secs que tá cadastrado acima
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = secs
})