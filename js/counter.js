'use strict';

//---buttons-------------------------------------------
//home button-----------
var home = function(){
  window.location.href = './index.html';
};
var homeClick = document.getElementById('home');
homeClick.addEventListener('click', home);
//aboutus button----------
var youWin = function(){
  window.location.href = 'aboutus.html';
};
var aboutClick = document.getElementById('aboutUs');
aboutClick.addEventListener('click', youWin);


var getPlayer1 = localStorage.getItem('setP1');
var getPlayer2 = localStorage.getItem('setP2');
var getPlayer3 = localStorage.getItem('setP3');
var getPlayer4 = localStorage.getItem('setP4');
var getPlayerWin1 = localStorage.getItem('setWin1');
var getPlayerWin2 = localStorage.getItem('setWin2');
// var getWinner = localStorage.getItem('winner');


function match1PlayersA(){
  var versus1 = document.getElementById('vs1');
  var addText1 = document.createTextNode(`${getPlayer1} `);
  versus1.appendChild(addText1);
  var versus2 = document.getElementById('vs2');
  var addText2 = document.createTextNode(`${getPlayer2} `);
  versus2.appendChild(addText2);
}
function match1PlayersB(){
  var versus1 = document.getElementById('vs3');
  var addText1 = document.createTextNode(`${getPlayer3} `);
  versus1.appendChild(addText1);
  var versus2 = document.getElementById('vs4');
  var addText2 = document.createTextNode(`${getPlayer4} `);
  versus2.appendChild(addText2);
}
match1PlayersA();
match1PlayersB();

function match2Players(){
  var versus3 = document.getElementById('vs5');
  var addText3 = document.createTextNode(`${getPlayerWin1} player info here`);
  versus3.appendChild(addText3);
  var versus4 = document.getElementById('vs6');
  var addText4 = document.createTextNode(`${getPlayerWin2} player info here`);
  versus4.appendChild(addText4);
}
match2Players();

//working on points----------------------------------

// var getP1Points = localStorage.getItem('setP1Points');
// console.log(getP1Points);

// var lifeLoss1 = document.getElementsByTagName('input').item(0).value;
// var life = function(){
//   parseInt(lifeLoss1);
//   return lifeLoss1;
// };
// life();

// var pointsClick = document.getElementById('points1');
// pointsClick.addEventListener('submit', life);


// localStorage.setItem('setLoss', lifeLoss1);


//-------------------





