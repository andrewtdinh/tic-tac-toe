'use strict';

$(document).ready(init);
var winningMatrix = ['012', '345', '678', '036', '147', '258', '048', '246'
                     '021', '354', '687', '063', '174', '285', '084', '264'
                     '102', '435', '768', '306', '417', '528', '408', '426'
                     '120', '453', '786', '360', '471', '582', '480', '462'
                     '210', '543', '876', '630', '741', '852', '840', '642'
                     '201', '534', '867', '603', '714', '825', '804', '624'];
var p1-status = '';
var p2-status = '';
var p1-3somes = [];
var p2-3somes = [];

function init(){
  $('#reset').click(reset);
  $('#start').click(start);
  $('td').click(selecting);
}

function selecting(){
  var color = $('.active').css('background-color');
  $(this).css('background-color', color);
  checkIfWin();
  $('.player').toggleClass('active');

}


function reset(){
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', '#ffffff');
}

function start(){
  $('#players').show();
  var p1 = $('#p1-choose').val();
  var p2 = $('#p2-choose').val();
  $('#p1').css('background-color', p1);
  $('#p2').css('background-color', p2);
  $('#chooser').hide();

  var rnd = Math.floor(Math.random() * 2) + 1;
  $('.player').removeClass('active');
  $('#p' + rnd).addClass('active');
}

function isWinner(){

}

function checkIfWin(){
  var clickedIndex = ($(this).index());
  $('#p1').hasClass('active') ? p1-status + clickedIndex : p2-status + clickedIndex;
  if (p1-status ===

function generateThreesomes(str){
  str.split('').forEach() {

  }
}
