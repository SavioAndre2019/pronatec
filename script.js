var slideIndex = 1;
                
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {

 
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";

  if(n==1){
    TrocaTitulo("Contratações e saídas do Flamengo: veja quem chega e quem vai embora em 2019");
    TrocaLegenda("Felipe Melo: Flamengo mira Felipe Melo por choque de ordem no elenco </p> ");
  }
  if(n==2){
     TrocaTitulo("Real Madrid retoca avião antes de viajar para o Mundial de Clubes; veja como ficou"); 
     TrocaLegenda("A aeronave foi envelopada quase por completo com imagens dos jogadores merengues. Em ordem, Marcelo, Modric, Sergio Ramos, Bale e Benzema agora estampam a lateral do avião. ");
  }
  if(n==3){
     TrocaTitulo("Receita Federal cobra multa de R$ 69 milhões de Neymar; defesa quer reverter na Justiça");
    TrocaLegenda("A Receita Federal cobra R$ 69.364.164,65 do atacante Neymar. O valor é resultado do cálculo feito pelo do órgão após decisão do Carf (Conselho Administrativo de Recursos Fiscais), em julgamento realizado em 2017, que analisou autuação aplicada pelo fisco ao jogador dois anos antes. ");
  }
  if(n==4){
     TrocaTitulo("Análise: veja como Ramiro pode se encaixar no Corinthians");
    TrocaLegenda("Anunciado como quinto reforço do Corinthians para a temporada, o volante Ramiro é a principal contratação do clube para 2019 até o momento. </p> <p> O jogador de 25 anos foi titular do Grêmio nas últimas temporadas e conquistou quatro títulos pelo Tricolor, sendo a Libertadores de 2017 a principal taça");
  }



}

function TrocaLegenda(txt){

  document.getElementById('legenda').innerHTML = "<p id ='legenda'>"+txt+"</p> ";}

function TrocaTitulo(txt){
  document.getElementById('titulo').innerHTML = "<h2 id='titulo'> "+txt+" </h2>";

}