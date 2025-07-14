const cursos = [
  // Primer Ciclo
  { nombre: "Globalización y Realidad Nacional", ciclo: 1 },
  { nombre: "Lenguaje y Comunicación I", ciclo: 1 },
  { nombre: "Metodologías de Investigación", ciclo: 1 },
  { nombre: "Desarrollo Personal y Social", ciclo: 1 },
  { nombre: "Fundamentos de Matemática", ciclo: 1 },
  { nombre: "Ética Cívica", ciclo: 1 },

  // Segundo Ciclo
  { nombre: "Economía y Empresa", ciclo: 2 },
  { nombre: "Lenguaje y Comunicación II", ciclo: 2, prereq: ["Lenguaje y Comunicación I"] },
  { nombre: "Procesos Sociales y Políticos", ciclo: 2 },
  { nombre: "Temas de Filosofía", ciclo: 2 },
  { nombre: "Literatura y Sociedad", ciclo: 2, prereq: ["Lenguaje y Comunicación I"] },
  { nombre: "Arte y Cultura", ciclo: 2 },

  // Tercer Ciclo
  { nombre: "Lenguaje Audiovisual", ciclo: 3 },
  { nombre: "Storytelling", ciclo: 3, prereq: ["Lenguaje y Comunicación II"] },
  { nombre: "Gamificación", ciclo: 3 },
  { nombre: "Fundamentos de la Comunicación", ciclo: 3, prereq: ["Procesos Sociales y Políticos"] },
  { nombre: "Estéticas Contemporáneas", ciclo: 3, prereq: ["Arte y Cultura"] },
  { nombre: "Lenguaje Gráfico", ciclo: 3 },
  { nombre: "Fundamentos de Publicidad y Marketing", ciclo: 3 },

  // Cuarto Ciclo
  { nombre: "Técnicas Fotográficas", ciclo: 4, prereq: ["Lenguaje Gráfico"] },
  { nombre: "Técnicas Audiovisuales", ciclo: 4 },
  { nombre: "Bases de la Información", ciclo: 4, prereq: ["Storytelling"] },
  { nombre: "Comunicación y Desarrollo", ciclo: 4, prereq: ["Fundamentos de la Comunicación"] },
  { nombre: "Comunicación y Empresa", ciclo: 4, prereq: ["Fundamentos de la Comunicación"] },
  { nombre: "Taller de Actuación", ciclo: 4 },
  { nombre: "Musicalización", ciclo: 4 },
  { nombre: "Comportamiento del Consumidor", ciclo: 4, prereq: ["Fundamentos de Publicidad y Marketing"] },
  { nombre: "Producción Informativa", ciclo: 4, prereq: ["Storytelling"] },
  { nombre: "Marca Personal y Liderazgo", ciclo: 4, prereq: ["Fundamentos de la Comunicación"] },

  // Quinto Ciclo
  { nombre: "Narrativa Audiovisual", ciclo: 5, prereq: ["Storytelling"] },
  { nombre: "Técnicas de Audio", ciclo: 5, prereq: ["Técnicas Audiovisuales"] },
  { nombre: "Géneros Audiovisuales", ciclo: 5, prereq: ["Lenguaje Audiovisual"] },
  { nombre: "Posproducción Audiovisual", ciclo: 5, prereq: ["Técnicas Audiovisuales"] },
  { nombre: "Sociedad y Comunicación", ciclo: 5, prereq: ["Fundamentos de la Comunicación"] },
  { nombre: "Técnicas de Diseño", ciclo: 5, prereq: ["Lenguaje Gráfico"] },
  { nombre: "Estrategias de Marketing", ciclo: 5, prereq: ["Fundamentos de Publicidad y Marketing"] },

  // Sexto Ciclo
  { nombre: "Taller de Video", ciclo: 6, prereq: ["Narrativa Audiovisual", "Técnicas Audiovisuales"] },
  { nombre: "Gestión de Contenidos Audiovisuales", ciclo: 6, prereq: ["Técnicas Audiovisuales"] },
  { nombre: "Diseño Sonoro", ciclo: 6, prereq: ["Técnicas de Audio"] },
  { nombre: "Colorización y Efectos en Posproducción", ciclo: 6, prereq: ["Posproducción Audiovisual"] },
  { nombre: "Historia y Estética del Cine", ciclo: 6, prereq: ["Lenguaje Audiovisual"] },
  { nombre: "Técnicas de Investigación", ciclo: 6, prereq: ["Sociedad y Comunicación"] },
  { nombre: "Comunicación y Experiencia de Usuario", ciclo: 6, prereq: ["Técnicas de Diseño"] },

  // Séptimo Ciclo
  { nombre: "Taller de Televisión", ciclo: 7, prereq: ["Narrativa Audiovisual"] },
  { nombre: "Dirección de Actores", ciclo: 7, prereq: ["Narrativa Audiovisual"] },
  { nombre: "Podcasting", ciclo: 7, prereq: ["Técnicas de Audio"] },
  { nombre: "Semiótica Narrativa", ciclo: 7, prereq: ["Narrativa Audiovisual"] },
  { nombre: "Procesos Interculturales", ciclo: 7, prereq: ["Sociedad y Comunicación"] },
  { nombre: "Comunicación Política", ciclo: 7, prereq: ["Sociedad y Comunicación"] },
  { nombre: "Educación y Comunicación", ciclo: 7, prereq: ["Sociedad y Comunicación"] },

  // Octavo Ciclo
  { nombre: "Narrativa Transmedia", ciclo: 8, prereq: ["Taller de Video"] },
  { nombre: "Dirección de Fotografía", ciclo: 8, prereq: ["Técnicas Fotográficas", "Taller de Video"] },
  { nombre: "Trabajo de Investigación I", ciclo: 8, prereq: ["Técnicas de Investigación"] },
  { nombre: "Trabajo Profesional I", ciclo: 8, prereq: ["Técnicas de Investigación"] },
  { nombre: "Producción y Realización Publicitaria", ciclo: 8, prereq: ["Taller de Video"] },

  // Noveno Ciclo
  { nombre: "Taller Transmedia", ciclo: 9, prereq: ["Taller de Video"] },
  { nombre: "Dirección Audiovisual", ciclo: 9, prereq: ["Taller de Video"] },
  { nombre: "Periodismo Audiovisual", ciclo: 9, prereq: ["Taller de Video"] },
  { nombre: "Legislación y Ética Profesional", ciclo: 9, prereq: ["Comunicación Política"] },
  { nombre: "Taller de Campañas Sociales", ciclo: 9, prereq: ["Comunicación y Desarrollo", "Taller de Video"] },
  { nombre: "Cine Peruano y Latinoamericano", ciclo: 9, prereq: ["Lenguaje Audiovisual"] },

  // Décimo Ciclo
  { nombre: "Taller de Cine", ciclo: 10, prereq: ["Dirección de Actores", "Taller de Video"] },
  { nombre: "Trabajo de Investigación II", ciclo: 10, prereq: ["Trabajo de Investigación I"] },
  { nombre: "Trabajo Profesional II", ciclo: 10, prereq: ["Trabajo Profesional I"] },
];

const aprobados = new Set();

function renderMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = "";

  for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const divCiclo = document.createElement('div');
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

    cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
      const btn = document.createElement('div');
      btn.className = 'curso';
      btn.innerText = curso.nombre;

      const requisitos = curso.prereq || [];
      const habilitado = requisitos.every(req => aprobados.has(req));

      if (!habilitado) {
        btn.classList.add('bloqueado');
      } else if (aprobados.has(curso.nombre)) {
        btn.classList.add('aprobado');
      }

      btn.addEventListener('click', () => {
        if (!habilitado) return;

        if (aprobados.has(curso.nombre)) {
          aprobados.delete(curso.nombre);
        } else {
          aprobados.add(curso.nombre);
        }

        renderMalla();
      });

      divCiclo.appendChild(btn);
    });

    contenedor.appendChild(divCiclo);
  }
}

document.addEventListener('DOMContentLoaded', renderMalla);

