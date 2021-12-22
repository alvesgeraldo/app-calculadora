function calcular(tipo, valor) {

    if (valor === 'C') {
        document.getElementById('resultado').value = '';
    }

    switch (valor) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            document.getElementById('resultado').value += valor;
    }

    if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {
        document.getElementById('resultado').value += valor;
    } else if (valor === '=') {
        document.getElementById('resultado').value = eval(document.getElementById('resultado').value);
    }

}