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
  btnBool.addEventListener('click',BoolVergelijking);
  btnIf.addEventListener('click',IfUitvoer);
  btnSwitch.addEventListener('click',SwitchUitvoer);
  btnWhile.addEventListener('click',WhileUitvoer);
  btnDoWhile.addEventListener('click',DoWhileUitvoer);
  btnFor.addEventListener('click',ForUitvoer);
  btnForIn.addEventListener('click',ForInUitvoer);
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
   (a (${a}) < 10 || (b(${b}) > 40) => ${(a < 10)||(b > 40)}
  `;
}


// IF Structuur

function IfUitvoer()
{
  let naamCursur = "Web Fronted Advanced";
  let aantaalStudenten = 21;
  let lectorGevonden = false;
  let prijs = 12.5;
  let resultString = '';
  let maxStudentPerGroup = 40;

  // if gevolgd door meerdere statements
  if(prijs < 15) resultString =`De cursus met prijs & euro; ${prijs} is niet zo duur.`;

  // if met een els-tak
  if((aantaalStudenten <=25)&&(prijs<15))
  {
    resultString +=`<br/> Een te kleine klas met ${aantaalStudenten} studenten, we moeten wat meer reclame maken !`;
  }

  // if met een els-tak

  if((lectorGevonden) &&(aantaalStudenten < 0))
  {
    resultString=`<br/> Nog geen studenten ingeschreven, geen paniek !`;
  }
  else
  {
    resultString+=`<br/>Let op : Er is nog geen lector voor het vak`;
  }

  //Verkorte notatie van een if-statement
  
  (aantaalStudenten < maxStudentPerGroup) ? divIfResult.innerHTML = 
  resultString+=`<br/> Er zijn nog ${maxStudentPerGroup - aantaalStudenten} plaatsen over` : 
  resultString +=`<br/> Er zijn geen plaatsen over`;

}

// Switch

function SwitchUitvoer()
{
  let naam = txtSwitchInput.value;
  let ingaveCorrect = false;
  let resultString = '';

  switch(naam)
  {
    case 'Jan':
      ingaveCorrect = true;
      break;
    case 'Piet':
      ingaveCorrect = true;
      break;
    case 'Tjores':
      ingaveCorrect = true;
      break;
    case 'Corneel':
      ingaveCorrect = true;
      break;
    default:
      ingaveCorrect = false;
      break;
  }
ingaveCorrect ? resultString = ' is een scheepvaarder' : resultString = 'is geen scheepvarder';

resultString =`${naam}` + resultString;
divSwitchResult.innerHTML = resultString;
txtSwitchInput.value = "";

}


// While

function WhileUitvoer() 
{
  let huidigWaarde = 1;
  let maximumWaarde = parseInt(txtWhileInput.value);
  let resultString = '';
  
  while (huidigWaarde <= maximumWaarde)
  {
    resultString +=`De huidigwaarde is nu ${huidigWaarde} <br/>`;
    huidigWaarde++;
  }
  divWhileResult.innerHTML = resultString;
  txtWhileInput.value = "";

}

// Do While

function DoWhileUitvoer() 
{
  let huidigWaarde = parseInt(txtDoWhileInput.value);
  let maximumWaarde = 10;
  let resultString = '';

  do{
    resultString +=`De waarde is nu ${huidigWaarde}<br/>`;
    huidigWaarde++;
  }
  while(huidigWaarde <= maximumWaarde)
  divDoWhileResult.innerHTML = resultString;
  txtDoWhileInput.value = "";
}

// For

function ForUitvoer()
{
  let huidigWaarde = parseInt(txtForInput.value);
  let minWaarde = 3;
  let resultString ='';

  for(let i =huidigWaarde;i >= minWaarde; i--)
  {
    resultString +=`De luswaarde is nu ${i}<br/>`;
  }
  divForResult.innerHTML = resultString;
  txtDoWhileInput.value = "";
}

// For in

function ForInUitvoer()
{
  let persoon = {"VoorNaam" : "Piet", "FamilieNaam" : "Pienter", "Leeftijd" : 35, "IsFictief" : true};
  let resultString = '';
  
  for(let ident in persoon)
  {
    resultString +=`${ident.toString()} => ${persoon[ident]} <br/>`;
  }
  divForInResult.innerHTML = resultString;
}



