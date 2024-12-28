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

document.addEventListener("DOMContentLoaded", () => {
    // Função para deletar vídeo
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("Delete")) {
            const videoCard = event.target.closest(".videos img");
            videoCard.remove();
        }
    });

    // Função para editar vídeo
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("Edit")) {
            const videoCard = event.target.closest(".videos");
            const imgElement = videoCard.querySelector("img");

            const newTitle = prompt("Digite o novo título:");
            const newCategory = prompt(
                "Digite a nova categoria (Front End, Back End, Mobile):"
            );
            const newImg = prompt("Digite o novo link para a imagem:");
            const newVideo = prompt("Digite o novo link para o vídeo:");
            const newDescription = prompt("Digite a nova descrição:");

            // Atualizar as informações
            if (newImg) imgElement.src = newImg;

            // Atualizar as categorias
            if (newCategory) {
                const section = videoCard.closest(
                    "#front_end, #back_end, #mobile"
                );
                const targetSection = document.querySelector(
                    newCategory === "Front End"
                        ? "#front_end .videos"
                        : newCategory === "Back End"
                        ? "#back_end .videos"
                        : "#mobile .videos"
                );

                if (targetSection && targetSection !== section) {
                    targetSection.appendChild(videoCard);
                } else if (!targetSection) {
                    alert("Categoria não encontrada!");
                }
            }

            // Adicionar informações complementares na interface
            alert(
                `Vídeo atualizado com sucesso:\nTítulo: ${newTitle}\nDescrição: ${newDescription}`
            );
        }
    });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
