var codFilme = () => {
  let input = document.getElementById('pesquisa');

  const pesquisa = input.value;
  const listaUser = localStorage.setItem('bd', pesquisa);


  window.location.assign("pesquisa.html");

}

const mostraFilmes = (data) => {
  let dadosHTML = '';
  let filmesDados = JSON.parse(data.target.response)

  for (let i = 0; i < filmesDados.results.length; i++) {
    let filme = filmesDados.results[i];
    dadosHTML +=
      `<div id = "edit" class="card col-4" >
              <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}"  alt="...">
              <div class="card-body">
                <h5 class="card-text">${filme.title}</h5>
                <a  class="btn btn-primary botaoDestaque" onclick = detalhe(${filme.id})>Veja mais</a>
              </div>
            </div>`
  }
  document.getElementById('divFilmes').innerHTML = dadosHTML;
}
function detalhe(x) {
  localStorage.setItem('ids', x);
  window.location.assign("detalhe.html")
}
const mostrarErro = (data) => {
  alert("Erro na requisição");
}
const inic = () => {
  let pesquisa = localStorage.getItem('bd');
  let xhr = new XMLHttpRequest();
  let url = "https://api.themoviedb.org/3/search/movie?api_key=60761c6d874d8162bcaac14931db83d1&language=pt-BR&query=%22" + pesquisa;

  xhr.onload = mostraFilmes;
  xhr.onerror = mostrarErro;
  xhr.open('GET', url);
  xhr.send();

}
document.onload = inic();