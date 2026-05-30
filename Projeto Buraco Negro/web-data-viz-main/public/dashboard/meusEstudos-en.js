function carregarEstudos() {
  let lista = document.getElementById("lista_estudos");

  for (let i = 1; i <= 4; i++) {
    lista.innerHTML += `
      <div class="card-comparacao">
        <span>Chapter ${i}</span>
        <h3>Chapter ${i} quiz</h3>
        <p>Answer the quiz after reading this chapter.</p>
        <button class="botao-quiz" onclick="verificarQuiz(${i})">
          Answer quiz
        </button>
      </div>
    `;
  }
}

function carregarKPIs() {
  fetch("/desempenho/buscar/" + sessionStorage.ID_USUARIO)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      for (let i = 1; i <= 4; i++) {
        let acertos = 0;

        for (let contador = 0; contador < dados.length; contador++) {
          if (dados[contador].fk_capitulo == i) {
            acertos = dados[contador].acertos;
          }
        }

        let situacao = "Attention";
        let classe = "kpi-atencao";

        if (acertos >= 3 && acertos <= 4) {
          situacao = "OK";
          classe = "kpi-ok";
        }

        if (acertos == 5) {
          situacao = "Great";
          classe = "kpi-otimo";
        }

        document.getElementById("kpi_acertos_" + i).innerHTML = acertos + "/5";
        document.getElementById("kpi_situacao_" + i).innerHTML = situacao;
        document.getElementById("kpi_capitulo_" + i).className = "kpi-estudo " + classe;
      }
    });
}

function verificarQuiz(capitulo) {
  fetch("/check/checklist/" + sessionStorage.ID_USUARIO + "/" + capitulo)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      if (dados.length > 0 && dados[0].lido == 1) {
        abrirQuiz(capitulo);
      } else {
        alert("You need to read this chapter before answering the quiz.");
      }
    });
}

