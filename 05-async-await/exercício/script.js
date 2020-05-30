const formGithub = document.getElementById("formGithub");
const userGithub = document.getElementById("userGithub");


// https://api.github.com/users/${userGithubValue}
// http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC


const githubUrl = 'https://api.github.com/users/${userGithubValue}'
console.log(githubUrl)
const handleSubmit = async (e) => {
  e.preventDefault();

};

formGithub.onsubmit = handleSubmit;



// 1) assistir o evento de clique do botão submit
// 2) quando houver clique
  // a) recebe o valor do input
  // b) passa para a chamda de API do Github
  // c) do objeto recebido, pegar somente o nome
  // d) inserir esse nome junto com ", seu humor hoje é: " no placeholder

  // e) fazer chamada e API do giphy
  // f) receber a array
  // g) pegar um número aleatório de 0 a 24
  // h) pegar a url da imagem do item escolhido
  // i) inserir a url da imagem no src do placeholder