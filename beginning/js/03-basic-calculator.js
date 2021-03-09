// IMPORT THE MODULE
import * as calculator  from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION


let firstNum;
let operCal;
let SecNum;
let resultCal;
firstNum = parseInt (prompt ('Enter the number'));

do{
operCal  =  prompt ('+, -, *, /');
}while ((operCal !== '+' ) && (operCal !== '-' ) && (operCal !== '*') && (operCal !== '/')) 
 
SecNum =   parseInt(prompt ('Enter the next number'));

switch(operCal) {
  
    case '+' :
      resultCal = calculator.add (firstNum,SecNum);
    
      break;
     
    case  '-' :
      resultCal = calculator.subtract(firstNum,SecNum);
      break;

    case '*' :
      resultCal = calculator.multiply (firstNum,SecNum);
       break; 

    case '/' :
      resultCal = calculator.divide (firstNum,SecNum);
        break; 

     default:
         
    console.log('Sorry, this is not correct value');
      
  }

    console.log(resultCal);