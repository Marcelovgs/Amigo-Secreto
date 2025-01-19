let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Substituindo a arrow function por uma função tradicional
    amigos.forEach(function (amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos disponíveis para sortear
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione amigos primeiro.");
        return; // Sai da função se o array estiver vazio
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado no elemento de resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>O amigo sorteado é: <strong>" + amigoSorteado + "</strong></p>";
}
