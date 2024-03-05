const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reproducirSonido(sonido) {
    const canciones = [
        ['brr', 'fiu', 'cric-cric', 'brrah'],
        ['pep', 'birip', 'trri-trri', 'croac'],
        ['bri-bri', 'plop', 'cric-cric', 'brrah']
    ];
    let sonidosRestantes = [];
    let respuesta = 'No encontramos tu sonido en ninguna de las canciones :c';
    for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];
        if (cancion.includes(sonido)) {
            sonidosRestantes = cancion.slice((cancion.indexOf(sonido)+1))
            respuesta = 'La cancion es la numero: ' + (i+1) + ', el resto de sinfonia es: ' + sonidosRestantes;
            break;
        }
    }
    console.log(respuesta);
}
console.log('El lago musical by Douglas');
console.log(' ------------ Sonidos ------------')
console.log('Rana: brr, birip, brrah, croac')
console.log('Libélula: fiu, plop, pep')
console.log('Grillo: cric-cric, trri-trri, bri-bri')

rl.question('Por favor ingrese uno de los sonido disponibles: ', (sonido) => {
    reproducirSonido(sonido);
    rl.close();
});