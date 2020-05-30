const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
// Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

renderizaCarta(placeholderCard)

const chamarNovaCartaBtn = document.getElementById('chamarNovaCartaBtn');
const url = 'https://raw.githubusercontent.com/reprograma/T9-JS-III/sexta/04-fetch/exercicio/tarot.json';

chamarNovaCartaBtn.addEventListener('click', () => {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('data', data)
        const random = Math.floor(Math.random() * data.length);
        renderizaCarta(data[random])
    })
})



