const filmes = (data) => {
    let dadosHTML = '';
    let filmesDados = JSON.parse(data.target.response)
    for (let i = 0; i < 3; i++) {
        let filme = filmesDados.results[i];
        dadosHTML += ` 
      <div class="card col-4" id="filmes">
      <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${filme.title}</h5>
        <a  class="btn btn-primary botaoDestaque" onclick = detalhe(${filme.id})>Veja mais</a>
      </div>
    </div>`


    }
    document.getElementById('novidade').innerHTML = dadosHTML;
}

const error = (data) => {
    alert("Erro na requisição");
}
const iniciate = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=60761c6d874d8162bcaac14931db83d1&language=pt-BR";
    xhr.onload = filmes;
    xhr.onerror = error;
    xhr.open('GET', url, true);
    xhr.send();

}



document.onload = iniciate();