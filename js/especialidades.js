const especialidades = [
    {
      nombre: "Alergología",
      descripcion: "Diagnóstico y tratamiento de alergias.",
    },
    {
      nombre: "Anestesiología",
      descripcion:
        "Administración de anestesia y manejo del dolor perioperatorio.",
    },
    {
      nombre: "Cardiología",
      descripcion:
        "Diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio.",
    },
    {
      nombre: "Dermatología",
      descripcion: "Diagnóstico y tratamiento de enfermedades de la piel.",
    },
    {
      nombre: "Endocrinología",
      descripcion: "Diagnóstico y tratamiento de enfermedades hormonales.",
    },
    {
      nombre: "Gastroenterología",
      descripcion:
        "Diagnóstico y tratamiento de enfermedades del sistema digestivo.",
    },
    {
      nombre: "Geriatría",
      descripcion: "Atención médica de personas mayores.",
    },
    {
      nombre: "Hematología",
      descripcion:
        "Diagnóstico y tratamiento de enfermedades de la sangre.",
    },
    {
      nombre: "Infectología",
      descripcion: "Diagnóstico y tratamiento de enfermedades infecciosas.",
    },
    {
      nombre: "Nefrología",
      descripcion: "Diagnóstico y tratamiento de enfermedades del riñón.",
    },
    {
      nombre: "Neumología",
      descripcion:
        "Diagnóstico y tratamiento de enfermedades del sistema respiratorio.",
    },
    {
      nombre: "Neurología",
      descripcion:
        "Diagnóstico y tratamiento de enfermedades del sistema nervioso.",
    },
    {
      nombre: "Nutriología",
      descripcion: "Estudio de la nutrición y su impacto en la salud.",
    },
    {
      nombre: "Obstetricia y Ginecología",
      descripcion:
        "Atención médica a mujeres, incluyendo embarazo y parto.",
    },
    {
      nombre: "Oftalmología",
      descripcion: "Diagnóstico y tratamiento de enfermedades de los ojos.",
    },
    {
      nombre: "Oncología",
      descripcion: "Diagnóstico y tratamiento de cáncer.",
    },
  ];
  
  function renderCards(especialidades) {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    especialidades.forEach((especialidad) => {
      const card = `
      <div class="col-sm-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${especialidad.nombre}</h5>
            <p class="card-text">${especialidad.descripcion}</p>
            <a href="#" class="btn btn-primary" style="width: 200px; background-color: #001330;">Más información</a>
          </div>
        </div>
      </div>
    `;
      container.insertAdjacentHTML("beforeend", card);
    });
  }
  
  document
    .getElementById("searchBar")
    .addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filteredEspecialidades = especialidades.filter((especialidad) =>
        especialidad.nombre.toLowerCase().includes(searchTerm)
      );
      renderCards(filteredEspecialidades);
    });
  
  // Render inicial de todas las especialidades
  renderCards(especialidades);