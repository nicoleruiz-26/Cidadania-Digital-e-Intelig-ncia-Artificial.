function respostaCorreta() {
    document.getElementById("resultado").innerHTML =
    "✅ Correto! Sempre verifique a fonte antes de compartilhar.";
}

function respostaErrada() {
    document.getElementById("resultado").innerHTML =
    "❌ Errado! Compartilhar sem verificar pode espalhar desinformação.";
}

document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
    "Obrigado, " + nome +
    "! Você concluiu a atividade de conscientização sobre Deepfakes e desinformação.";
});
