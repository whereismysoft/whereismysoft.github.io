document.addEventListener("DOMContentLoaded", getFullWeight());

function getFullWeight() {
	document.getElementById('initialWeight').innerHTML = 'Начальный вес арбуза: ' + weightRange.value + ' кг';
	document.getElementById('waterPercent').innerHTML = 'Процент воды после усыхания: ' + waterRange.value + ' %';

	var initialWeight = parseInt(document.getElementById('weightRange').value);
	var initialWaterPercentage = 99;
	var waterPercentage = parseInt(document.getElementById('waterRange').value);

	var dryWeight = initialWeight - ((initialWeight/100)*initialWaterPercentage);
	var onePercentOfWeight = dryWeight/(100 - waterPercentage);
	var newWeight = dryWeight + (onePercentOfWeight*waterPercentage)

	document.getElementById('weight').innerHTML = 'Вес после усыхания: ' + Math.round(newWeight * 100)/100 + ' кг';
	watermelon.style.width = + 100 + (Math.round(newWeight * 100)/100) * 1.7 + 'px'; 
};
