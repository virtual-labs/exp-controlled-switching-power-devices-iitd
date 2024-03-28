// * Audio Mute
let isMute = false;

// * Current Date
let cd = new Date();
var currentDateGlobal = `${cd.getDate()} - ${
  cd.getMonth() + 1
} - ${cd.getFullYear()}`;
console.log(currentDateGlobal);

// * Quiz object
const Quiz = {
  quizData: [
    {
      question:
        "Which of the following machine is used to measure compressive strength?",
      a: "Universal testing machine",
      b: "Impact testing machine",
      c: "Fatigue testing machine",
      d: "Erichsen machine",
      correct: "a",
    },
    {
      question:
        "Which one of the following, is not a unit of ultimate tensile strength?",
      a: "MPa",
      b: "N/m2",
      c: "Kg/m3",
      d: "PSI",
      correct: "c",
    },
    {
      question: "The extensometer can be attached anywhere to the specimen _",
      a: "Yes",
      b: "No",
      c: "No but sometime yes",
      d: "None of the above",
      correct: "b",
    },

    {
      question:
        "What is the smallest measurement that is possible by vernier calliper?",
      a: "Least count",
      b: "Actual reading",
      c: "Main scale division",
      d: "Vernier scale division",
      correct: "a",
    },
    {
      question: "What is the least count of a standard metric vernier caliper",
      a: "0.002mm",
      b: "0.02mm",
      c: "0.1mm",
      d: "0.2mm",
      correct: "b",
    },
  ],
  quiz_contianer: document.querySelector(".quiz-container"),
  quiz: document.getElementById("quiz"),
  answerEls: document.querySelectorAll(".answer"),
  questionEl: document.getElementById("question"),
  a_text: document.getElementById("a_text"),
  b_text: document.getElementById("b_text"),
  c_text: document.getElementById("c_text"),
  d_text: document.getElementById("d_text"),
  ansDom: document.getElementById("quizAns"),
  opsDom: [this.a_text, this.b_text, this.c_text, this.d_text],
  loadQuizCallCount: 0,
  currentQuiz: 0,
  score: 0,
  loadQuiz() {
    if (this.currentQuiz >= this.quizData.length) {
      return;
    }
    document.querySelector(".transparent-box").style.display = "block";
    this.loadQuizCallCount++;
    window.speechSynthesis.cancel();
    setCC("Choose the correct answer.");
    this.deselectAnswers();
    this.quiz_contianer.style.display = "block";
    const currentQuizData = this.quizData[this.currentQuiz];

    this.questionEl.innerText = currentQuizData.question;
    this.a_text.innerText = currentQuizData.a;
    this.b_text.innerText = currentQuizData.b;
    this.c_text.innerText = currentQuizData.c;
    this.d_text.innerText = currentQuizData.d;
  },

  getSelected() {
    let answer = undefined;
    this.answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    this.answerEls.forEach((answerEl) => {
      if (answer != undefined) {
        answerEl.disabled = true;
      }
    });

    return answer;
  },

  deselectAnswers() {
    this.answerEls.forEach((answerEl) => {
      answerEl.checked = false;
      answerEl.disabled = false;
    });
  },
  close() {
    this.quiz_contianer.style.display = "none";
    for (let od of this.opsDom) {
      od.style.color = "";
    }
    document.querySelector(".transparent-box").style.display = "none";

    // this.ansDom.style.display = "none";
  },
  init() {
    let okBtn = document.getElementById("quizSubmit");
    okBtn.textContent = "Submit";
    // onclick for quiz close btn
    // document.querySelector("#closeQuiz").onclick = () => {
    //   this.close();
    // };
    // onclick for quiz submit btn
    document.getElementById("quizSubmit").onclick = () => {
      // for disable multiple submit
      if (this.loadQuizCallCount - 1 !== this.currentQuiz) {
        return;
      }
      // subtitle for quiz
      const answer = this.getSelected();
      if (answer) {
        // this.ansDom.style.display = "block";
        // this.ansDom.innerHTML = "✔ "+ this.quizData[this.currentQuiz][this.quizData[this.currentQuiz].correct];

        // updating options with the right and wrong emoji
        let ops = "abcd";
        for (let o in ops) {
          if (ops[o] == this.quizData[this.currentQuiz].correct) {
            this.opsDom[o].innerHTML += " ✔️";
            this.opsDom[o].style.color = "green";
          } else {
            this.opsDom[o].innerHTML += " ❌";
            this.opsDom[o].style.color = "red";
          }
        }

        if (answer === this.quizData[this.currentQuiz].correct) {
          this.score++;
        }
        this.currentQuiz++;

        //for ok button

        okBtn.textContent = "Ok";
        okBtn.onclick = function () {
          Quiz.close();
          Quiz.init();
        };

        // to stop the next question
        // if (this.currentQuiz < this.quizData.length) {
        // this.loadQuiz();
        // } else {
        //             this.quiz.innerHTML = ` <h2>You answered correctly at ${this.score}/${this.quizData.length} questions.</h2>
        // <button onclick="#">Reload</button>
        // `;
        // todo show above string to certificate
        // }
      }
      // this.close();
    };
  },
};

// * ChartJs
const ChartGraph = {
  ctx: document.getElementById("myChart"),
  ctxBox: document.querySelector(".chart"),
  graphs: [
    (Graph1 = {
      labels: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07],
      datapoints: [0, 100, 185, 260, 360, 435, 452],
    }),
    (Graph2 = {
      labels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
      datapoints: [0, 470, 488, 512, 515, 570],
    }),
    (Graph3 = {
      labels: [0, 0.02, 0.04, 0.06, 0.08, 1, 1.2],
      datapoints: [0, 480, 520, 560, 602, 535],
    }),
    (Graph4 = {
      labels: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07],
      datapoints: [0, 100, 185, 260, 360, 435, 452],
    }),
  ],
  currGr: null,
  delete: function () {
    this.ctxBox.style.display = "none";
    this.currGr.destroy();
  },
  view: function (num, left, top, height = null, width = null) {
    if (height != null) this.ctxBox.style.height = height + "px!important";
    if (width != null) this.ctxBox.style.width = width + "px!important";
    this.ctxBox.style.left = left + "px";
    this.ctxBox.style.top = top + "px";
    this.ctxBox.style.display = "block";
    this.currGr = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: this.graphs[num].labels,
        datasets: [
          {
            label: "Engineering Stress-Strain Curve",
            data: this.graphs[num].datapoints,
            borderWidth: 1,
            tension: 0.4,
          },
          // {
          //   label: "_",
          //   data: [0, 470],
          //   borderWidth: 1,
          // },
        ],
      },
      options: {
        borderWidth: 3,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return this;
  },
};

Quiz.init();

// for restriction on next button ;
let isPerformNext = false;

// animation is running
let isRunning = false;
// to set isProcessRunning and also sync the progressbar + drawer
// ! and toggle the next btn active / deactive
function toggleNextBtn() {
  let nextBtn = document.querySelector(".btn-next");
  nextBtn.classList.toggle("btn-deactive");
}
const setIsProcessRunning = (value) => {
  // calling toggle the next
  if (value != isRunning) {
    toggleNextBtn();
  }

  isRunning = value;
  if (value) {
    Dom.hideAll();
  }
};

const show = (ele, disp = "block", opa = 1) => {
  ele.style.display = disp;
  ele.style.opacity = opa;
};
const opacity = (ele, val = 1) => {
  ele.style.opacity = val;
};
const hide = (ele, disp = "none") => {
  ele.style.display = disp;
};
const hideAll = (elesName, disp = "none") => {
  let eles = getAll(elesName);
  for (let ele of eles) {
    hide(ele);
  }
};
const showAll = (elesName, disp = "none", opa = 1) => {
  let eles = getAll(elesName);
  for (let ele of eles) {
    show(ele, "block", opa);
  }
};

const set = (ele, l = null, t = null) => {
  if (l !== null) {
    ele.style.left = l + "px";
  }
  if (t !== null) {
    ele.style.top = t + "px";
  }
  show(ele);
};

let student_name = "";
// let currentDateGlobal = "";

// ! text to audio

