
let listaAmigos = [];

function adicionarAmigo() {
    let addNome = document.querySelector(`input`).value;
     if (addNome != "") {
          listaAmigos.push(addNome);
         }  else {
            alert(`Por favor, insira um nome válido.`);
         }

         console.log(listaAmigos);
         atualizarLista();
         limparAdd();
        
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert(`Primeiramente, adicione um amigo para o sorteio.`);
    } else {
         let indiceAmigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
         let amigoEscolhido = listaAmigos [indiceAmigoAleatorio];
         
        let resultado = document.getElementById(`resultado`);
        resultado.textContent = `O amigo sorteado é: ${amigoEscolhido} `;
        
        let amigoSecreto = document.getElementById(`listaAmigos`);
        amigoSecreto.innerHTML = ``
        
        listaAmigos.splice(indiceAmigoAleatorio, 1);
        
         
         return { indice: indiceAmigoAleatorio, amigo: amigoEscolhido};
    }

}

function atualizarLista() {
    let amigoSecreto = document.getElementById(`listaAmigos`);

    amigoSecreto.innerHTML = ``;
    
    let i = 0;
    for (i; i < listaAmigos.length; i++) {
        let novaLista = document.createElement(`li`);
        novaLista.textContent = listaAmigos[i];
        amigoSecreto.appendChild(novaLista);
     }


    
}

function limparAdd() {
    addNome = document.querySelector(`input`);
    addNome.value = (``);
}


