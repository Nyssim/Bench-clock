//Função para mostrar o horario atual

function horario(){
    let time = new Date().toLocaleTimeString();

    document.getElementById("hor").textContent = time;

}

setInterval(horario, 36);

//função para o clique do botão

function click(){
    const botao = document.getElementById("btn");
}

click.addEventLister("click", function(){
    alert("Botão clicado")
})