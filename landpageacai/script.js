document.getElementById("pedidoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let sabor = document.getElementById("sabor").value;

    if (nome === "") {
        alert("Por favor, preencha seu nome.");
    } else {
        alert(`Pedido confirmado! Obrigado, ${nome}, pelo seu pedido de ${sabor}.`);
        document.getElementById("pedidoForm").reset();
    }
});
