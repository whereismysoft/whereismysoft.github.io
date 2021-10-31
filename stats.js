function quantile(arr, q) {
	const sorted = arr.sort((a, b) => a - b);
	const pos = (sorted.length - 1) * q;
	const base = Math.floor(pos);
	const rest = pos - base;

	if (sorted[base + 1] !== undefined) {
		return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
	} else {
		return Math.floor(sorted[base]);
	}
};

// TODO: реализовать
// показать значение метрики за несколько день
function showMetricByPeriod(arr, from, to) {
	return arr
		.filter(item => {
			let isIncludedInDate = true
			const itemDate = item.additional.date.split('/')

			from.split('/').map((num, idx) => {
				if (!num <= itemDate[idx]) {
					isIncludedInDate = false
				}
			})

			to.split('/').map((num, idx) => {
				if (!num >= itemDate[idx]) {
					isIncludedInDate = false
				}
			})
			return isIncludedInDate
		})
}

// показать сессию пользователя
function showSession(sessionId, arr) {
	const results = {

	}
	arr.filter(item => item.counterId == sessionId)
		.map(data => {
			if (results[data.name]) {
				results[data.name].push(data.value)
			} else {
				results[data.name] = [data.value]
			}
			results['platform'] = data.additional.platform
		});

	console.log(`Sessin id ${sessionId}`)
	console.log(results)
}

// сравнить метрику в разных срезах
function compareMetric(quantile1, quantile2) {
}

function addMetricByName(arr, metricName) {
	const hits = {}
	let sampleData = arr
		.filter(item => item.name == metricName)
		.map(item => {
			hits[item.counterId] = true
			return item.value
		});

	const result = {}

	result.hits = Object.keys(hits).length;
	result.p25 = quantile(sampleData, 0.25);
	result.p50 = quantile(sampleData, 0.5);
	result.p75 = quantile(sampleData, 0.75);
	result.p95 = quantile(sampleData, 0.95);

	return result
}

function calcAllMetrics(data, platformName) {
	let processedData = data

	console.log(`All metrics`);

	if (platformName) {
		console.log(`by ${platformName}`);

		processedData = data.filter(({ additional }) => additional.platform === platformName)
	}

	let table = {};
	table.response = addMetricByName(processedData, 'response');
	table.ttfb = addMetricByName(processedData, 'ttfb');
	table.contentResponse = addMetricByName(processedData, 'content-response');
	table.square = addMetricByName(processedData, 'square');
	table.fid = addMetricByName(processedData, 'fid');
	table.tti = addMetricByName(processedData, 'fcp');

	console.table(table);
};


fetch('performance-stats.json')
	.then(res => res.json())
	.then(result => {

		calcAllMetrics(result);
		showSession('c74762be-c930-4ea2-98bd-8a3c4cbba408', result)
	});
