'use strict';

$(document).ready(init);
var winningMatrix = ['012', '345', '678', '036', '147', '258', '048', '246',
                     '021', '354', '687', '063', '174', '285', '084', '264',
                     '102', '435', '768', '306', '417', '528', '408', '426',
                     '120', '453', '786', '360', '471', '582', '480', '462',
                     '210', '543', '876', '630', '741', '852', '840', '642',
                     '201', '534', '867', '603', '714', '825', '804', '624'];
var turnNumber = 0;
var isReset = false;
var isStarted = false;
var currentPlayer;

function init(){
  $('#reset').click(reset);
  $('#start').click(start);
  $('td').click(selecting);
}

function selecting(){
  if (isReset){   //Check if the board was reset.  If not, nothing is done.
    if (isStarted){
      var color = $('.active').css('background-color');
      currentPlayer = $('.active').attr('id');
      $(this).css('background-color', color);
      turnNumber += 1;
      if (checkWinComboExists(winningMatrix, color)) {
        // console.log('Thhhhhhhhhhis: ', $('.active').attr('id'));
        setWinner(currentPlayer);
      }else{
        if (checkForTie()){
          setTie();
          reset();}
        else {$('.player').toggleClass('active');}
      }
    }
  }
}

function reset(){
  $('#chooser').show();
  $('#players').hide();
  $('#game-verdict').hide();
  $('td').css('background-color', '#ffffff');
  turnNumber = 0;
  isReset = true;
  isStarted = false;
}

function start(){
  if (isReset && !isStarted){   //make sure the table is reset, otherwise nothing is done
    $('#players').show();
    var p1 = $('#p1-choose').val();
    var p2 = $('#p2-choose').val();
    $('#p1').css('background-color', p1);
    $('#p2').css('background-color', p2);
    $('#chooser').hide();

    var rnd = Math.floor(Math.random() * 2) + 1;
    $('.player').removeClass('active');
    $('#p' + rnd).addClass('active');
    turnNumber = 0;
    isStarted = true;
  }
}

function setWinner(str){
  var clickedIndex = ($(this).index());
  $('#p1').hasClass('active') ? p1-status + clickedIndex : p2-status + clickedIndex;
  $('#game-verdict').show();
  $('#game-verdict').text(str + ' is the Winner!!');
}

function setTie(){
  $('#game-verdict').text('The game is tied!!');
  reset();
}

function checkOneWinCombo(winStr, color){
  var strArr = winStr.split('');
  var firstColor = $($('tbody > tr > td')[strArr[0]*1]).css('background-color');
  var secondColor = $($('tbody > tr > td')[strArr[1]*1]).css('background-color');
  var thirdColor = $($('tbody > tr > td')[strArr[2]*1]).css('background-color');
  if ((firstColor === color) && (secondColor === color) && (thirdColor === color)){
    return true;
  }
  else {return false;}
}

function checkWinComboExists(winArr, color){
  return winArr.map(function(value){
    return checkOneWinCombo(value, color);}).reduce(function(prev, current){
    return prev || current;
  });
}

function checkForTie(){
  if (turnNumber === 9){
    setTie();
    return true;
  }
  else {return false;}
}
