function calcular(operacao) {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    let resultadoText = '';
    
    switch(operacao) {
        case 'somar':
            resultadoText = `A soma dos números ${n1} + ${n2} é: ${Number(n1) + Number(n2)}`;
            break;
        case 'subtrair':
            resultadoText = `A subtração dos números ${n1} - ${n2} é: ${Number(n1) - Number(n2)}`;
            break;
        case 'multiplicar':
            resultadoText = `A multiplicação dos números ${n1} * ${n2} é: ${Number(n1) * Number(n2)}`;
            break;
        case 'dividir':
            resultadoText = `A divisão dos números ${n1} / ${n2} é: ${Number(n1) / Number(n2)}`;
            break;
    }
    
    document.getElementById("resultado").innerHTML = resultadoText;
}
