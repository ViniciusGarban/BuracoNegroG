function carregarEstudos() {
  let lista = document.getElementById("lista_estudos");

  for (let i = 1; i <= 4; i++) {
    lista.innerHTML += `
      <div class="card-comparacao">
        <span>Capitulo ${i}</span>
        <h3>Quiz do capitulo ${i}</h3>
        <p>Responda o quiz depois de ler este capitulo.</p>
        <button class="botao-quiz" onclick="verificarQuiz(${i})">
          Responder quiz
        </button>
      </div>
    `;
  }
}

function verificarQuiz(capitulo) {
  let lido = localStorage.getItem("capitulo_" + capitulo + "_lido");

  if (lido == "true") {
    abrirQuiz(capitulo);
  } else {
    alert("Voce precisa ler este capitulo antes de responder o quiz.");
  }
}

function abrirQuiz(capitulo) {
  if (capitulo == 1) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Capitulo 1</h3>

        <div class="questao">
          <p>Questao 1: TESTE</p>
          <label><input type="radio" name="q1" value="a"> a) ERRADO</label>
          <label><input type="radio" name="q1" value="b"> b) ERRADO</label>
          <label><input type="radio" name="q1" value="c"> c) CERTO</label>
          <label><input type="radio" name="q1" value="d"> d) ERRADO</label>
          <label><input type="radio" name="q1" value="e"> e) ERRADO</label>
        </div>

        <div class="questao">
          <p>Questao 2: TESTE</p>
          <label><input type="radio" name="q2" value="a"> a) ERRADO</label>
          <label><input type="radio" name="q2" value="b"> b) CERTO</label>
          <label><input type="radio" name="q2" value="c"> c) ERRADO</label>
          <label><input type="radio" name="q2" value="d"> d) ERRADO</label>
          <label><input type="radio" name="q2" value="e"> e) ERRADO</label>
        </div>

        <div class="questao">
          <p>Questao 3: TESTE</p>
          <label><input type="radio" name="q3" value="a"> a) ERRADO</label>
          <label><input type="radio" name="q3" value="b"> b) ERRADO</label>
          <label><input type="radio" name="q3" value="c"> c) ERRADO</label>
          <label><input type="radio" name="q3" value="d"> d) CERTO</label>
          <label><input type="radio" name="q3" value="e"> e) ERRADO</label>
        </div>

        <div class="questao">
          <p>Questao 4: TESTE</p>
          <label><input type="radio" name="q4" value="a"> a) CERTO</label>
          <label><input type="radio" name="q4" value="b"> b) ERRADO</label>
          <label><input type="radio" name="q4" value="c"> c) ERRADO</label>
          <label><input type="radio" name="q4" value="d"> d) ERRADO</label>
          <label><input type="radio" name="q4" value="e"> e) ERRADO</label>
        </div>

        <div class="questao">
          <p>Questao 5: TESTE</p>
          <label><input type="radio" name="q5" value="a"> a) ERRADO</label>
          <label><input type="radio" name="q5" value="b"> b) ERRADO</label>
          <label><input type="radio" name="q5" value="c"> c) ERRADO</label>
          <label><input type="radio" name="q5" value="d"> d) ERRADO</label>
          <label><input type="radio" name="q5" value="e"> e) CERTO</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuizCapitulo1()">
          Finalizar quiz
        </button>

        <button class="botao-quiz" onclick="location.reload()">
          Atualizar dashboard
        </button>

        <p id="resultado_quiz"></p>
      </div>
    `;
  }
}

function corrigirQuizCapitulo1() {
  let respostasCertas = ["c", "b", "d", "a", "e"];
  let acertos = 0;

  for (let i = 0; i < respostasCertas.length; i++) {
    let questao = document.querySelector("input[name='q" + (i + 1) + "']:checked");

    if (questao != null && questao.value == respostasCertas[i]) {
      acertos++;
    }
  }

  resultado_quiz.innerHTML = "Voce acertou " + acertos + " de 5 questoes. Clique em Atualizar dashboard para ver o grafico.";
  localStorage.setItem("acertos_capitulo_1", acertos);
}

function carregarGraficoDesempenho() {
  let acertosCapitulo1 = localStorage.getItem("acertos_capitulo_1") || 0;
  let acertosCapitulo2 = localStorage.getItem("acertos_capitulo_2") || 0;
  let acertosCapitulo3 = localStorage.getItem("acertos_capitulo_3") || 0;
  let acertosCapitulo4 = localStorage.getItem("acertos_capitulo_4") || 0;

  let ctx = document.getElementById("graficoDesempenho");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4"],
      datasets: [{
        label: "Acertos",
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
}
