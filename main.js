const form = document.getElementById('form-exercicio');


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const CampoA = document.getElementById('numeroA');
    const CampoB = document.getElementById('numeroB');

    if(CampoA.value < CampoB.value) {
        alert("Sucesso!")
    } else{
        alert("Deu errado!")
    }

})

console.log(form);

