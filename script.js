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
      "Economía y Empresa",
      { nombre: "Lenguaje y Comunicación II", requisitos: ["Lenguaje y Comunicación I"] },
      "Procesos Sociales y Políticos",
      "Temas de Filosofía",
      { nombre: "Literatura y Sociedad", requisitos: ["Lenguaje y Comunicación I"] },
      "Arte y Cultura"
    ]
  },
  {
    ciclo: "Tercer Ciclo",
    ramos: [
      "Lenguaje Audiovisual",
      { nombre: "Storytelling", requisitos: ["Lenguaje y Comunicación II"] },
      "Gamificación",
      { nombre: "Fundamentos de la Comunicación", requisitos: ["Procesos Sociales y Políticos"] },
      { nombre: "Estéticas Contemporáneas", requisitos: ["Arte y Cultura"] },
      "Lenguaje Gráfico",
      "Fundamentos de Publicidad y Marketing"
    ]
  },
  {
    ciclo: "Cuarto Ciclo",
    ramos: [
      { nombre: "Técnicas Fotográficas", requisitos: ["Lenguaje Gráfico"] },
      "Técnicas Audiovisuales",
      { nombre: "Bases de la Información", requisitos: ["Storytelling"] },
            { nombre: "Comunicación y Desarrollo", requisitos: ["Fundamentos de la Comunicación"] },
      { nombre: "Comunicación y Empresa", requisitos: ["Fundamentos de la Comunicación"] },
      "Taller de Actuación",
      "Musicalización",
      { nombre: "Comportamiento del Consumidor", requisitos: ["Fundamentos de Publicidad y Marketing"] },
      { nombre: "Producción Informativa", requisitos: ["Storytelling"] },
      { nombre: "Marca Personal y Liderazgo", requisitos: ["Fundamentos de la Comunicación"] }
    ]
  },
  {
    ciclo: "Quinto Ciclo",
    ramos: [
      { nombre: "Narrativa Audiovisual", requisitos: ["Storytelling"] },
      { nombre: "Técnicas de Audio", requisitos: ["Técnicas Audiovisuales"] },
      { nombre: "Géneros Audiovisuales", requisitos: ["Lenguaje Audiovisual"] },
      { nombre: "Posproducción Audiovisual", requisitos: ["Técnicas Audiovisuales"] },
      { nombre: "Sociedad y Comunicación", requisitos: ["Fundamentos de la Comunicación"] },
      { nombre: "Técnicas de Diseño", requisitos: ["Lenguaje Gráfico"] },
      { nombre: "Estrategias de Marketing", requisitos: ["Fundamentos de Publicidad y Marketing"] },
      "Electivos de Marketing y Opinión Pública"
    ]
  },
  {
    ciclo: "Sexto Ciclo",
    ramos: [
      { nombre: "Taller de Video", requisitos: ["Técnicas Audiovisuales", "Narrativa Audiovisual"] },
      { nombre: "Gestión de Contenidos Audiovisuales", requisitos: ["Técnicas Audiovisuales"] },
      { nombre: "Diseño Sonoro", requisitos: ["Técnicas de Audio"] },
      { nombre: "Colorización y Efectos en Posproducción", requisitos: ["Posproducción Audiovisual"] },
      { nombre: "Historia y Estética del Cine", requisitos: ["Lenguaje Audiovisual"] },
      { nombre: "Técnicas de Investigación", requisitos: ["Sociedad y Comunicación"] },
      { nombre: "Comunicación y Experiencia de Usuario", requisitos: ["Técnicas de Diseño"] },
      "Electivos de diseño, comunicación y desarrollo"
    ]
  },
  {
    ciclo: "Séptimo Ciclo",
    ramos: [
      { nombre: "Taller de Televisión", requisitos: ["Narrativa Audiovisual"] },
      { nombre: "Dirección de Actores", requisitos: ["Narrativa Audiovisual"] },
      { nombre: "Podcasting", requisitos: ["Técnicas de Audio"] },
      { nombre: "Semiótica Narrativa", requisitos: ["Narrativa Audiovisual"] },
      { nombre: "Procesos Interculturales", requisitos: ["Sociedad y Comunicación"] },
      { nombre: "Comunicación Política", requisitos: ["Sociedad y Comunicación"] },
      { nombre: "Educación y Comunicación", requisitos: ["Sociedad y Comunicación"] },
      "Electivos de animación, narrativa gráfica, marca"
    ]
  },
  {
    ciclo: "Octavo Ciclo",
    ramos: [
      { nombre: "Narrativa Transmedia", requisitos: ["Taller de Video"] },
      { nombre: "Dirección de Fotografía", requisitos: ["Técnicas Fotográficas", "Taller de Video"] },
      { nombre: "Trabajo de Investigación I", requisitos: ["Técnicas de Investigación"] },
      { nombre: "Trabajo Profesional I", requisitos: ["Técnicas de Investigación"] },
      { nombre: "Producción y Realización Publicitaria", requisitos: ["Taller de Video"] },
      "Electivos de marketing, diseño, campañas"
    ]
  },
  {
    ciclo: "Noveno Ciclo",
    ramos: [
      { nombre: "Taller Transmedia", requisitos: ["Taller de Video"] },
      { nombre: "Dirección Audiovisual", requisitos: ["Taller de Video"] },
      { nombre: "Periodismo Audiovisual", requisitos: ["Taller de Video"] },
      { nombre: "Legislación y Ética Profesional", requisitos: ["Comunicación Política"] },
      { nombre: "Taller de Campañas Sociales", requisitos: ["Comunicación y Desarrollo", "Taller de Video"] },
      { nombre: "Cine Peruano y Latinoamericano", requisitos: ["Lenguaje Audiovisual"] },
      "Electivos de gerencia, periodismo deportivo, etc."
    ]
  },
  {
    ciclo: "Décimo Ciclo",
    ramos: [
      { nombre: "Taller de Cine", requisitos: ["Dirección de Actores", "Taller de Video"] },
      { nombre: "Trabajo de Investigación II", requisitos: ["Trabajo de Investigación I"] },
      { nombre: "Trabajo Profesional II", requisitos: ["Trabajo Profesional I"] },
      "Electivos como campañas gráficas, portafolio fotográfico, videojuegos, etc."
    ]
  }
];