function abrirQuiz(capitulo) {
  if (capitulo == 1) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Chapter 1</h3>

        <div class="questao">
          <p>Question 1: How does a massive star form?</p>
          <label><input type="radio" name="q1" value="a"> A) Through the collision of giant planets.</label>
          <label><input type="radio" name="q1" value="b"> B) Through the explosion of a black hole.</label>
          <label><input type="radio" name="q1" value="c"> C) Through the concentration of gas and dust due to gravity.</label>
          <label><input type="radio" name="q1" value="d"> D) Through the fusion of galaxies.</label>
          <label><input type="radio" name="q1" value="e"> E) Through the cooling of the Sun.</label>
        </div>

        <div class="questao">
          <p>Question 2: Which process produces energy in the core of stars?</p>
          <label><input type="radio" name="q2" value="a"> A) Nuclear fission.</label>
          <label><input type="radio" name="q2" value="b"> B) Chemical combustion.</label>
          <label><input type="radio" name="q2" value="c"> C) Natural radioactivity.</label>
          <label><input type="radio" name="q2" value="d"> D) Nuclear fusion.</label>
          <label><input type="radio" name="q2" value="e"> E) Photosynthesis.</label>
        </div>

        <div class="questao">
          <p>Question 3: What keeps a star stable during most of its life?</p>
          <label><input type="radio" name="q3" value="a"> A) Magnetic force.</label>
          <label><input type="radio" name="q3" value="b"> B) Rotation speed.</label>
          <label><input type="radio" name="q3" value="c"> C) The balance between gravity and pressure from nuclear fusion.</label>
          <label><input type="radio" name="q3" value="d"> D) The temperature of space.</label>
          <label><input type="radio" name="q3" value="e"> E) The presence of planets.</label>
        </div>

        <div class="questao">
          <p>Question 4: Why do massive stars live less than smaller stars?</p>
          <label><input type="radio" name="q4" value="a"> A) Because they have less energy.</label>
          <label><input type="radio" name="q4" value="b"> B) Because they cool down faster.</label>
          <label><input type="radio" name="q4" value="c"> C) Because they lose mass to planets.</label>
          <label><input type="radio" name="q4" value="d"> D) Because they consume their nuclear fuel faster.</label>
          <label><input type="radio" name="q4" value="e"> E) Because they have less gravity.</label>
        </div>

        <div class="questao">
          <p>Question 5: What happens when the star's fuel starts to run out?</p>
          <label><input type="radio" name="q5" value="a"> A) It immediately becomes a planet.</label>
          <label><input type="radio" name="q5" value="b"> B) It instantly stops emitting light.</label>
          <label><input type="radio" name="q5" value="c"> C) It grows forever.</label>
          <label><input type="radio" name="q5" value="d"> D) It loses its gravity.</label>
          <label><input type="radio" name="q5" value="e"> E) Its internal balance begins to weaken.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(1)">Finish quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Update dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }

  if (capitulo == 2) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Chapter 2</h3>

        <div class="questao">
          <p>Question 1: What happens when the star runs out of nuclear fuel?</p>
          <label><input type="radio" name="q1" value="a"> A) Its gravity disappears.</label>
          <label><input type="radio" name="q1" value="b"> B) It becomes a planet.</label>
          <label><input type="radio" name="q1" value="c"> C) Internal pressure decreases and gravity starts to dominate.</label>
          <label><input type="radio" name="q1" value="d"> D) It instantly stops existing.</label>
          <label><input type="radio" name="q1" value="e"> E) It loses all its mass.</label>
        </div>

        <div class="questao">
          <p>Question 2: What is the process where the star is compressed by its own gravity called?</p>
          <label><input type="radio" name="q2" value="a"> A) Stellar fusion.</label>
          <label><input type="radio" name="q2" value="b"> B) Cosmic radiation.</label>
          <label><input type="radio" name="q2" value="c"> C) Gravitational expansion.</label>
          <label><input type="radio" name="q2" value="d"> D) Gravitational collapse.</label>
          <label><input type="radio" name="q2" value="e"> E) Singularization.</label>
        </div>

        <div class="questao">
          <p>Question 3: Which event can happen during the collapse of a massive star?</p>
          <label><input type="radio" name="q3" value="a"> A) Formation of a new solar system.</label>
          <label><input type="radio" name="q3" value="b"> B) Creation of a galaxy.</label>
          <label><input type="radio" name="q3" value="c"> C) Supernova explosion.</label>
          <label><input type="radio" name="q3" value="d"> D) Formation of a comet.</label>
          <label><input type="radio" name="q3" value="e"> E) Complete cooling of the star.</label>
        </div>

        <div class="questao">
          <p>Question 4: What can happen to the star's core after the supernova?</p>
          <label><input type="radio" name="q4" value="a"> A) It always becomes a planet.</label>
          <label><input type="radio" name="q4" value="b"> B) It always disappears completely.</label>
          <label><input type="radio" name="q4" value="c"> C) It always becomes a galaxy.</label>
          <label><input type="radio" name="q4" value="d"> D) It can become a neutron star or a black hole.</label>
          <label><input type="radio" name="q4" value="e"> E) It can become a natural satellite.</label>
        </div>

        <div class="questao">
          <p>Question 5: When does a black hole begin to form?</p>
          <label><input type="radio" name="q5" value="a"> A) When the star is born.</label>
          <label><input type="radio" name="q5" value="b"> B) When the star becomes brighter.</label>
          <label><input type="radio" name="q5" value="c"> C) When the star moves away from the galaxy.</label>
          <label><input type="radio" name="q5" value="d"> D) When the temperature of space decreases.</label>
          <label><input type="radio" name="q5" value="e"> E) When no force can stop the collapse of the core.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(2)">Finish quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Update dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }

  if (capitulo == 3) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Chapter 3</h3>

        <div class="questao">
          <p>Question 1: What is the event horizon?</p>
          <label><input type="radio" name="q1" value="a"> A) The center of the black hole.</label>
          <label><input type="radio" name="q1" value="b"> B) A solid layer around the black hole.</label>
          <label><input type="radio" name="q1" value="c"> C) A region of constant explosion.</label>
          <label><input type="radio" name="q1" value="d"> D) The boundary between the inside of the black hole and the observable universe.</label>
          <label><input type="radio" name="q1" value="e"> E) A magnetic field.</label>
        </div>

        <div class="questao">
          <p>Question 2: What happens after crossing the event horizon?</p>
          <label><input type="radio" name="q2" value="a"> A) The object gains infinite speed.</label>
          <label><input type="radio" name="q2" value="b"> B) The object becomes energy.</label>
          <label><input type="radio" name="q2" value="c"> C) The object can no longer escape.</label>
          <label><input type="radio" name="q2" value="d"> D) The object returns to space.</label>
          <label><input type="radio" name="q2" value="e"> E) The object immediately stops existing.</label>
        </div>

        <div class="questao">
          <p>Question 3: Why can't light escape from the event horizon?</p>
          <label><input type="radio" name="q3" value="a"> A) Because light loses energy.</label>
          <label><input type="radio" name="q3" value="b"> B) Because space is dark.</label>
          <label><input type="radio" name="q3" value="c"> C) Because light cannot move in a vacuum.</label>
          <label><input type="radio" name="q3" value="d"> D) Because escape velocity is greater than the speed of light.</label>
          <label><input type="radio" name="q3" value="e"> E) Because light is absorbed by planets.</label>
        </div>

        <div class="questao">
          <p>Question 4: How is the event horizon often called?</p>
          <label><input type="radio" name="q4" value="a"> A) Expansion zone.</label>
          <label><input type="radio" name="q4" value="b"> B) Dimensional portal.</label>
          <label><input type="radio" name="q4" value="c"> C) Gravitational center.</label>
          <label><input type="radio" name="q4" value="d"> D) Radiation band.</label>
          <label><input type="radio" name="q4" value="e"> E) Point of no return.</label>
        </div>

        <div class="questao">
          <p>Question 5: Which theory helps explain the behavior of the event horizon?</p>
          <label><input type="radio" name="q5" value="a"> A) Evolution of species.</label>
          <label><input type="radio" name="q5" value="b"> B) Cell theory.</label>
          <label><input type="radio" name="q5" value="c"> C) Plate tectonics.</label>
          <label><input type="radio" name="q5" value="d"> D) Atomic theory.</label>
          <label><input type="radio" name="q5" value="e"> E) General Relativity.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(3)">Finish quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Update dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }

  if (capitulo == 4) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Chapter 4</h3>

        <div class="questao">
          <p>Question 1: Where is the singularity located?</p>
          <label><input type="radio" name="q1" value="a"> A) At the edge of the galaxy.</label>
          <label><input type="radio" name="q1" value="b"> B) Outside the black hole.</label>
          <label><input type="radio" name="q1" value="c"> C) At the event horizon.</label>
          <label><input type="radio" name="q1" value="d"> D) Near the Sun.</label>
          <label><input type="radio" name="q1" value="e"> E) At the center of the black hole.</label>
        </div>

        <div class="questao">
          <p>Question 2: How is the singularity described by General Relativity?</p>
          <label><input type="radio" name="q2" value="a"> A) A region without gravity.</label>
          <label><input type="radio" name="q2" value="b"> B) A region full of light.</label>
          <label><input type="radio" name="q2" value="c"> C) A region of low density.</label>
          <label><input type="radio" name="q2" value="d"> D) A region of extremely high density.</label>
          <label><input type="radio" name="q2" value="e"> E) A region without mass.</label>
        </div>

        <div class="questao">
          <p>Question 3: What happens to the known laws of physics in the singularity?</p>
          <label><input type="radio" name="q3" value="a"> A) They become simpler.</label>
          <label><input type="radio" name="q3" value="b"> B) They completely stop existing.</label>
          <label><input type="radio" name="q3" value="c"> C) They work better.</label>
          <label><input type="radio" name="q3" value="d"> D) They cannot fully explain what happens.</label>
          <label><input type="radio" name="q3" value="e"> E) Scientists stop using them.</label>
        </div>

        <div class="questao">
          <p>Question 4: What is one of the greatest challenges of modern physics?</p>
          <label><input type="radio" name="q4" value="a"> A) Measuring the temperature of the Sun.</label>
          <label><input type="radio" name="q4" value="b"> B) Finding new planets.</label>
          <label><input type="radio" name="q4" value="c"> C) Discovering new stars.</label>
          <label><input type="radio" name="q4" value="d"> D) Building larger telescopes.</label>
          <label><input type="radio" name="q4" value="e"> E) Understanding the singularity.</label>
        </div>

        <div class="questao">
          <p>Question 5: What do scientists believe is necessary to fully explain the singularity?</p>
          <label><input type="radio" name="q5" value="a"> A) A new star.</label>
          <label><input type="radio" name="q5" value="b"> B) More black holes.</label>
          <label><input type="radio" name="q5" value="c"> C) A theory about giant planets.</label>
          <label><input type="radio" name="q5" value="d"> D) A new form of solar energy.</label>
          <label><input type="radio" name="q5" value="e"> E) A theory that unites General Relativity and Quantum Mechanics.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(4)">Finish quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Update dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }
}

