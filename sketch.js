//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
       trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinharaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiplacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}
             
function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
  }

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
  }

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
   rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinharaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
}
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
  x,
  y,
  raqueteComprimento,
  raqueteAltura,
  xBolinha,
  yBolinha,
  raio
 );
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
}
 }
function incluiplacar() {
  stroke (255);
  textAlign(CENTER);
  textSize(18);
  
  fill(color("blue"));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  
  fill(color("blue"));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
  }

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 1){
    xBolinha = 25
  }
  if (xBolinha + raio > 599){
    xBolinha = 585
}
}