// FUNCIONES PARA GUARDAR Y RECUPERAR DATOS
function getAprobados() {
  return JSON.parse(localStorage.getItem("aprobados")) || [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

// FUNCIONALIDAD PRINCIPAL DE LA MALLA
function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  const aprobados = getAprobados();

  cursos.forEach(ciclo => {
    const cicloDiv = document.createElement("div");
    cicloDiv.className = "ciclo";
    const titulo = document.createElement("h2");
    titulo.textContent = ciclo.ciclo;
    cicloDiv.appendChild(titulo);

    ciclo.ramos.forEach(ramo => {
      const nombre = typeof ramo === "string" ? ramo : ramo.nombre;
      const requisitos = typeof ramo === "string" ? [] : ramo.requisitos;
      const estaAprobado = aprobados.includes(nombre);
      const requisitosAprobados = requisitos.every(req => aprobados.includes(req));

      const div = document.createElement("div");
      div.className = "ramo";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = estaAprobado;
      checkbox.disabled = !estaAprobado && !requisitosAprobados;

      const label = document.createElement("label");
      label.textContent = nombre;
      if (!requisitosAprobados && !estaAprobado) {
        label.classList.add("locked");
      }

      checkbox.addEventListener("change", () => {
        let nuevos = getAprobados();
        if (checkbox.checked) {
          nuevos.push(nombre);
        } else {
          nuevos = nuevos.filter(c => c !== nombre);
        }
        guardarAprobados(nuevos);
        renderMalla();
      });

      div.appendChild(checkbox);
      div.appendChild(label);
      cicloDiv.appendChild(div);
    });

    contenedor.appendChild(cicloDiv);
  });
}

renderMalla();

