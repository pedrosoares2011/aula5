let numSec = Math.floor(Math.random()*10) + 1;
console.log(numSec);
 
let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");
let load = document.getElementById("load");

function start() {
 
    document.getElementById("batata").innerText = "Aguardando resultado...";
    document.getElementById("cabra").src = "https://i.gifer.com/ZKZg.gif";
    load.currentTime = 0; 
    load.play();
    setTimeout(verificarResultado, 5005);
 
}
 
function verificarResultado() { 
    
    let palpite = parseInt(document.getElementById("chute").value);
 
    if(numSec == palpite){
        document.getElementById("batata").innerText = "Acertou Mizeravi!! 🔥";
        document.getElementById("cabra").src = "https://img.freepik.com/fotos-premium/vencedor-3d-com-um-trofeu-de-ouro-nas-maos_168450-28.jpg";
        acerto.currentTime = 0;
        acerto.play();
    } else {
        document.getElementById("batata").innerText = "Errou !!!! 😂";
        document.getElementById("cabra").src = "https://img.freepik.com/fotos-premium/pessoas-brancas-3d-com-dor-de-cabeca_58466-6780.jpg?semt=ais_related_payload_trends&w=740&q=80";
        erro.currentTime = 0;
        erro.play();
    }
}

function reset() {
window.location.reload();
}