function corrigirQuiz(capitulo) {
  let respostasCertas = [];

  if (capitulo == 1) {
    respostasCertas = ["c", "d", "c", "d", "e"];
  }

  if (capitulo == 2) {
    respostasCertas = ["c", "d", "c", "d", "e"];
  }

  if (capitulo == 3) {
    respostasCertas = ["d", "c", "d", "e", "e"];
  }

  if (capitulo == 4) {
    respostasCertas = ["e", "d", "d", "e", "e"];
  }

  let acertos = 0;

  for (let i = 0; i < respostasCertas.length; i++) {
    let questao = document.querySelector("input[name='q" + (i + 1) + "']:checked");

    if (questao != null && questao.value == respostasCertas[i]) {
      acertos++;
    }
  }

  resultado_quiz.innerHTML = "You got " + acertos + " out of 5 questions correct. Click Update dashboard to see the chart.";

  fetch("/desempenho/salvar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fkUsuarioServer: sessionStorage.ID_USUARIO,
      fkCapituloServer: capitulo,
      acertosServer: acertos
    })
  });
}

function carregarGraficoDesempenho() {
  fetch("/desempenho/buscar/" + sessionStorage.ID_USUARIO)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      let acertosCapitulo1 = 0;
      let acertosCapitulo2 = 0;
      let acertosCapitulo3 = 0;
      let acertosCapitulo4 = 0;

      for (let i = 0; i < dados.length; i++) {
        if (dados[i].fk_capitulo == 1) {
          acertosCapitulo1 = dados[i].acertos;
        }

        if (dados[i].fk_capitulo == 2) {
          acertosCapitulo2 = dados[i].acertos;
        }

        if (dados[i].fk_capitulo == 3) {
          acertosCapitulo3 = dados[i].acertos;
        }

        if (dados[i].fk_capitulo == 4) {
          acertosCapitulo4 = dados[i].acertos;
        }
      }

      let ctx = document.getElementById("graficoDesempenho");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
          datasets: [{
            label: "Correct answers",
            data: [
              acertosCapitulo1,
              acertosCapitulo2,
              acertosCapitulo3,
              acertosCapitulo4
            ],
            backgroundColor: "#dab9ff"
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 5,
              ticks: {
                stepSize: 1,
                color: "#e5e2e1"
              }
            },
            x: {
              ticks: {
                color: "#e5e2e1"
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: "#e5e2e1"
              }
            }
          }
        }
      });
    });
}
