const montaFilmes = (data) =>{
  let dadosHTML = '';
  let dadosFilmes = JSON.parse(data.target.response)
  console.log(dadosFilmes)
  for(let i=0;i<4;i++){
    var filme = dadosFilmes.results[i];
    dadosHTML += `<div class="card col-3" id="destaque">
    <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${filme.title}</h5>
      <a  class="btn btn-primary botaoDestaque" onclick = detalhe(${filme.id})>Veja mais</a>
    </div>
  </div>`  
  }


  document.getElementById('filmesDiv').innerHTML = dadosHTML;
}
const mostraErro = (data)=>{
  alert("Erro na requisição");
}

const init = () =>{

  let xhr = new XMLHttpRequest();
  let url = "https://api.themoviedb.org/3/movie/popular?api_key=60761c6d874d8162bcaac14931db83d1&language=pt-BR&";
  console.log()
  xhr.onload = montaFilmes;
  xhr.onerror= mostraErro;
  xhr.open('GET', url, true);
  xhr.send();
}

document.onload = init();