
const inputNome = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const btnAdicionar = document.getElementById('button-add'); 
const btnSortear = document.getElementById('button-draw'); 
const resultado = document.getElementById('resultado'); 


let nomes = [];


btnAdicionar.addEventListener('click', () => {
  const nome = inputNome.value.trim(); 

  if (!nome) {
    alert('Por favor, insira um nome.');
    return;
  }

  nomes.push(nome);

  
  const li = document.createElement('li');
  li.textContent = nome;
  listaAmigos.appendChild(li);

  inputNome.value = ''; 
});


btnSortear.addEventListener('click', () => {
  if (nomes.length === 0) {
    alert('Não há nomes na lista.');
    return;
  }

 
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceAleatorio];

  resultado.textContent = `O amigo secreto é: ${nomeSorteado}`;
});