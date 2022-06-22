const filmesDados = {

}

var codFilme = () => {
    let input = document.getElementById('pesquisa');

    const pesquisa = input.value;
    const listaUser = localStorage.setItem('bd', pesquisa);


    window.location.assign("pesquisa.html");

}

const mostraFilmes = (data) => {
    let dadosHTML = '';
    let filmesDados = JSON.parse(data.target.response)
    let filme = filmesDados;
    let dataJson = JSON.stringify(filme.release_date);
    let datat = dataJson.replaceAll("-", "/");
    let dataCorreta = JSON.parse(datat)
    dadosHTML += ` 
    <div id="imagem" style="float:left;">
    <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}"style="width:70%;border-radius: 10px;margin-bottom: 10px " >
    </div>
    <div id="descricao" >
    <h1>${filme.title}</h1>
    <h2>Sinopse</h2>
    <p>${filme.overview}</p>
     <h2>Gênero</h2>
     <p>${filme.genres[0].name} e ${filme.genres[1].name}</p>
     <h2>Avaliação</h2>
     <p>IMDb: ${filme.vote_average}</p>
     <h2>Data de lançamento</h2>
     <p>${dataCorreta}</p>
  </div>`


    document.getElementById('detalhe').innerHTML = dadosHTML;
}

const mostrarErro = (data) => {
    alert("Erro na requisição");
}
const inic = () => {
    let pesquisa = localStorage.getItem('ids');
    let xhr = new XMLHttpRequest();
    let url = `https://api.themoviedb.org/3/movie/${pesquisa}?api_key=60761c6d874d8162bcaac14931db83d1&language=pt-BR`;

    xhr.onload = mostraFilmes;
    xhr.onerror = mostrarErro;
    xhr.open('GET', url, true);
    xhr.send();

}
document.onload = inic();