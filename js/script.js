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
  btnToekenning.addEventListener('click' ,Toekenning);
  btnVergelijk.addEventListener('click',Vergelijk);
  btnWiskunde.addEventListener('click',Wiskunde);

}


// Functies
// Toekennigns operatoren

function Toekenning()
{
  let a = 6;
  let b = 10;
  let c = a + b;
  let result ='';
  result = `Bij waarde a = ${a} en waarde b = ${b} wordt de berekening voor c = (a + b ) = ${c}`

  divToekenningResult.innerHTML = result;

  a+=3;
  b*=a;
  result+=`<br /> De nieuwe waarde van a is ${a} en de nieuwe waarde van b is ${b}`;

  divToekenningResult.innerHTML =result;

  var fruit = "appel";
  divToekenningResult.innerHTML += `<br />${typeof(fruit)}`;

  var boolke = true;
  divToekenningResult.innerHTML += `<br />${typeof(boolke)}`;

  var nummer = 7.6;
  divToekenningResult.innerHTML += `<br />${typeof(nummer)}`;
}

//Vergelijkings operatoren

function Vergelijk()
{
  let a = 6;
  let b =10;
  let c = '6';
  let d = 10;

  divVergelijkResult.innerHTML = 
 `a (${a}) == b (${b}) => ${a == b} <br/>
  a (${a}) == c (${c}) => ${a == c} <br/>
  a (${a}) === b (${b}) => ${a === b} <br/>
  b (${b}) === d (${d}) => ${b === d} <br/>
  a (${a}) === c (${c}) => ${a === c} <br/>
  a (${a}) !== c (${b}) => ${a !== b} <br/>
  a (${a}) < b (${b}) => ${a < b} <br/>
  a (${a}) > b (${b}) => ${a > b} <br/> `;
}

//Wiskundige operatoren 

function Wiskunde()
{
  let a =5;
  let b = 10;

  divWiskundeResult.innerHTML =
 `a (${a}) + b (${b}) => ${a + b} <br/>
  a (${a}) - b (${b}) => ${a - b} <br/>
  a (${a}) * b (${b}) => ${a * b} <br/>
  a (${a}) / b (${b}) => ${a / b} <br/>
  a (${a}) % b (${b}) => ${a % b} <br/>
  a (${a}) ++ ==> ${a++} <br/>
  --b (${b}) => ${--b} <br/>`;
}

// Booleaanse operatoren

function BoolVergelijking () 
{
  let a =8;
  let b =10;

  divBoolResult.innerHTML =
  `(a (${a}) < 10) && (b(${b}) > 40) => ${(a < 10)&&(b > 40)} <br/>
   (a (${a}) < 10 || (b(${b}) > 40) => ${(a < 10)&&(b > 40)}
  `;
}