const textToSpeach = (text) => {
  // if(isMute){
  //   return;
  // }
  let utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(utterance);
  return utterance;
};

//queue for
let ccQueue = [];
// for subtitile
let ccObj = null;
function setCC(text = null, speed = 25) {
  if (ccObj != null) {
    ccObj.destroy();
  }

  let ccDom = get(".steps-subtitle .subtitle");
  ccQueue.push(text);
  ccObj = new Typed(ccDom, {
    strings: ["", ...ccQueue],
    typeSpeed: speed,
    onStringTyped() {
      ccQueue.shift();
      // if(ccQueue.length != 0){
      //   setCC(ccQueue.shift())
      // }
    },
  });
  if (!isMute) textToSpeach(text);
  return ccDom;
}

// ! class Dom{} is send to seperate file
// * for cursor pointer
function cursorPointer(ele) {
  ele.style.cursor = "pointer";
}

// Img.setBlinkArrow(true,790,444).play();

const Scenes = {
  items: {
    anime_main_dom: new Dom(".anime-main"),
    arrowRound: new Dom("arrowRound"),
    blinkArrow: new Dom("blinkArrow"),
    larrow: new Dom("laerrow"),
    larrow2: new Dom("laerrow2"),
    logo: new Dom("logo"),
    man: new Dom("man"),
    arrow: new Dom("measurearrow"),
    arrow2: new Dom("measurearrow2"),
    redsize: new Dom("redsize"),
    speech_off_btn: new Dom("speech_off_btn"),
    speech_on_btn: new Dom("speech_on_btn"),
    talk_cloud: new Dom("talk_cloud"),
    projectIntro: new Dom(".project-intro"),
    header: new Dom(".anime-header"),
    stepHeading: new Dom(".step-heading"),
    stepTitle: new Dom(".step-title"),
    stepDescription: new Dom(".step-description"),
    tableCalc: new Dom(".measurements"),
    tempText: new Dom(".temp-text"),
    tempText2: new Dom(".temp-text2"),
    tempInputBox: new Dom(".temp-input"),
    tempInputBoxInput: new Dom(".temp-input #ipnum"),
    tempInputT1: new Dom(".temp-input .text1"),
    tempInputT2: new Dom(".temp-input .text2"),
    tempInputError: new Dom(".temp-input .error"),
    tempInputBtn: new Dom(".temp-input .submit-btn"),
    utmBtn: new Dom(".utm-button"),
    inputWindow: new Dom(".user-input"),
    resultTable: new Dom(".result-table"),
    certificate: new Dom(".certificate"),
    welcomeBox: new Dom(".welcome-box"),
    videoBox: new Dom(".video-box"),
    videoBoxSrc: new Dom(".video-box .video"),
    videoBoxTitle: new Dom(".video-box .title"),
    videoBoxRestartBtn: new Dom(".video-box .controls .restart"),
    imageBox: new Dom(".image-box"),
    imageBoxSrc: new Dom(".image-box .image"),
    imageBoxTitle: new Dom(".image-box .title"),
    tempTitle1: new Dom(".temp-title1"),
    tempTitle2: new Dom(".temp-title2"),
    tempTitle3: new Dom(".temp-title3"),
    tempTitle4: new Dom(".temp-title4"),
    tempTitle5: new Dom(".temp-title5"),
    tempTitle6: new Dom(".temp-title6"),
    tempTitle7: new Dom(".temp-title7"),
    tempTitle8: new Dom(".temp-title8"),
    tempTitle9: new Dom(".temp-title9"),
    tempTitle10: new Dom(".temp-title10"),
    tempTitle11: new Dom(".temp-title11"),
    tempTitle12: new Dom(".temp-title12"),
    tempTitle13: new Dom(".temp-title13"),
    tempTitle14: new Dom(".temp-title14"),
    tempTitle15: new Dom(".temp-title15"),
    tempTitle16: new Dom(".temp-title16"),
    tempTitle17: new Dom(".temp-title17"),
    tempTitle18: new Dom(".temp-title18"),
    tempTitle19: new Dom(".temp-title19"),
    tempTitle20: new Dom(".temp-title20"),
    tempTitle21: new Dom(".temp-title21"),
    tempTitle22: new Dom(".temp-title22"),
    tempTitle23: new Dom(".temp-title23"),
    tempTitle24: new Dom(".temp-title24"),
    tempTitle25: new Dom(".temp-title25"),
    tempTitle26: new Dom(".temp-title26"),
    tempTitle27: new Dom(".temp-title27"),
    tempTitle28: new Dom(".temp-title28"),
    tempTitle29: new Dom(".temp-title29"),
    tempTitle30: new Dom(".temp-title30"),
    tempTitle31: new Dom(".temp-title31"),
    tempTitle32: new Dom(".temp-title32"),
    tempTitle33: new Dom(".temp-title33"),
    tempTitle34: new Dom(".temp-title34"),
    tempTitle35: new Dom(".temp-title35"),
    tempTitle36: new Dom(".temp-title36"),
    tempTitle37: new Dom(".temp-title37"),
    tempTitle38: new Dom(".temp-title38"),
    tempTitle39: new Dom(".temp-title39"),
    tempTitle40: new Dom(".temp-title40"),
    tempTitle41: new Dom(".temp-title41"),
    tempTitle42: new Dom(".temp-title42"),
    tempTitle43: new Dom(".temp-title43"),
    tempTitle44: new Dom(".temp-title44"),
    tempTitle45: new Dom(".temp-title45"),
    tempTitle46: new Dom(".temp-title46"),
    tempTitle47: new Dom(".temp-title47"),
    tempTitle48: new Dom(".temp-title48"),
    tempTitle49: new Dom(".temp-title49"),
    tempTitle50: new Dom(".temp-title50"),
    tempTitle51: new Dom(".temp-title51"),
    tempTitle52: new Dom(".temp-title52"),
    tempTitle53: new Dom(".temp-title53"),
    tempTitle54: new Dom(".temp-title54"),
    tempTitle55: new Dom(".temp-title55"),
    tempTitle56: new Dom(".temp-title56"),
    tempTitle57: new Dom(".temp-title57"),
    tempTitle58: new Dom(".temp-title58"),
    tempTitle59: new Dom(".temp-title59"),
    tempTitle60: new Dom(".temp-title60"),

    concept_development: new Dom(".concept_development"),

    contentAdderBox: new Dom(".content-adder-box"),
    btn_save: new Dom(".btn-save"),
    btn_next: new Dom(".btn-next"),
    graph1: new Dom(".graph1"),
    graph2: new Dom(".graph2"),
    graph3: new Dom(".graph3"),
    graph4: new Dom(".graph4"),
    graph5: new Dom(".graph5"),
    graph_box_1: new Dom(".graph_box1"),
    graph_box_2: new Dom(".graph_box2"),
    graph_box_3: new Dom(".graph_box3"),
    graph_box_4: new Dom(".graph_box4"),
    graph_box_5: new Dom(".graph_box5"),
    xLabel: new Dom(".xLabel"),
    yLabel: new Dom(".yLabel"),

    part3_table_one: new Dom(".part3_table_one"),
    part3_table_two: new Dom(".part3_table_two"),
    part3_table_three: new Dom(".part3_table_three"),
    part3_table_four: new Dom(".part3_table_four"),
    part3_table_four_2: new Dom(".part3_table_four_2"),
    
    slider_vIn: new Dom(".slider_vIn"),
    slider_vGs: new Dom(".slider_vGs"),
    slider_R: new Dom(".slider_R"),
   
    btn_delete: new Dom(".btn-delete"),
    btn_reset: new Dom(".btn-reset"),
    btn_record: new Dom(".btn-record"),
    btn_check_connections: new Dom(".btn-check-connections"),
    btn_circuit_diagram: new Dom(".btn-circuit-diagram"),

    btn_transparent: new Dom(".btn-transparent"),

    formulas_component_stress: new Dom("formulas_component_stress"),
    formulas_efficiency: new Dom("formulas_efficiency"),
    formulas_ideal: new Dom("formulas_ideal"),
    formulas_nomenclautre: new Dom("formulas_nomenclautre"),
    formulas_non_ideal: new Dom("formulas_non_ideal"),
    formulas_procedure: new Dom("formulas_procedure"),
    formulas_universal: new Dom("formulas_universal"),
    part_3_option_select: new Dom("part_3_option_select"),
    part_1_text_for_crrct: new Dom("part_1_text_for_crrct"),
    part_1_text_for_wrong: new Dom("part_1_text_for_wrong"),


    // !EE4 images added


 
    //! EE4 tables added
    part_1_table_1: new Dom(".part_1_table_1"),
    part_1_table_2: new Dom(".part_1_table_2"),
    
    part_1_table_1_col_1: new Dom(".part_1_table_1_col_1"),
    part_1_table_1_col_2: new Dom(".part_1_table_1_col_2"),
    part_1_table_1_col_3: new Dom(".part_1_table_1_col_3"),
    part_1_table_1_col_4: new Dom(".part_1_table_1_col_4"),
    part_1_table_1_col_5: new Dom(".part_1_table_1_col_5"),
    part_1_table_1_col_6: new Dom(".part_1_table_1_col_6"),
    part_1_table_1_col_7: new Dom(".part_1_table_1_col_7"),
    part_1_table_1_col_8: new Dom(".part_1_table_1_col_8"),
    
    part_1_table_2_col_1: new Dom(".part_1_table_2_col_1"),
    part_1_table_2_col_2: new Dom(".part_1_table_2_col_2"),
    part_1_table_2_col_3: new Dom(".part_1_table_2_col_3"),
    part_1_table_2_col_4: new Dom(".part_1_table_2_col_4"),
    part_1_table_2_col_5: new Dom(".part_1_table_2_col_5"),
    part_1_table_2_col_7: new Dom(".part_1_table_2_col_7"),
    part_1_table_2_col_8: new Dom(".part_1_table_2_col_8"),
    part_1_table_2_col_9: new Dom(".part_1_table_2_col_9"),
    part_1_table_2_col_10: new Dom(".part_1_table_2_col_10"),
    // ! new items dom
    
    //part 2 cable added
    
    
    
    //* connection box table
    part_2_connections_box: new Dom(".part_2_connections_box"),
    part_1_1_connections_box: new Dom(".part_1_1_connections_box"),
    part_1_2_connections_box: new Dom(".part_1_2_connections_box"),
    
    //new images added for part1 
    
    
    // part2 calculation
    
    
    
    //* 29 feb new imgs
    
    
    //* part3 images added
    
    
    
    // * useful images from previous Experiment 
    
    btn_connections: new Dom("btn_connections"),
    btn_connectons_completed: new Dom("btn_connectons_completed"),
    btn_instructions: new Dom("btn_instructions"),
    btn_nomenclature: new Dom("btn_nomenclature"),
    // btn_plot: new Dom("btn_plot"),
    btn_procedure: new Dom("btn_procedure"),
    btn_reset: new Dom("btn_reset"),
    btn_start_experiment: new Dom("btn_start_experiment"),

    part_1_slide_3_compo_1_off: new Dom("part_1_slide_3_compo_1_off"),
    part_1_slide_3_compo_1_on: new Dom("part_1_slide_3_compo_1_on"),
    part_1_slide_3_compo_1_text: new Dom("part_1_slide_3_compo_1_text"),
    part_1_slide_3_compo_2_off: new Dom("part_1_slide_3_compo_2_off"),
    part_1_slide_3_compo_2_on: new Dom("part_1_slide_3_compo_2_on"),
    part_1_slide_3_compo_2_text: new Dom("part_1_slide_3_compo_2_text"),
    part_1_incomplete_connection: new Dom("part_1_incomplete_connection"),
    part_2_conncection_supply_1_red_button : new Dom("part_2_conncection_supply_1_red_button"),
    part_2_conncection_supply_2_red_button : new Dom("part_2_conncection_supply_2_red_button"),
    niddle_vGs: new Dom("niddle_vGs"),
    niddle_vIn: new Dom("niddle_vIn"),

    
      // * for PROCEDURE and instruction NOMENCLATURE



        //*EE5 images added

        arrow_black : new Dom("arrow_black"),
        btn_plot : new Dom("btn_plot"),
        btn_zoomed_in_plot : new Dom("btn_zoomed_in_plot"),
        part_1_cable_a2 : new Dom("part_1_cable_a2"),
        part_1_cable_ac2 : new Dom("part_1_cable_ac2"),
        part_1_cable_k : new Dom("part_1_cable_k"),
        part_1_cable_k_ac1 : new Dom("part_1_cable_k_ac1"),
        part_1_cable_p : new Dom("part_1_cable_p"),
        part_1_cable_p1 : new Dom("part_1_cable_p1"),
        part_1_cable_r2 : new Dom("part_1_cable_r2"),
        part_1_cable_rg2 : new Dom("part_1_cable_rg2"),
        part_1_cable_v1 : new Dom("part_1_cable_v1"),
        part_1_cable_v2 : new Dom("part_1_cable_v2"),
        part_1_calculations : new Dom("part_1_calculations"),
        part_1_components : new Dom("part_1_components"),
        part_1_instruction_box : new Dom("part_1_instruction_box"),
        part_1_nomenclature_box : new Dom("part_1_nomenclature_box"),
        part_1_procedure_box : new Dom("part_1_procedure_box"),
        part_2_cable_a2 : new Dom("part_2_cable_a2"),
        part_2_cable_ac1 : new Dom("part_2_cable_ac1"),
        part_2_cable_cp : new Dom("part_2_cable_cp"),
        part_2_cable_dvp : new Dom("part_2_cable_dvp"),
        part_2_cable_k : new Dom("part_2_cable_k"),
        part_2_cable_k_n : new Dom("part_2_cable_k_n"),
        part_2_cable_p : new Dom("part_2_cable_p"),
        part_2_cable_p1 : new Dom("part_2_cable_p1"),
        part_2_cable_r2 : new Dom("part_2_cable_r2"),
        part_2_cable_rg2 : new Dom("part_2_cable_rg2"),
        part_2_cable_v1 : new Dom("part_2_cable_v1"),
        part_2_cable_v2 : new Dom("part_2_cable_v2"),
        part_2_calculation : new Dom("part_2_calculation"),
        part_2_components : new Dom("part_2_components"),
        part_2_instruction_box : new Dom("part_2_instruction_box"),
        part_2_procedure_box : new Dom("part_2_procedure_box"),
        select_option_1 : new Dom("select_option_1"),
        select_option_2 : new Dom("select_option_2"),
        select_option_full : new Dom("select_option_full"),

// <!-- * image added for final src -->

        new_select_option_1 : new Dom("new_select_option_1"),
        new_select_option_2 : new Dom("new_select_option_2"),
        new_select_option_3 : new Dom("new_select_option_3"),
        new_select_option_full : new Dom("new_select_option_full"),

    // graph images added here
    graph_0_initial: new Dom("graph_0_initial"),
    graph_1_2500: new Dom("graph_1_2500"),
    graph_2_750: new Dom("graph_2_750"),
    graph_3_150: new Dom("graph_3_150"),
    graph_4_50: new Dom("graph_4_50"),




    domQs1: new Dom("domQs1"),
    domQs2: new Dom("domQs2"),
    domQs3: new Dom("domQs3"),
    domQs4: new Dom("domQs4"),
    domQs5: new Dom("domQs5"),
    domQs6: new Dom("domQs6"),

    chart: [
      (graph1 = null),
      (graph2 = null),
      (graph3 = null),
      (graph4 = null),
      (graph5 = null),
      (graph6 = null),
      (graph7 = null),
    ],

    chart: {
      label1: {
        x: "Label 2",
        y: "Label 1",
      },
      label2: {
        x: "Label 2",
        y: "Label 1",
      },
      label3: {
        x: "Label 2",
        y: "Label 1",
      },
      label4: {
        x: "Label 2",
        y: "Label 1",
      },
      label5: {
        x: "Label 2",
        y: "Label 1",
      },
      label6: {
        x: "Label 2",
        y: "Label 1",
      },
      label7: {
        x: "Label 2",
        y: "Label 1",
      },
    },
  },
  // ! To Plot graph
  plotGraph(
    ctx,
    graphIdx,
    data,
    dataLabel,
    xLabel = null,
    yLabel = null,
    beginAtZero = false,
    startEmpty = false,
  ) {
    // for label
    Scenes.items.yLabel.set(504, 263).setContent(yLabel).styles({
      backgroundColor: "transperant",
      textAlign: "center",
      color: "black",
      width: "170px",
      rotate: "-90deg",
      zIndex: 10,
    });
    Scenes.items.xLabel.set(664, 375).setContent(xLabel).styles({
      backgroundColor: "transperant",
      color: "black",
      width: "fit-content",
      zIndex: 10,
    });

    // ! Destroy old graph
    let graphRef = Scenes.items.chart[graphIdx];
    if (graphRef != null) {
      graphRef.destroy();
    }

    // temprory dataset 
    let datasets = [
      {
        label: dataLabel,
        fill: false,
        borderColor: "red",
        backgroundColor: "red",
        data: data,
        display: false,
      },
    ]

    if(startEmpty){
        datasets=[]
    }

    graphRef = new Chart(ctx, {
      type: "scatter",
      plugins: [
        {
          // afterDraw: chart => {
          //   var ctx = chart.chart.ctx;
          //   ctx.save();
          //   ctx.textAlign = 'center';
          //   ctx.font = '18px Arial';
          //   ctx.fillStyle = 'black';
          //   ctx.fillText('Output Power (P )', chart.chart.width / 2, chart.chart.height - 24);
          //   ctx.textAlign = 'left';
          //   ctx.font = '10px Arial';
          //   ctx.fillText('0', chart.chart.width - 119, chart.chart.height - 12);
          //   ctx.restore();
          // },
        },
      ],
      data: {
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: false,
                labelString: yLabel,
                fontColor: "black",
                fontSize: 17,
              },
              ticks: {
                beginAtZero: beginAtZero,
                fontColor: "black",
                fontSize: 14,
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: false,
                labelString: xLabel,
                fontColor: "black",
                fontSize: 17,
              },
              ticks: {
                beginAtZero: beginAtZero,
                fontColor: "black",
                fontSize: 14,
              },
            },
          ],
        },
      },
    });

    Scenes.items.chart[graphIdx] = graphRef;
    return graphRef
  },

  // for adding new datasets to graph
  graphFeatures: {
    addDataset(chart, label, bgColor, data) {
      chart.data.datasets.push({
        label: label,
        fill: false,
        borderColor: bgColor,
        backgroundColor: bgColor,
        data: data,
      });
      chart.update();
    },
    addData(chart, index, data) {
      console.log(data);
      if (data.length > 0) {
        chart.data.datasets[index].data = data;
      } else {
        chart.data.datasets[index].data.push(data);
      }
      chart.update();
    },
    getSizeOfDatasets(chart){
      return chart.data.datasets.length
    }
  },
  deleteAll() {
    for (i in this.img) {
      Scenes.img[i].hide();
    }
    for (i in this.items) {
      if (i == "header" || i == "stepTitle" || i == "stepDescription") {
        continue;
      }
      hide(Scenes.items[i]);
    }
  },
  // for content adder btn box
  contentAdderAddBtn(text) {
    Scenes.items.contentAdderBox.item.innerHTML += `<li class="btn content-adder">${text}</li>`;
  },
  currentStep: 0,
  subCurrentStep: 0,
  resetSubStep() {
    this.subCurrentStep = 0;
  },
  incCurrentSubStep() {
    this.subCurrentStep++;
  },
  setStepHeading(step, description,hide) {
    Scenes.items.stepTitle.setContent(step);
    Scenes.items.stepDescription.setContent(description);
    Scenes.items.stepHeading.show("flex").push();
    if(hide){
      let st={
        visibility: "hidden"
      }
      Scenes.items.stepTitle.styles(st)
      Scenes.items.stepDescription.styles(st)
    }
  },
  //* for hover on instuction , procedure and nomenclature

  // not done yet
  showPopup(step){

    let instructionBtn = Scenes.items.btn_instructions.zIndex(1000)
    let procedureBtn = Scenes.items.btn_procedure.zIndex(1000)
    let nomenclatureBtn = Scenes.items.btn_nomenclature.zIndex(1000)
    let instructionImg, procedureImg, nomenclatureImg;
    
    let btn = [
      instructionBtn, 
      procedureBtn,
      nomenclatureBtn,
    ]

    switch(step){

      //scr using meters
      case "4_1" : 
            instructionImg = Scenes.items.part_1_instruction_box.set(70,100, 404, 800).hide();
            procedureImg = Scenes.items.part_1_procedure_box.set(-60, 140,504, 900 ).hide();
            nomenclatureImg = Scenes.items.part_1_nomenclature_box.set(-80, 100, 504, 950).hide();

            break;

      //scr using using oscilloscope
      case "4_2" :  instructionImg = Scenes.items.part_2_instruction_box.set(70,-60, 404, 800).hide();
                procedureImg = Scenes.items.part_2_procedure_box.set(-180, 90,504, 1000 ).hide();
                nomenclatureImg = Scenes.items.part_1_nomenclature_box .set(-80, 20, 504, 1050).hide();
            break;

      // case "2" :  instructionImg = Scenes.items.part_2_instruction;
      //           procedureImg = Scenes.items.part_2_procedure.set(null,-80).hide();
      //           nomenclatureImg = Scenes.items.part_2_nomenclature.set(null,-80).hide();  

      //       break;

      // case "3" :  
      // procedureImg = Scenes.items.part_3_procedure;
      // nomenclatureImg = Scenes.items.part_3_nomenclature;  
      
      //       break;
          }

    let showInstructionImg = function(){
      instructionImg.show().zIndex(40)
    }

    let showProcedureImg = function(){
      procedureImg.show().zIndex(40)

    }

    let showNomenclatureImg = function(){
      nomenclatureImg.show().zIndex(40)

    }
    
    let hideInstructionImg = function(){
      instructionImg.hide()
    }

    let hideProcedureImg = function(){
      procedureImg.hide()

    }

    let hideNomenclatureImg = function(){
      nomenclatureImg.hide()

    }
    

    btn[0].item.onmouseover = showInstructionImg
    btn[0].item.onmouseout = hideInstructionImg

    btn[1].item.onmouseover = showProcedureImg
    btn[1].item.onmouseout = hideProcedureImg

    btn[2].item.onmouseover = showNomenclatureImg
    btn[2].item.onmouseout = hideNomenclatureImg

 

    

  },
  // for typing hello text
  intru: null,
  intruVoice: null,
  optionsDone: [0, 0, 0, 0],
  steps: [
    (intro = () => {
      // remove all dom element for back and setProcessRunning
      setIsProcessRunning(true);

      // starting elements

      // subtitle
      setTimeout(() => {
        setCC("Enter your name and click on 'Start' to start the experiment");
      }, 500);
      Scenes.items.header.set(0, 120).show("flex");
      let inputWindow = get(".user-input");
      show(inputWindow, "flex");
      let man = new Dom("man").set(650, 80).push();

      let submitBtn = get("#nameSubmitBtn");
      submitBtn.onclick = () => {
        student_name = get("#stuName").value;
        let error = get(".user-input .error");
        // todo remove comment
        if (student_name.trim() == "") {
          show(error);
          return;
        }
        // take only first space
        let fName = student_name.slice(0, student_name.indexOf(" "));
        hide(error);
        let tl = anime.timeline({
          easing: "easeOutExpo",
          duration: 1000,
        });
        tl.add({
          targets: ".anime-header",
          top: 0,
        })
          .add({
            targets: ".user-input",
            opacity: 0,
          })
          .add({
            targets: man.item,
            translateX: -280,
          })
          .add({
            targets: Scenes.items.talk_cloud.item,
            begin() {
              // Scenes.items.tempText.innerHTML = `👋 Hey!<br>${fName}`;
              Scenes.items.tempText.item.style.fontWeight = "bold";
              // show(Scenes.items.tempText);
              intru = new Typed(Scenes.items.tempText.item, {
                strings: ["", `Hey!👋<br>${fName}`],
                typeSpeed: 25,
              });
              Scenes.items.tempText.set(482, 1);
              textToSpeach(`Hey! ${fName}`);
              textToSpeach(
                "Welcome to Foundation Wall in Foamwork Experiment of Foamwork Technology in Civil Engineering Virtual Lab developed by Prof. K. N. Jha, Department of Civil Engineering, IIT Delhi."
              );
              Scenes.items.talk_cloud.set(450, -40, 180).push();
              setCC("");
            },
            endDelay: 2000,
            opacity: [0, 1],
          })
          .add({
            begin() {
              // to hide previous step images
              intru.destroy();
              Dom.hideAll();
              Scenes.items.welcomeBox.show("flex");
            },
          })
          .add({
            duration: 12000,
            complete() {
              setCC("Click 'Next' to go to next step");
              Dom.setBlinkArrow(true, 790, 444).play();
              setIsProcessRunning(false);
            },
          });
      };
      return true;
    }),
    (objective = function () {
      setIsProcessRunning(true);
      Dom.hideAll();

      // require
      let btn_transparent = Scenes.items.btn_transparent.set().item;

      Scenes.items.concept_development.set().styles({
        zIndex: "5000",
        scale: "1 0.9",
        top: "-140px",
        position: "absolute",
      })

      // ! Slide ended enable the button next button
      function checkIsSlideEnded(){
        let isSlideEnded = localStorage.getItem("isSlideEnded")
        if(isSlideEnded=="true"){
          btn_transparent.disabled = false
          setIsProcessRunning(false)
          btn_transparent.classList.remove("btn-disabled")
          // setCC("Click next to goto next slide.")
          Dom.setBlinkArrowRed(true, 866, 420,30,null,-90).play();
          btn_transparent.onclick = ()=>{
            Scenes.next()
            localStorage.setItem("isSlideEnded",false)
            window.clearInterval(interval)
          }
        }
      }
      var interval = window.setInterval(checkIsSlideEnded, 1000)

      return true;
    }),
    //! EE5 step 1

    //EE5 step1
    (step1 = function () {
      setIsProcessRunning(true)
      Scenes.items.btn_next.show()

      // todo all previous elements hide
      Dom.hideAll();
      Scenes.items.contentAdderBox.item.innerHTML = "";

      Scenes.setStepHeading("Step-1", "To Plot Different Characteristics.");
      let StepDone = JSON.parse(localStorage.getItem("StepDone"))
      if(StepDone.IGBT && StepDone.SCR && StepDone.MOSFET){
        setCC("Simultion Done ✅")
      }
      else{
        setCC("Click on the 'ICON' to plot the performance characteristics.")
      }

      // * remove all previous restrictions

      //! * Required Elements

      Scenes.items.new_select_option_full.set(30,0, 404, 900).zIndex(1)
      Scenes.items.new_select_option_1.set(310,36, 98, 550).zIndex(2)
      Scenes.items.new_select_option_2.set(330,152, 100, 600).zIndex(2)
      Scenes.items.new_select_option_3.set(330,272, 102, 570).zIndex(2)
    

      // ! onclicks for all options
      let options = [
        Scenes.items.new_select_option_1,
        Scenes.items.new_select_option_2,
        Scenes.items.new_select_option_3,
      ];

      // ! Destroy Graphs
      function destroyGraphs() {
        for (let i = 0; i < 7; i++) {
          if (Scenes.items.chart[i] != null) {
            Scenes.items.chart[i].destroy();
          }
        }
      }
      // destroyGraphs()

      Scenes.forMathematicalExpressionBtn = 0;

      const opOne = () => {
        Scenes.optionsDone[0] = 1;
        Scenes.forMathematicalExpressionBtn = 1;
        console.log("opone")
        Scenes.steps[0 + 3]();
      };
      const opTwo = () => {
        Scenes.mergeProcessHelper("IGBT",false)
        console.log("two")
      };
      const opThree = () => {
        Scenes.mergeProcessHelper("MOSFET",false)
        console.log("three")
      };
   
      options[0].item.onclick = opOne;
      options[1].item.onclick = opTwo;
      options[2].item.onclick = opThree;

      

      // ! if all options done then exit
      let exit = true;
      for (let i of Scenes.optionsDone) {
        if (i == 0) {
          exit = false;
          break;
        }
      }

      if (exit) {
        // after complete
        // Dom.setBlinkArrow(true, 790, 408).play();
        setCC("Simulation Done");
        setIsProcessRunning(false);
      }

      return true;
    }),

    //*scr option step
    (step2 = function () {
      setIsProcessRunning(false);
      Scenes.items.btn_next.show();

      // todo all previous elements hide
      Dom.hideAll();
      Scenes.items.contentAdderBox.item.innerHTML = "";

      Scenes.setStepHeading("Step-1", "To Plot Different Characteristics.");
      setCC("Click on the 'ICON' to plot the performance characteristics.")

      // * remove all previous restrictions

      //! * Required Elements

      Scenes.items.select_option_full.set(30,50, 250, 880).zIndex(1)
      Scenes.items.select_option_1.set(605,60, 110, 300).zIndex(2)
      Scenes.items.select_option_2.set(605,180, 110, 300).zIndex(2)
    

      // ! onclicks for all options
      let options = [
        Scenes.items.select_option_1,
        Scenes.items.select_option_2,
      ];

      // ! Destroy Graphs
      function destroyGraphs() {
        for (let i = 0; i < 7; i++) {
          if (Scenes.items.chart[i] != null) {
            Scenes.items.chart[i].destroy();
          }
        }
      }
      // destroyGraphs()

      Scenes.forMathematicalExpressionBtn = 0;

      const opOne = () => {
        Scenes.optionsDone[0] = 1;
        Scenes.forMathematicalExpressionBtn = 1;
        Scenes.currentStep = 4
        Scenes.next()
      };
      const opTwo = () => {
        Scenes.optionsDone[1] = 1;
        Scenes.forMathematicalExpressionBtn = 2;
        Scenes.currentStep = 5
        Scenes.next()
      };
   
      options[0].item.onclick = opOne;
      options[1].item.onclick = opTwo;


      // ! if all options done then exit
      let exit = true;
      for (let i of Scenes.optionsDone) {
        if (i == 0) {
          exit = false;
          break;
        }
      }

      if (exit) {
        // after complete
        // Dom.setBlinkArrow(true, 790, 408).play();
        setCC("Simulation Done");
        // setIsProcessRunning(false);
      }

      return true;
    }),
  
    //*scr part_1
    (step3 = function () {
      setIsProcessRunning(true);

      Scenes.setStepHeading("", "using meteres",true);
      Scenes.items.btn_next.show();
      // ! Step Connection

      // required elements 
      let btns = [
        Scenes.items.btn_instructions.set(770 + 40, 145, 50).zIndex(13),
        Scenes.items.btn_reset.set(850, 200 , 40).zIndex(13),
        Scenes.items.btn_connections.set(770 + 40, 190 + 55, 50).zIndex(13),
        Scenes.items.btn_connectons_completed
          .set(770 + 40, 190 + 110, 50, 147)
          .zIndex(13),
        Scenes.items.btn_start_experiment
          .set(770 + 40, 190 + 165, 50, 147)
          .zIndex(13),
      ]

      // required images
      let images = [
        Scenes.items.part_1_components.set(0,-70,495,975).zIndex(1),
        Scenes.items.part_2_conncection_supply_1_red_button.set(178,72,28,25).zIndex(13),
        Scenes.items.part_1_1_connections_box,
      ]

      let cables = [
        Scenes.items.part_1_cable_p1.set(0,0).zIndex(2).hide(),
        Scenes.items.part_1_cable_k_ac1.set(0,0).zIndex(3).hide(),
        Scenes.items.part_1_cable_ac2.set(0,0).zIndex(4).hide(),
        Scenes.items.part_1_cable_r2.set(0,0).zIndex(5).hide(),
        Scenes.items.part_1_cable_p.set(0,0).zIndex(6).hide(),
        Scenes.items.part_1_cable_rg2.set(0,0).zIndex(7).hide(),
        Scenes.items.part_1_cable_a2.set(0,0).zIndex(8).hide(),
        Scenes.items.part_1_cable_k.set(0,0).zIndex(9).hide(),
        Scenes.items.part_1_cable_v1.set(0,0).zIndex(10).hide(),
        Scenes.items.part_1_cable_v2.set(0,0).zIndex(11).hide(),
      ]

      // ! for increasing the size
      let l = 0,t = -70, h = 495, w = 975 
      Scenes.items.part_1_components.set(l,t,h,w).zIndex(1)
      cables.forEach(ele=>{
        ele.set(l,t,h,w).hide()
      })

      let cables_color = [
        "#c20000",
        "#223964",
        "#ffca00",
        "#010101",
        "#008000",
        "#5a5656",
        "#cb5c10",
        "#070707",
        "#ff46ff",
        "#68064c",
        ]


      function hideConnectionStepImgs(){
        let allImages = [
          ...btns,...images,...cables
        ]
        allImages.forEach(ele=>{
          ele.hide()
        })
        Dom.setBlinkArrowRed(-1)
      }


      //! Connection Part
      // to enable startExp Button
      let partConnectionsIsComplete = false
      function partConnections(){
         // Connection Logic
        Scenes.items.part_1_1_connections_box.set(414,-70).hide()

        // ! btn_reset onclick
        Scenes.items.btn_reset.item.onclick = ()=>{
          let box_buttons_reset = document.querySelectorAll(".part_1_1_connections_box button")
          let temps = {
            textShadow: "none",
            color: "black",
            backgroundColor: "transparent"
          }
          box_buttons_reset.forEach(ele=>{
            let ele_Dom = new Dom(ele)
            ele_Dom.styles(temps)
          })
          Scenes.steps[3]()
        }

        //! connection box onclick
        Scenes.items.btn_connections.item.onclick = ()=>{
          Scenes.items.part_1_1_connections_box.show("flex")
          // ! connection table arrow move
          Dom.setBlinkArrowRed(true,483,5,35,null,90).play()
          setCC("")
        }
        let box_buttons = document.querySelectorAll(".part_1_1_connections_box button")

        //! connection box onclick
        let btnClickedCount = 0
        let connectionBtnArrow = 483
        let arrowLeftGap = 46
        box_buttons.forEach((ele,i)=>{
          ele.onclick = ()=>{
            // increasing count of complete connection
            if(ele.style.color!="white"){
              btnClickedCount++
              //! move arrow 
              connectionBtnArrow += arrowLeftGap
              Dom.setBlinkArrowRed(true,connectionBtnArrow,5,35,null,90).play()
              
              if(btnClickedCount==10){
                Dom.setBlinkArrowRed(true,745,305,35,null,180).play()
                setCC("Click on Connections Completed")

                Scenes.items.btn_connections.item.onclick = ()=>{}
              }
            }
            
            cables[i].show()
            ele.style.backgroundColor = cables_color[i]
            ele.style.color = "white"
            ele.style.textShadow = "1px 1px black"
          }
        })

        Dom.setBlinkArrowRed(true,745,250,35,null,180).play()
        setCC("Click on Connections")

        //! Onclick for check connections
        Scenes.items.btn_connectons_completed.item.onclick = ()=>{
          
          if(btnClickedCount==10){
            
            //! First red button click 
            Scenes.items.part_1_slide_3_compo_1_text.set(208,114,50).zIndex(10)
            Dom.setBlinkArrowRed(true,206,73).play()
            setCC("Switch on Main Supply")
            Scenes.items.part_2_conncection_supply_1_red_button.item.onclick = ()=>{
              
              Scenes.items.part_2_conncection_supply_1_red_button.hide()
              Scenes.items.part_1_slide_3_compo_1_text.hide()

              Dom.setBlinkArrowRed(true,748,360,35,null,180).play()
              setCC("Click on Start Experiment")
              partConnectionsIsComplete = true


              //! Second red button click

              // Scenes.items.part_2_conncection_supply_2_red_button.item.onclick = ()=>{
              //   Scenes.items.part_2_conncection_supply_2_red_button.hide()
              //   Scenes.items.part_1_slide_3_compo_2_text.hide()

              //   Dom.setBlinkArrowRed(true,748,360,35,null,180).play()
              //   setCC("Click on Start Experiment")
              // }
            }
            
          }
          else{
            Scenes.items.part_1_incomplete_connection.set(570,300,50).zIndex(10)
            anime({
              targets: Scenes.items.part_1_incomplete_connection.item,
              delay: 2000,
              complete(){
                Scenes.items.part_1_incomplete_connection.hide()
              }
            })
          }
        }
      }
      partConnections()

      //! Graph Part
      function partCalculation(){
        // for recrod btn
        let plotBtnIdx = 1
        Scenes.items.part_1_calculations.set(-15,-70,480,983)
        Scenes.items.btn_procedure.set(790+5,-72,37).zIndex(10)
        Scenes.items.btn_nomenclature.set(610+5,-72,37,160).zIndex(10)
        Scenes.items.btn_plot.set(512+5,-74,40,85).zIndex(10)
        let graph_l = 516,
        graph_t = -35,
        graph_h = 450,
        graph_w = 430
        Scenes.items.graph_0_initial.set(graph_l,graph_t,graph_h,graph_w).zIndex(10)
        let graphs = [
          Scenes.items.graph_1_2500.set(graph_l,graph_t,graph_h,graph_w).zIndex(11).hide(),
          Scenes.items.graph_2_750.set(graph_l,graph_t,graph_h,graph_w).zIndex(12).hide(),
          Scenes.items.graph_3_150.set(graph_l,graph_t,graph_h,graph_w).zIndex(13).hide(),
          Scenes.items.graph_4_50.set(graph_l,graph_t,graph_h,graph_w).zIndex(14).hide()
        ]
        
        // step tutorial
        Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
        setCC("Click on the Gate resistance slider and set it to 25 kilo ohms")
        
        // * Calling slider
        sliders.showSliderFor("1_1")

        // * assume tempTitle10 as a btn record
        let btn_record = sliders.btn_record.item
        
        // and other blink arrow is on sliders.js

        // ! btn_plot
        Scenes.items.btn_plot.item.onclick = ()=>{
          Dom.setBlinkArrowRed(-1)
          let vGs_value = sliders.slider_vGs.getValue()
          let vIn_value = sliders.slider_vIn.getValue()
          let R_value = sliders.slider_R.getValue()

          updateValues(vIn_value,vGs_value,R_value)
          console.log(vGs_value)

          switch(Number(vGs_value)){
            case 25:
              Dom.setBlinkArrowRed(-1)
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setCC("Reverse blocking and forward blocking characteristics are displayed on the DSO screen. For better visual understanding, zoomed version of the DSO screen is also included just below.")
              setTimeout(()=>{
                Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
                setCC("Generate similar type of characteristics with different gate resistances by clicking the gate slider. Set gate resistance to 750 ohms which corresponds to 2 milli ampere gate current.")
              },15000)
              break;
            case 750:
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setTimeout(()=>{
                Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
                setCC("To generate one more characteristics, set gate resistance slider to to 150 ohms and click on the plot icon.")
              },5000)
            
              break
            case 150:
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setTimeout(()=>{
                Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
              },5000)
            
              break
            case 50:
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setTimeout(()=>{
                setCC("From this experiment, it is clear that the v i characteristics of SCR depends on the gate current magnitude. Higher the gate current, lesser is the forward breakover voltage.")
                // Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()

                setTimeout(()=>{
                  // Dom.setBlinkArrow(true, 790, 544).play();
                  // setCC("Click 'Next' to go to next step");
                  setIsProcessRunning(false);
                  Scenes.currentStep = 2
                },12000)

              },5000)
            
              break

          }
          plotBtnIdx++
        }
        
        // ! btn_record onclick
        plotBtnIdx = 0
        btn_record.onclick = ()=>{
          let vGs_value = sliders.slider_vGs.getValue()
          let vIn_value = sliders.slider_vIn.getValue()
          let R_value = sliders.slider_R.getValue()

          updateValues(vIn_value,vGs_value,R_value)
          
          // end the slide
          if(vGs_value==last_vGs_value){
            Dom.setBlinkArrowRed(-1)
            Dom.setBlinkArrow(true, 790, 544).play();
            setCC("Click 'Next' to go to next step");
            setIsProcessRunning(false);
            // for going to the second step
            Scenes.currentStep = 2
          }
        }
      }

      // todo remove
      // hideConnectionStepImgs()
      // partCalculation()


         //to show btn popup
         Scenes.showPopup("4_1")

      //! onclick start btn
      Scenes.items.btn_start_experiment.item.onclick = ()=>{
        // to enable the button
        if(partConnectionsIsComplete){
          // * Hide preivous
          hideConnectionStepImgs()
          // * calculation part
          partCalculation()
          Scenes.showPopup("4_1")
        }
      }

      return true
    }),

    //*scr part_2
    (step4 = function () {
      setIsProcessRunning(true);
      Scenes.setStepHeading("", "using oscilloscope",true)
      Scenes.items.btn_next.show();
      // ! Step Connection

      // required elements 
      let temp = 16
      let btns = [
        Scenes.items.btn_instructions.set(750 + 75, 10-temp, 40).zIndex(23),
        Scenes.items.btn_connections.set(750 + 75, 55-temp, 40).zIndex(23),
        Scenes.items.btn_connectons_completed
          .set(750 + 75, 100-temp, 50, 120)
          .zIndex(23),
        Scenes.items.btn_start_experiment
          .set(750 + 75, 153-temp, 50, 120)
          .zIndex(23),
        Scenes.items.btn_reset.set(730, 175-temp, 30).zIndex(23),
      ]

      // required images
      let images = [
        Scenes.items.part_2_components.set(0,-80,495,975).zIndex(1),
        Scenes.items.part_2_conncection_supply_1_red_button.set(150,70,28,25).zIndex(23),
        Scenes.items.part_1_2_connections_box,
      ]

      let cables = [
        Scenes.items.part_2_cable_p1.set(0,0).zIndex(10).hide(),
        Scenes.items.part_2_cable_k.set(0,0).zIndex(11).hide(),
        Scenes.items.part_2_cable_r2.set(0,0).zIndex(12).hide(),
        Scenes.items.part_2_cable_p.set(0,0).zIndex(13).hide(),
        Scenes.items.part_2_cable_rg2.set(0,0).zIndex(14).hide(),
        Scenes.items.part_2_cable_a2.set(0,0).zIndex(15).hide(),
        Scenes.items.part_2_cable_k_n.set(0,0).zIndex(16).hide(),
        Scenes.items.part_2_cable_cp.set(0,0).zIndex(18).hide(),
        Scenes.items.part_2_cable_dvp.set(0,0).zIndex(19).hide(),
        Scenes.items.part_2_cable_v1.set(0,0).zIndex(20).hide(),
        Scenes.items.part_2_cable_v2.set(0,0).zIndex(21).hide(),
      ]

      // ! for increasing the size
      let l = 0,t = -70, h = 485, w = 945 
      Scenes.items.part_2_components.set(l,t,h,w).zIndex(1)
      cables.forEach(ele=>{
        ele.set(l,t,h,w).hide()
      })

      let cables_color = [
        "#e40d0d",
        "#162848",
        "#010101",
        "#038403",
        "#3e3e3e",
        "#82461d",
        "#080808",
        "#760e58",
        "#878787",
        "#04aae6",
        "#01ff01",
      ]

      function hideConnectionStepImgs(){
        let allImages = [
          ...btns,...images,...cables
        ]
        allImages.forEach(ele=>{
          ele.hide()
        })
        Dom.setBlinkArrowRed(-1)
      }

      //! Connection Part
      // to enable startExp Button
      let partConnectionsIsComplete = false
      function partConnections(){
        // Connection Logic
        Scenes.items.part_1_2_connections_box.set(410,-78).hide()

        // ! btn_reset onclick
        Scenes.items.btn_reset.item.onclick = ()=>{
          let box_buttons_reset = document.querySelectorAll(".part_1_2_connections_box button")
          let temps = {
            textShadow: "none",
            color: "black",
            backgroundColor: "transparent"
          }
          box_buttons_reset.forEach(ele=>{
            let ele_Dom = new Dom(ele)
            ele_Dom.styles(temps)
          })
          Scenes.steps[4]()
        }

        //! connection box onclick
        Scenes.items.btn_connections.item.onclick = ()=>{
          Scenes.items.part_1_2_connections_box.show("flex")
          // ! connection table arrow move
          Dom.setBlinkArrowRed(true,470,-4,35,null,90).play()
          setCC("")
        }
        let box_buttons = document.querySelectorAll(".part_1_2_connections_box button")

        //! connection box onclick
        let btnClickedCount = 0
        let connectionBtnArrow = 470
        let arrowLeftGap = 43
        box_buttons.forEach((ele,i)=>{
          ele.onclick = ()=>{
            // increasing count of complete connection
            if(ele.style.color!="white"){
              btnClickedCount++
              //! move arrow 
              connectionBtnArrow += arrowLeftGap
              Dom.setBlinkArrowRed(true,connectionBtnArrow,-4,35,null,90).play()
              
              if(btnClickedCount==cables.length){
                Dom.setBlinkArrowRed(true,778,105-temp,35,null,180).play()
                setCC("Click on Connections Completed")

                Scenes.items.btn_connections.item.onclick = ()=>{}
              }
            }
            
            cables[i].show()
            ele.style.backgroundColor = cables_color[i]
            ele.style.color = "white"
            ele.style.textShadow = "1px 1px black"
          }
        })

        Dom.setBlinkArrowRed(true,778,55-temp,35,null,180).play()
        setCC("Click on Connections")

        //! Onclick for check connections
        Scenes.items.btn_connectons_completed.item.onclick = ()=>{
          
          if(btnClickedCount==11){
            
            //! First red button click 
            Scenes.items.part_1_slide_3_compo_1_text.set(178,96,50).zIndex(20)
            Dom.setBlinkArrowRed(true,170,65).play()
            setCC("Switch on Main Supply")
            Scenes.items.part_2_conncection_supply_1_red_button.item.onclick = ()=>{
              
              Scenes.items.part_2_conncection_supply_1_red_button.hide()
              Scenes.items.part_1_slide_3_compo_1_text.hide()

               Dom.setBlinkArrowRed(true,778,165-temp,35,null,180).play()
                setCC("Click on Start Experiment")
                partConnectionsIsComplete = true
              //! Second red button click
              
              // Scenes.items.part_1_slide_3_compo_2_text.set(168,338,56).zIndex(20)
              // Dom.setBlinkArrowRed(true,166,306).play()
              // setCC("Switch on Gate Supply")

              // Scenes.items.part_2_conncection_supply_2_red_button.item.onclick = ()=>{
              //   Scenes.items.part_2_conncection_supply_2_red_button.hide()
              //   Scenes.items.part_1_slide_3_compo_2_text.hide()

              //   // Dom.setBlinkArrowRed(true,778,165-temp,35,null,180).play()
              //   // setCC("Click on Start Experiment")
              //   // partConnectionsIsComplete = true
              // }
            }
            
          }
          else{
            Scenes.items.part_1_incomplete_connection.set(660,100,50).zIndex(10)
            anime({
              targets: Scenes.items.part_1_incomplete_connection.item,
              delay: 2000,
              complete(){
                Scenes.items.part_1_incomplete_connection.hide()
              }
            })
          }
        }
      }
      partConnections()

      //! Graph Part
      function partCalculation(){
        // for recrod btn
        let plotBtnIdx = 1
        Scenes.items.part_2_calculation.set(-15,-70,480,983)
        Scenes.items.btn_procedure.set(790+5,-72,37).zIndex(10)
        Scenes.items.btn_nomenclature.set(610+5,-72,37,160).zIndex(10)
        Scenes.items.btn_plot.set(512+5,-74,40,85).zIndex(10)
        let graph_l = 516,
        graph_t = -35,
        graph_h = 450,
        graph_w = 430
        Scenes.items.graph_0_initial.set(graph_l,graph_t,graph_h,graph_w).zIndex(10)
        let graphs = [
          Scenes.items.graph_1_2500.set(graph_l,graph_t,graph_h,graph_w).zIndex(11).hide(),
          Scenes.items.graph_2_750.set(graph_l,graph_t,graph_h,graph_w).zIndex(12).hide(),
          Scenes.items.graph_3_150.set(graph_l,graph_t,graph_h,graph_w).zIndex(13).hide(),
          Scenes.items.graph_4_50.set(graph_l,graph_t,graph_h,graph_w).zIndex(14).hide()
        ]
        
        // step tutorial
        Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
        setCC("Click on the Gate resistance slider and set it to 25 kilo ohms")
        
        // * Calling slider
        sliders.showSliderFor("1_2")

        // * assume tempTitle10 as a btn record
        let btn_record = sliders.btn_record.item
        
        // and other blink arrow is on sliders.js

        // ! btn_plot
        Scenes.items.btn_plot.item.onclick = ()=>{
          Dom.setBlinkArrowRed(-1)
          let vGs_value = sliders.slider_vGs.getValue()
          let vIn_value = sliders.slider_vIn.getValue()
          let R_value = sliders.slider_R.getValue()

          updateValues(vIn_value,vGs_value,R_value)
          console.log(vGs_value)

          switch(Number(vGs_value)){
            case 25:
              Dom.setBlinkArrowRed(-1)
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setCC("Reverse blocking and forward blocking characteristics are displayed on the DSO screen. For better visual understanding, zoomed version of the DSO screen is also included just below.")
              setTimeout(()=>{
                Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
                setCC("Generate similar type of characteristics with different gate resistances by clicking the gate slider. Set gate resistance to 750 ohms which corresponds to 2 milli ampere gate current.")
              },15000)
              break;
            case 750:
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setTimeout(()=>{
                Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
                setCC("To generate one more characteristics, set gate resistance slider to to 150 ohms and click on the plot icon.")
              },5000)
            
              break
            case 150:
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setTimeout(()=>{
                Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()
              },5000)
            
              break
            case 50:
              Anime.fadeIn(graphs[plotBtnIdx].show().opacity(0).item)
              setTimeout(()=>{
                setCC("From this experiment, it is clear that the v i characteristics of SCR depends on the gate current magnitude. Higher the gate current, lesser is the forward breakover voltage.")
                // Dom.setBlinkArrowRed(true,10,320,35,null,-90).play()

                setTimeout(()=>{
                  setCC("SCR Done ✅");
                  setIsProcessRunning(false);
                  
                  // ! Merge Helper
                  nextBtn.addEventListener("click", () => {
                    Scenes.mergeProcessHelper()
                  });

                },12000)

              },5000)
            
              break

          }
          plotBtnIdx++
        }
        
        // ! btn_record onclick
        plotBtnIdx = 0
        btn_record.onclick = ()=>{
          let vGs_value = sliders.slider_vGs.getValue()
          let vIn_value = sliders.slider_vIn.getValue()
          let R_value = sliders.slider_R.getValue()

          updateValues(vIn_value,vGs_value,R_value)
          
          // end the slide
          if(vGs_value==last_vGs_value){
            Dom.setBlinkArrowRed(-1)
            Dom.setBlinkArrow(true, 790, 544).play();
            setCC("Click 'Next' to go to next step");
            setIsProcessRunning(false);
            // for going to the second step
            Scenes.currentStep = 2
          }
        }
      }

      // todo remove
      // hideConnectionStepImgs()
      // partCalculation()

            //to show btn popup
            Scenes.showPopup("4_2")
      //! onclick start btn
      Scenes.items.btn_start_experiment.item.onclick = ()=>{
        // to enable the button
        if(partConnectionsIsComplete){
          // * Hide preivous
          hideConnectionStepImgs()
          // * calculation part
          partCalculation()

            //to show btn popup
            Scenes.showPopup("4_2")
        }
      }



      return true
    }),

    
  ],
  back() {
    //! animation isRunning
    // if (isRunning) {
    //   return;
    // }
    if (this.currentStep > 1) {
      Scenes.items.btn_next.setContent("Next");
      Scenes.items.btn_next.item.onclick = () => {};
      this.currentStep -= 2;
      this.steps[this.currentStep]();
      this.currentStep++;
      backDrawerItem();
      backProgressBar();
    }
  },
  next() {
    //! animation isRunning
    if (isRunning) {
      return;
    }
    if (this.currentStep < this.steps.length) {
      if (this.steps[this.currentStep]()) {
        nextDrawerItem();
        nextProgressBar();
        this.currentStep++;
      }
    } else {
    }
  },
  // ! For Merge Process Helper
  mergeProcessHelper(goto="menu",done=true){
    let StepDone = JSON.parse(localStorage.getItem("StepDone"))
    StepDone.SCR = done
    StepDone.goto = goto
    localStorage.setItem("StepDone",JSON.stringify(StepDone))
  }
};

