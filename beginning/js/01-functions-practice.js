
//STEP 1

function halfNumber(inNum) {
 let resultNum = inNum / 2 ;
 console.log('Half of ' + inNum +  ' is ' + resultNum );
 return resultNum;
}
halfNumber(5);
 
//STEP 2

function squareNumber( putNum) {
    let resultSqu = putNum * putNum;
    console.log ('The result of squaring  the number ' +  putNum + ' is ' + resultSqu );
    return  resultSqu;
    
}
squareNumber(3);

//STEP 3

function percentOf( basenum , pctnum) {
        let resultPercent = ( basenum * pctnum) / 100;
        console.log(resultPercent + ' is ' + pctnum + '% of ' + basenum );
        return  resultPercent; 
}

percentOf(4 , 2 );

//STEP 4
function findModulus( num1, num2) {
    let numModulus = (num1 % num2);
    console.log(numModulus + ' is the modulus of ' + num1 + ' and ' + num2 );
}
findModulus( 4 , 10 );


//STEP 5
 let collectNum;
 let collectVal;
 collectNum = prompt('enter the number')
function sum() {
    var sumNum = 0;
    for (var i= 0; i < arguments.length; i++) {
        sumNum += parseInt(arguments[i]);
    }
    return sumNum;
}
collectVal = sum(...collectNum.split(","));
console.log(sum(collectVal));
