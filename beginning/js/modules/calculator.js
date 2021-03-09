// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(x,y,op)
{
	switch (op){
		case '+': return x + y;
		case '-': return x - y;
		case '*': return x * y;
		case '/': return x / y;
	}
}
// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

const add = (x, y) => {           
	return calculate(x,y,'+');
}


// SUBTRACT FUNCTION
const  subtract = (x, y) => {           
	return calculate(x,y,'-');
}


// MULTIPLY FUNCTION

const multiply = (x, y) => {           
	return calculate(x,y,'*');
}


// DIVIDE FUNCTION

const divide = (x, y) => {           
	return calculate(x,y,'/');
}


// EXPORT THE FOUR PUBLIC FUNCTIONS

export  {add,subtract,multiply,divide};