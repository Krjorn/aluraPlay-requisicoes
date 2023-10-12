# AluraPlay - requisições

Projeto desenvolvido como parte do curso JavaScript: criando requisições da Alura, voltado ao estudo de requisições feitas para uma API em JavaScript (*GET* e *POST*), que tornaram possível a apresentação, inserção e busca de vídeos na plataforma.

| :placard: Vitrine.Dev ||
| ------------- | --- |
| :sparkles: Nome | **AluraPlay - requisições**
| :label: Tecnologias | HTML, CSS, JavaScript, Node.js
| :fire: Desafio | https://cursos.alura.com.br/course/javascript-criando-requisicoes

![Imagem do projeto.](./img/project.png#vitrinedev)

## Para rodar o projeto

É necessário ter Node.js instalado, além de um servidor local (como o *Live Server* do Visual Studio Code) para seguir os passos abaixo:

1. Clone ou [baixe](https://github.com/Krjorn/aluraPlay-requisicoes/archive/refs/heads/main.zip) o repositório
2. Abra o terminal no diretório em que o projeto se encontra
3. Instale as dependências do projeto com `npm install`
4. Execute o comando `npx json-server --watch db.json`
5. Verifique se a porta usada corresponde a `http://localhost:3000/videos`, caso contrário vá até o arquivo *conectaApi.js*, na pasta *js* e altere o valor da *string* `apiEndpoint` para a porta correspondente
6. Abra o arquivo *index.html* em um servidor local