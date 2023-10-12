import { conectaApi } from './conectaApi.js';

const formulario = document.querySelector('[data-formulario]');

async function adicionarVideo(evento) {
    evento.preventDefault();

    const url = formataUrl(document.querySelector('[data-url]').value);
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = '../pages/envio-concluido.html';
    } catch(e) {
        alert(e);
    }
}

function formataUrl(url) {
    url = url.slice(-11);
    const urlFormatada = `https://www.youtube.com/embed/${url}`;
    return urlFormatada;
}

formulario.addEventListener('submit', evento => adicionarVideo(evento));