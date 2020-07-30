"use strict";

window.addEventListener('load', Initieer);

// Globale Variabelen
var divToekenningResult;
var divVergelijkResult;
var divWiskundeResult;
var divBoolResult;
var divIfResult;
var divSwitchResult;
var divWhileResult;
var divDoWhileResult;
var divForResult;
var divForInResult;
var divBreakResult;
var divContinueResult;

var txtSwitchInput;
var txtWhileInput;
var txtDoWhileInput;
var txtForInput;






function Initieer(){
  // Lokale variabelen
  let btnToekenning;
  let btnVergelijk;
  let btnWiskunde;
  let btnBool;
  let btnIf;
  let btnSwitch;
  let btnWhile;
  let btnDoWhile;
  let btnFor;
  let btnForIn;
  let btnBreak;
  let btnContinue;


  // DOM objecten ophalen
  divToekenningResult = document.querySelector('#divToekenningResult');
  divVergelijkResult = document.querySelector('#divVergelijkResult')
  divWiskundeResult = document.querySelector('#divWiskundeResult');
  divBoolResult = document.querySelector('#divBoolResult');
  divIfResult = document.querySelector('#divIfResult');
  divSwitchResult = document.querySelector('#divSwitchResult');
  divWhileResult = document.querySelector('#divWhileResult');
  divDoWhileResult = document.querySelector('#divDoWhileResult');
  divForResult = document.querySelector('#divForResult');
  divForInResult = document.querySelector('#divForInResult');
  divBreakResult = document.querySelector('#divBreakResult');
  divContinueResult = document.querySelector('#divContinueResult');

  btnToekenning = document.querySelector('#btnToekenning');
  btnVergelijk = document.querySelector('#btnVergelijk');
  btnWiskunde = document.querySelector('#btnWiskunde');
  btnBool = document.querySelector('#btnBool');
  btnIf = document.querySelector('#btnIf');
  btnSwitch = document.querySelector('#btnSwitch');
  btnWhile = document.querySelector('#btnWhile');
  btnDoWhile = document.querySelector('#btnDoWhile');
  btnFor = document.querySelector('#btnFor');
  btnForIn = document.querySelector('#btnForIn');
  btnBreak = document.querySelector('#btnBreak');
  btnContinue = document.querySelector('#btnContinue');

  txtSwitchInput = document.querySelector('#txtSwitchInput');
  txtWhileInput = document.querySelector('#txtWhileInput');
  txtDoWhileInput = document.querySelector('#txtDoWhileInput');
  txtForInput = document.querySelector('#txtForInput');
  // Eventlisteners voorzien


}


// Functies

function Toekenning()
{
  let a = 6;
  let b = 10;
  let c = a + b;
  let result ='';
  result = `Bij waarde a =${a} en waarde b = ${b} wordt de berekening voor c = (a + b ) = ${c}`

  divToekenningResult.innerHTML = result;
}