// * slider
// var rangeSlider = function () {
//   var slider = $(".range-slider"),
//     range = $(".range-slider__range"),
//     value = $(".range-slider__value");

//   slider.each(function () {
//     value.each(function () {
//       var value = $(this).prev().attr("value");
//       $(this).html(value);
//     });

//     range.on("input", function () {
//       $(this).next(value).html(this.value);
//       $(this).next(value).val(this.value);
//     });
//   });
// };
// $(".resistance-input").on("keyup", () => {
//   let slider = $(".slider_R .range-slider__range");
//   let input = document.querySelector(".resistance-input");

//   let min = 1;
//   let max = Number(slider.attr("max"));
//   // if (input.value < min) {
//   //   input.value = min;
//   // }
//   if (input.value > max) {
//     input.value = max;
//   }
//   slider.val(input.value);
// });
// rangeSlider();

// stepcalling
Scenes.currentStep = 2

Scenes.next()
// Scenes.steps[3]()
// Scenes.next()
// Scenes.next()

const nextBtn = get(".btn-next");

const backBtn = get(".btn-back");
nextBtn.addEventListener("click", () => {
  Scenes.next();
});
backBtn.addEventListener("click", () => {
  Scenes.back();
});

// print certificate
get(".btn-save").addEventListener("click", () => {
  window.print();
});

