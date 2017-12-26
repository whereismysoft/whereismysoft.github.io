var a = getInteger('firstInt');
var b = getInteger('secondInt');

var firstArg = document.getElementById('firstArg');
var secondArg = document.getElementById('secondArg');

firstArg.innerHTML = a;
secondArg.innerHTML = b;

var inputCount = 0

// создать число а в пределах (6, 9) и a+b в пределах (11, 14)
function getInteger( arg ) {
	var num = parseInt(Math.random() * 10);
	if (arg == 'firstInt') {
		if (num < 6) {
			num = 6
		}
	} else {
		if (num + a < 11) {
			 num = 11 - a;
		} else if (num + a > 14) {
			num = 14 - a;
		}
	}
	return num;
}

// создать стрелку
var arrowDiv = document.getElementById('arrowDiv');

function createArrow(num, endPoint) {

	var canvasDiv = document.createElement('div');
	canvasDiv.className = 'arrowDiv__element';
	arrowDiv.appendChild(canvasDiv);

	var inputDiv = document.createElement('div');
	inputDiv.className = 'inputDiv'
	canvasDiv.appendChild(inputDiv)

	var input = document.createElement('input');
	input.type = 'number';
	input.id='number';
	inputDiv.appendChild(input);

	input.onchange = function() { 
		
		firstArg.style['background-color'] = 'initial';
		secondArg.style['background-color'] = 'initial';
		number.style.color = '#545454';

		if (this.value == endPoint) {
			inputCount++;
			var value = input.value
			inputDiv.innerHTML = value;
			if (inputCount == 1) {
				createArrow(1, b);
			}

			if (inputCount == 2) {
				document.getElementById('question').innerHTML = '<input onchange="getResult()" id="result">'
			}	
		}

		if (this.value != endPoint) {
			switch (inputCount) {
				case 0:
					firstArg.style['background-color'] = 'yellow';
					number.style.color = 'red';
					break
				case 1:
					secondArg.style['background-color'] = 'yellow';
					number.style.color = 'red';
					break;
			}
		}
	}
	

	var canvasElement = document.createElement('canvas');
	canvasDiv.appendChild(canvasElement);

	var canvas = document.querySelectorAll('canvas')[num];
	canvas.width = endPoint * 24.5;
	var ctx = canvas.getContext('2d');

	var contextX = 0;
	var endPointX = endPoint * 24.5;
	var contextY = 120;
	var endPointY = 120;
	var controlPointX = (endPointX - contextX)/2;
	var controlPointY = -50;

	ctx.save();

	ctx.strokeStyle = '#d68bb1';
	ctx.lineWidth = 3;
	arrowWidth = 7;

  	var arrowAngle = Math.atan2(controlPointX - endPointX, controlPointY - endPointY) + Math.PI;
// нарисовать параболу
  	ctx.beginPath();
  	ctx.moveTo(contextX, contextY);

  	ctx.quadraticCurveTo(controlPointX, controlPointY, endPointX, endPointY);
// нарисовать стрелки
  	ctx.moveTo(endPointX - (arrowWidth * Math.sin(arrowAngle - Math.PI / 6)), 
             endPointY - (arrowWidth * Math.cos(arrowAngle - Math.PI / 6)));

  	ctx.lineTo(endPointX, endPointY);

  	ctx.lineTo(endPointX - (arrowWidth * Math.sin(arrowAngle + Math.PI / 6)), 
             endPointY - (arrowWidth * Math.cos(arrowAngle + Math.PI / 6)));

  	ctx.stroke();
  	ctx.closePath();

  	ctx.restore();
}

createArrow(0, a);

function getResult() {
	result.style.color = '#545454';
	if (result.value == (a+b)){
		var value = result.value;
			question.innerHTML = value;
			result.style.color = '#545454';
			inputCount++
	}

	if (result.value != (a+b)) {
			result.style.color = 'red';
		}
}