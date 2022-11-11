$(".btn-filter").click((e) => {
  e.preventDefault();
  $(".select-filter").toggleClass("d-none");
  if ($(".select-filter").hasClass("d-none")) {
    $("#projeto-list").addClass("d-none");
    $("#card").removeClass("d-none");
  }
});

function listarProjetos() {
  const fetchProjetos = fetch("../projetos.json");
  const projetosGrid = document.querySelector("#card");

  function createProjeto(projeto) {
    const figure = document.createElement("figure");
    figure.innerHTML = `  <img src="${projeto.image}" alt="Imóvel 1" />
                            <figcaption class="text-uppercase">${projeto.title}</figcaption>`;
    return figure;
  }

  fetchProjetos
    .then((response) => response.json())
    .then((projeto) => {
      projeto.forEach((e) => {
        projetosGrid.appendChild(createProjeto(e));
      });
    });
}

listarProjetos();
