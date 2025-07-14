const cursos = [
  {
    ciclo: "Primer Ciclo",
    ramos: [
      "Globalización y Realidad Nacional",
      "Lenguaje y Comunicación I",
      "Metodologías de Investigación",
      "Desarrollo Personal y Social",
      "Fundamentos de Matemática",
      "Ética Cívica"
    ]
  },
  {
    ciclo: "Segundo Ciclo",
    ramos: [
      { nombre: "Lenguaje y Comunicación II", requisitos: ["Lenguaje y Comunicación I"] },
      { nombre: "Literatura y Sociedad", requisitos: ["Lenguaje y Comunicación I"] },
      "Economía y Empresa",
      "Procesos Sociales y Políticos",
      "Temas de Filosofía",
      "Arte y Cultura"
    ]
  }
];

const estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  cursos.forEach(ciclo => {
    const divCiclo = document.createElement("div");
    divCiclo.classList.add("ciclo");

    const titulo = document.createElement("h2");
    titulo.textContent = `🟦 ${ciclo.ciclo}`;
    divCiclo.appendChild(titulo);

    ciclo.ramos.forEach(ramo => {
      const nombre = typeof ramo === "string" ? ramo : ramo.nombre;
      const requisitos = typeof ramo === "string" ? [] : ramo.requisitos;

      const divRamo = document.createElement("div");
      divRamo.classList.add("ramo");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = nombre;
      checkbox.checked = !!estado[nombre];
      checkbox.disabled = requisitos.some(req => !estado[req]);

      checkbox.addEventListener("change", () => {
        estado[nombre] = checkbox.checked;
        localStorage.setItem("estadoMalla", JSON.stringify(estado));
        crearMalla(); // actualiza visualmente
      });

      const label = document.createElement("label");
      label.setAttribute("for", nombre);
      label.textContent = nombre;
      if (checkbox.disabled) label.classList.add("locked");

      divRamo.appendChild(checkbox);
      divRamo.appendChild(label);
      divCiclo.appendChild(divRamo);
    });

    contenedor.appendChild(divCiclo);
  });
}

crearMalla();
