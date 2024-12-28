//import React from "react";
//import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
//    <React.StrictMode>
//        <App />
//    </React.StrictMode>
//);

// Selecionando os botões pelo ID
const homeButton = document.getElementById("home");
const newVideoButton = document.getElementById("new_video");

// Adicionando eventos de clique para redirecionar
homeButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redireciona para a página inicial
});

newVideoButton.addEventListener("click", () => {
    window.location.href = "new_video.html"; // Redireciona para a página de novo vídeo
});

document.getElementById("input_tit").addEventListener("focus", function () {
    if (this.value === "Coloque um Título") {
        this.value = ""; // Limpa o valor padrão quando o input ganha foco
    }
});

document.getElementById("input_tit").addEventListener("blur", function () {
    if (this.value === "") {
        this.value = "Coloque um Título"; // Restaura o valor padrão se o campo estiver vazio
    }
});

document.getElementById("guardar").addEventListener("click", function () {
    const titulo = document.getElementById("input_tit").value;
    const categoria = document.getElementById("select_cat").value;
    const imagem = document.getElementById("input_img").value;
    const video = document.getElementById("input_link").value;
    const descricao = document.getElementById("input_des").value;

    // Validação básica
    if (!titulo || !categoria || !imagem || !video || !descricao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Identifique a seção correta
    let sectionId;
    if (categoria === "Front End") {
        sectionId = "front_end";
    } else if (categoria === "Back End") {
        sectionId = "back_end";
    } else if (categoria === "Mobile") {
        sectionId = "mobile";
    } else {
        alert("Categoria não encontrada.");
        return;
    }

    // Crie o novo card
    const section = document.getElementById(sectionId);
    if (section) {
        const newCard = `
            <div class="videos">
                <img src="${imagem}" alt="Imagem do Vídeo">
                <p>${titulo}</p>
            </div>
        `;
        section.innerHTML += newCard; // Adiciona o novo card à seção
        alert("Vídeo adicionado com sucesso!");
    } else {
        alert("Erro ao adicionar vídeo.");
    }
});

document.getElementById("Limpar").addEventListener("click", function () {
    document.getElementById("input_tit").value = "";
    document.getElementById("select_cat").value = "Front End";
    document.getElementById("input_img").value = "";
    document.getElementById("input_link").value = "";
    document.getElementById("input_des").value = "";
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
