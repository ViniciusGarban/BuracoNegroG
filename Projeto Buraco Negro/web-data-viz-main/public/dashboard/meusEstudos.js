function carregarEstudos() {
  let lista = document.getElementById("lista_estudos");

  for (let i = 1; i <= 4; i++) {
    lista.innerHTML += `
      <div class="card-comparacao">
        <span>Capítulo ${i}</span>
        <h3>Quiz do capítulo ${i}</h3>
        <p>Responda o quiz depois de ler este capítulo.</p>
        <button class="botao-quiz" onclick="verificarQuiz(${i})">
          Responder quiz
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

        let situacao = "Atenção";
        let classe = "kpi-atencao";

        if (acertos >= 3 && acertos <= 4) {
          situacao = "OK";
          classe = "kpi-ok";
        }

        if (acertos == 5) {
          situacao = "Ótimo";
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
        alert("Você precisa ler este capítulo antes de responder o quiz.");
      }
    });
}

function abrirQuiz(capitulo) {
  if (capitulo == 1) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Capítulo 1</h3>

        <div class="questao">
          <p>Questão 1: Como uma estrela massiva se forma?</p>
          <label><input type="radio" name="q1" value="a"> A) Pela colisão entre planetas gigantes.</label>
          <label><input type="radio" name="q1" value="b"> B) Pela explosão de um buraco negro.</label>
          <label><input type="radio" name="q1" value="c"> C) Pela concentração de gás e poeira devido à gravidade.</label>
          <label><input type="radio" name="q1" value="d"> D) Pela fusão de galáxias.</label>
          <label><input type="radio" name="q1" value="e"> E) Pelo resfriamento do Sol.</label>
        </div>

        <div class="questao">
          <p>Questão 2: Qual processo produz energia no núcleo das estrelas?</p>
          <label><input type="radio" name="q2" value="a"> A) Fissão nuclear.</label>
          <label><input type="radio" name="q2" value="b"> B) Combustão química.</label>
          <label><input type="radio" name="q2" value="c"> C) Radioatividade natural.</label>
          <label><input type="radio" name="q2" value="d"> D) Fusão nuclear.</label>
          <label><input type="radio" name="q2" value="e"> E) Fotossíntese.</label>
        </div>

        <div class="questao">
          <p>Questão 3: O que mantém uma estrela estável durante grande parte de sua vida?</p>
          <label><input type="radio" name="q3" value="a"> A) A força magnética.</label>
          <label><input type="radio" name="q3" value="b"> B) A velocidade de rotação.</label>
          <label><input type="radio" name="q3" value="c"> C) O equilíbrio entre gravidade e pressão da fusão nuclear.</label>
          <label><input type="radio" name="q3" value="d"> D) A temperatura do espaço.</label>
          <label><input type="radio" name="q3" value="e"> E) A presença de planetas.</label>
        </div>

        <div class="questao">
          <p>Questão 4: Por que estrelas massivas vivem menos que estrelas menores?</p>
          <label><input type="radio" name="q4" value="a"> A) Porque possuem menos energia.</label>
          <label><input type="radio" name="q4" value="b"> B) Porque esfriam mais rapidamente.</label>
          <label><input type="radio" name="q4" value="c"> C) Porque perdem massa para os planetas.</label>
          <label><input type="radio" name="q4" value="d"> D) Porque consomem seu combustível nuclear mais rapidamente.</label>
          <label><input type="radio" name="q4" value="e"> E) Porque possuem menos gravidade.</label>
        </div>

        <div class="questao">
          <p>Questão 5: O que acontece quando o combustível da estrela começa a acabar?</p>
          <label><input type="radio" name="q5" value="a"> A) Ela se transforma imediatamente em um planeta.</label>
          <label><input type="radio" name="q5" value="b"> B) Ela deixa de emitir luz instantaneamente.</label>
          <label><input type="radio" name="q5" value="c"> C) Ela aumenta de tamanho indefinidamente.</label>
          <label><input type="radio" name="q5" value="d"> D) Ela perde sua gravidade.</label>
          <label><input type="radio" name="q5" value="e"> E) O equilíbrio interno começa a enfraquecer.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(1)">Finalizar quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Atualizar dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }

  if (capitulo == 2) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Capítulo 2</h3>

        <div class="questao">
          <p>Questão 1: O que acontece quando a estrela esgota seu combustível nuclear?</p>
          <label><input type="radio" name="q1" value="a"> A) Sua gravidade desaparece.</label>
          <label><input type="radio" name="q1" value="b"> B) Ela se transforma em um planeta.</label>
          <label><input type="radio" name="q1" value="c"> C) A pressão interna diminui e a gravidade passa a dominar.</label>
          <label><input type="radio" name="q1" value="d"> D) Ela para de existir instantaneamente.</label>
          <label><input type="radio" name="q1" value="e"> E) Ela perde toda sua massa.</label>
        </div>

        <div class="questao">
          <p>Questão 2: Como é chamado o processo em que a estrela é comprimida pela própria gravidade?</p>
          <label><input type="radio" name="q2" value="a"> A) Fusão estelar.</label>
          <label><input type="radio" name="q2" value="b"> B) Radiação cósmica.</label>
          <label><input type="radio" name="q2" value="c"> C) Expansão gravitacional.</label>
          <label><input type="radio" name="q2" value="d"> D) Colapso gravitacional.</label>
          <label><input type="radio" name="q2" value="e"> E) Singularização.</label>
        </div>

        <div class="questao">
          <p>Questão 3: Qual evento pode ocorrer durante o colapso de uma estrela massiva?</p>
          <label><input type="radio" name="q3" value="a"> A) Formação de um novo sistema solar.</label>
          <label><input type="radio" name="q3" value="b"> B) Criação de uma galáxia.</label>
          <label><input type="radio" name="q3" value="c"> C) Explosão de supernova.</label>
          <label><input type="radio" name="q3" value="d"> D) Formação de um cometa.</label>
          <label><input type="radio" name="q3" value="e"> E) Resfriamento completo da estrela.</label>
        </div>

        <div class="questao">
          <p>Questão 4: O que pode acontecer com o núcleo da estrela após a supernova?</p>
          <label><input type="radio" name="q4" value="a"> A) Sempre se transforma em planeta.</label>
          <label><input type="radio" name="q4" value="b"> B) Sempre desaparece completamente.</label>
          <label><input type="radio" name="q4" value="c"> C) Sempre se transforma em uma galáxia.</label>
          <label><input type="radio" name="q4" value="d"> D) Pode se tornar uma estrela de nêutrons ou um buraco negro.</label>
          <label><input type="radio" name="q4" value="e"> E) Pode se transformar em um satélite natural.</label>
        </div>

        <div class="questao">
          <p>Questão 5: Quando um buraco negro começa a se formar?</p>
          <label><input type="radio" name="q5" value="a"> A) Quando a estrela nasce.</label>
          <label><input type="radio" name="q5" value="b"> B) Quando a estrela aumenta de brilho.</label>
          <label><input type="radio" name="q5" value="c"> C) Quando a estrela se afasta da galáxia.</label>
          <label><input type="radio" name="q5" value="d"> D) Quando a temperatura do espaço diminui.</label>
          <label><input type="radio" name="q5" value="e"> E) Quando nenhuma força consegue interromper o colapso do núcleo.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(2)">Finalizar quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Atualizar dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }

  if (capitulo == 3) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Capítulo 3</h3>

        <div class="questao">
          <p>Questão 1: O que é o horizonte de eventos?</p>
          <label><input type="radio" name="q1" value="a"> A) O centro do buraco negro.</label>
          <label><input type="radio" name="q1" value="b"> B) Uma camada sólida ao redor do buraco negro.</label>
          <label><input type="radio" name="q1" value="c"> C) Uma região de explosão constante.</label>
          <label><input type="radio" name="q1" value="d"> D) A fronteira entre o interior do buraco negro e o universo observável.</label>
          <label><input type="radio" name="q1" value="e"> E) Um campo magnético.</label>
        </div>

        <div class="questao">
          <p>Questão 2: O que acontece após ultrapassar o horizonte de eventos?</p>
          <label><input type="radio" name="q2" value="a"> A) O objeto ganha velocidade infinita.</label>
          <label><input type="radio" name="q2" value="b"> B) O objeto se transforma em energia.</label>
          <label><input type="radio" name="q2" value="c"> C) O objeto não consegue mais escapar.</label>
          <label><input type="radio" name="q2" value="d"> D) O objeto volta para o espaço.</label>
          <label><input type="radio" name="q2" value="e"> E) O objeto para de existir imediatamente.</label>
        </div>

        <div class="questao">
          <p>Questão 3: Por que a luz não consegue escapar do horizonte de eventos?</p>
          <label><input type="radio" name="q3" value="a"> A) Porque a luz perde energia.</label>
          <label><input type="radio" name="q3" value="b"> B) Porque o espaço é escuro.</label>
          <label><input type="radio" name="q3" value="c"> C) Porque a luz não consegue se mover no vácuo.</label>
          <label><input type="radio" name="q3" value="d"> D) Porque a velocidade de escape é maior que a velocidade da luz.</label>
          <label><input type="radio" name="q3" value="e"> E) Porque a luz é absorvida pelos planetas.</label>
        </div>

        <div class="questao">
          <p>Questão 4: Como o horizonte de eventos é frequentemente chamado?</p>
          <label><input type="radio" name="q4" value="a"> A) Zona de expansão.</label>
          <label><input type="radio" name="q4" value="b"> B) Portal dimensional.</label>
          <label><input type="radio" name="q4" value="c"> C) Centro gravitacional.</label>
          <label><input type="radio" name="q4" value="d"> D) Faixa de radiação.</label>
          <label><input type="radio" name="q4" value="e"> E) Ponto sem retorno.</label>
        </div>

        <div class="questao">
          <p>Questão 5: Qual teoria ajuda a explicar o comportamento do horizonte de eventos?</p>
          <label><input type="radio" name="q5" value="a"> A) Evolução das espécies.</label>
          <label><input type="radio" name="q5" value="b"> B) Teoria celular.</label>
          <label><input type="radio" name="q5" value="c"> C) Tectônica de placas.</label>
          <label><input type="radio" name="q5" value="d"> D) Teoria atômica.</label>
          <label><input type="radio" name="q5" value="e"> E) Relatividade Geral.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(3)">Finalizar quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Atualizar dashboard</button>
        <p id="resultado_quiz"></p>
      </div>
    `;
  }

  if (capitulo == 4) {
    lista_estudos.innerHTML = `
      <div class="area-estudo">
        <h3>Quiz - Capítulo 4</h3>

        <div class="questao">
          <p>Questão 1: Onde está localizada a singularidade?</p>
          <label><input type="radio" name="q1" value="a"> A) Na borda da galáxia.</label>
          <label><input type="radio" name="q1" value="b"> B) Fora do buraco negro.</label>
          <label><input type="radio" name="q1" value="c"> C) No horizonte de eventos.</label>
          <label><input type="radio" name="q1" value="d"> D) Próxima ao Sol.</label>
          <label><input type="radio" name="q1" value="e"> E) No centro do buraco negro.</label>
        </div>

        <div class="questao">
          <p>Questão 2: Como a singularidade é descrita pela Relatividade Geral?</p>
          <label><input type="radio" name="q2" value="a"> A) Uma região sem gravidade.</label>
          <label><input type="radio" name="q2" value="b"> B) Uma região cheia de luz.</label>
          <label><input type="radio" name="q2" value="c"> C) Uma região de baixa densidade.</label>
          <label><input type="radio" name="q2" value="d"> D) Uma região de densidade extremamente elevada.</label>
          <label><input type="radio" name="q2" value="e"> E) Uma região sem massa.</label>
        </div>

        <div class="questao">
          <p>Questão 3: O que acontece com as leis conhecidas da física na singularidade?</p>
          <label><input type="radio" name="q3" value="a"> A) Tornam-se mais simples.</label>
          <label><input type="radio" name="q3" value="b"> B) Deixam de existir completamente.</label>
          <label><input type="radio" name="q3" value="c"> C) Passam a funcionar melhor.</label>
          <label><input type="radio" name="q3" value="d"> D) Não conseguem explicar completamente o que acontece.</label>
          <label><input type="radio" name="q3" value="e"> E) Param de ser utilizadas pelos cientistas.</label>
        </div>

        <div class="questao">
          <p>Questão 4: Qual é um dos maiores desafios da física moderna?</p>
          <label><input type="radio" name="q4" value="a"> A) Medir a temperatura do Sol.</label>
          <label><input type="radio" name="q4" value="b"> B) Encontrar novos planetas.</label>
          <label><input type="radio" name="q4" value="c"> C) Descobrir novas estrelas.</label>
          <label><input type="radio" name="q4" value="d"> D) Construir telescópios maiores.</label>
          <label><input type="radio" name="q4" value="e"> E) Compreender a singularidade.</label>
        </div>

        <div class="questao">
          <p>Questão 5: O que os cientistas acreditam ser necessário para explicar completamente a singularidade?</p>
          <label><input type="radio" name="q5" value="a"> A) Uma nova estrela.</label>
          <label><input type="radio" name="q5" value="b"> B) Mais buracos negros.</label>
          <label><input type="radio" name="q5" value="c"> C) Uma teoria sobre planetas gigantes.</label>
          <label><input type="radio" name="q5" value="d"> D) Uma nova forma de energia solar.</label>
          <label><input type="radio" name="q5" value="e"> E) Uma teoria que una Relatividade Geral e Mecânica Quântica.</label>
        </div>

        <button class="botao-quiz" onclick="corrigirQuiz(4)">Finalizar quiz</button>
        <button class="botao-quiz" onclick="location.reload()">Atualizar dashboard</button>
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

  resultado_quiz.innerHTML = "Você acertou " + acertos + " de 5 questões. Clique em Atualizar dashboard para ver o gráfico.";

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
    });
}