let muteBtn = get(".btn-mute");
muteBtn.addEventListener("click", () => {
  if (isMute) {
    isMute = false;
    muteBtn.src = "./src/images/template_imgs/speech_off_btn.png";
    muteBtn.title = "Click to Mute";
  } else {
    isMute = true;
    muteBtn.src = "./src/images/template_imgs/speech_on_btn.png";
    muteBtn.title = "Click to Unmute";
  }
});

// ! Anime Header Hover Buttons
function btnPopupBox() {
  let popupBtns = document.querySelectorAll(".btn-popup");
  let popupWindow = document.querySelector(".btn-popup-window");

  popupBtns[0].onmouseover = () => {
    popupWindow.src = Scenes.items.formulas_procedure.item.src;
  };
  popupBtns[1].onmouseover = () => {
    popupWindow.src = Scenes.items.formulas_nomenclautre.item.src;
  };
  popupBtns[2].onmouseover = () => {
    switch (Scenes.forMathematicalExpressionBtn) {
      case 1:
        popupWindow.src = Scenes.items.formulas_ideal.item.src;
        break;

      case 2:
        popupWindow.src = Scenes.items.formulas_non_ideal.item.src;
        break;

      case 3:
        popupWindow.src = Scenes.items.formulas_efficiency.item.src;
        break;

      case 4:
        popupWindow.src = Scenes.items.formulas_component_stress.item.src;
        break;

      default:
        popupWindow.src = Scenes.items.formulas_universal.item.src;
        break;
    }
  };
}
// btnPopupBox();

// i really enjoyed the voice of keybord
// its amazing

// mouse position
// function getCursor(event) {
//   let x = event.clientX;
//   let y = event.clientY;
//   let _position = `X: ${x - 419}<br>Y: ${y - 169}`;

//   const infoElement = document.getElementById("info");
//   infoElement.innerHTML = _position;
//   infoElement.style.top = y + "px";
//   infoElement.style.left = x + 20 + "px";
// }

