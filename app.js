$(document).ready(function(){
  $('button').on('click', function(){
    randomize();
  });
});

function randomize(){
  var studentArray = ["Kevin Litchfield",
  "Erika Lim",
  "Zubair Desai",
  "Nina Bachvarova",
  "Julien Mayer",
  "Denise Shephard",
  "Oscar Linares",
  "Max Gordon",
  "Dana Mulder",
  "Rory Grant",
  "Tina Hweicheng Loh",
  "Kristian Ziel",
  "Ngan Pham",
  "Brady Stilwell",
  "Michael Dean",
  "Alex Sell",
  "Michael Smykowski",
  "Luis Manzo",
  "Heather Farley",
  "Irina Tagintseva",
  "Lauren Richie",
  "Edozie Izegbu",
  "David Dang",
  "Bradley Johnson",
  "Helen Lam",
  "Cameron Irmas",
  "Victoria Billingsley",
  "Rosa Choi"];
  var source = $('#pairing').html();
  var template = Handlebars.compile(source);
  var newArray = shuffle(studentArray);
  var pairs = []
  $('ul').empty();
  for(var i=0; i< newArray.length; i+=2){
    var pair = {
      firstStudent:newArray[i],
      secondStudent:newArray[i+1]
    }
    pairs.push(pair);
  }
  var context = {pairs: pairs}
  var html = template(context);
  $('ul').append(html);
}

function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random()* currentIndex);
    currentIndex--;

    temporaryValue=array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
