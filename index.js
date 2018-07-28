var productURL = 'https://www.finishline.com/store/product/mens-adidas-ultraboost-clima-x-parley-running-shoes/prod2778311?styleId=BB7076&colorId=WTB';
var ckie = "";
getCookie();

function getCookie() {
	var jar = require('request').jar();
	const request = require('request').defaults({
		timeout: 10000,
		jar: jar,
	});
	const Generator = require('./Generator');
	const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36';
	const cheerio = require('cheerio');

	request.get({
			headers: {
				'cache-control': 'max-age=0',
				'upgrade-insecure-requests': 1,
				'user-agent': userAgent,
				'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
				'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
				'connection': 'keep-alive'
			},
			url: 'http://www.finishline.com'
		},
		function (error, response, body) {
			const parsed = JSON.parse(JSON.stringify(jar));
			const cookies = parsed["_jar"]["cookies"];
			for (var i = 0; i < cookies.length; i++) {
				if (cookies[i].key == '_abck') {
					console.log("Found Initial _abck Cookie: " + cookies[i].value);
					ckie = cookies[i].value;
				}
			}
			request({
					url: 'https://www.finishline.com/_bm/_data',
					method: 'POST',
					json: true,
					body: {
						"sensor_data": Generator.generateSensorData('https://www.finishline.com/', ckie)
					},
					headers: {
						'Origin': 'https://www.finishline.com',
						'Referer': 'https://www.finishline.com/',
						'user-agent': userAgent
					}
				},
				function (error, response, body) {
					const parsed = JSON.parse(JSON.stringify(jar));
					const cookies = parsed["_jar"]["cookies"];
					for (var i = 0; i < cookies.length; i++) {
						if (cookies[i].key == '_abck') {
							const _abck = cookies[i].value;
							if (_abck.indexOf('~0~') > -1) {
								console.log("Found Valid _abck Cookie: " + _abck);
								ckie = _abck;
								request.get({
										headers: {
											'user-agent': userAgent
										},
										url: productURL
									},
									function (error, response, body) {
										if (response.statusCode == 200) {
											$ = cheerio.load(body);
											var itemName = $('.row #title[itemprop="name"]').html().trimLeft().trimRight().replace('&apos;', "'");
											console.log("Found Product Page")
											console.log(itemName);
											console.log("Sizes Available: ")
											var sizes = $('#productSizes .column .button:not(.disabled)');
											for (var i = 0; i < sizes.length; i++) {
												var sizeInfo = $('#productSizes .column .button:not(.disabled)')[i]["attribs"];
												console.log("Size: " + sizeInfo["aria-label"] + " SKU:" + sizeInfo["data-sku"])
											}
										}
									}
								);
							} else {
								console.log("Cookie not valid. Trying again in 2 seconds.")
								setTimeout(function () {
									getCookie();
								}, 2000);
							}
						}
					}
				});
		}
	);
}