var mme_cnt = 0;
var mme_cnt_lmt = 25;
var me_vel = 0;
var mact = "";
var tact = "";
var mduce_cnt = 0;
var mduce_cnt_lmt = 75;
var kact = "";
var ke_vel = 0;
var ta = 0;
var start_ts = Date["now"] ? Date["now"]() : +new Date;
var sensor_data;
var ver = 1.26;
var loc = "";
var z1 = 0;
var y1 = 2016;
var xagg = -1;
var pen = -1;
var wen = -1;
var den = -1;
var psub = "-";
var lang = "-";
var prod = "-";
var plen = -1;
var tst = -1;
var t_tst = 0;
var mr = "0,0,0,0,0,0,0,0,0,0,0,0,0,200,";
var o9 = 0;;
var d2 = 0;
var d3 = 0;
var cs = "0a46G5m17Vrp4o4c";
var api_public_key = "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq";
var doact = "0,965,-1,-1,-1;";
var dmact = "0,602,-1,-1,-1,-1,-1,-1,-1,-1,-1;";
var pact = "";
var vcact = "";
var me_cnt = 0;
//fpcf stuff
var fpcffpValstr = "-999120978;dis;,7,8,19;true;true;true;-60;true;24;24;true;false;-1";
var fpcfrCFP = Math.floor(Math.random() * (2000000000 - 1181692381 + 1)) + 1181692381;
var fpcfrVal = Math["floor"](1E3 * Math["random"]())["toString"]();;
module.exports = {
	generateSensorData: function (url, abckCookie) {
		t_tst = get_cf_date();
		tst = get_cf_date() - t_tst;
		to();
		fakeMouseMovements();
		// This is the function that generates sensor data
		var start = 0;
		try {
			var te_vel = 0;
			var doe_vel = Math.floor(Math.random() * (120777 - 1020 + 1)) + 1020;
			var dme_vel = Math.floor(Math.random() * (5619 - 597 + 1)) + 597;;

			start = get_cf_date();
			var step1_setup = updatet();
			var artistTrack = "3"; //change this to abck maybe after
			if(abckCookie != '' || abckCookie != null || abckCookie != false)
			{
				artistTrack = abckCookie;
			}
			var n = gd();
			var a = "do_en";
			var b = "dm_en";
			var size1 = "t_en";
			var i = a + "," + b + "," + size1;
			var r = forminfo();
			var d = url;
			var s = "0,0"; // Should recreate the details probably
			var h = "" + ab(fpcffpValstr);
			var g = sed();
			var step0_done = 0 + me_vel + doe_vel + dme_vel + te_vel + 0;
			var step1_setup = updatet();
			d2 = 16352;
			var step2 = pi(d2 / 6);
			var justifyFull = get_cf_date() - start_ts;
			var ta = ta;
			var expectedStates = [ke_vel, me_vel, te_vel, doe_vel, dme_vel, 0, step0_done, step1_setup, 0, start_ts, 7, d2, 0, me_cnt, step2, 0, 0, justifyFull, ta, "0", artistTrack, ab(artistTrack), fpcfrVal, fpcfrCFP.toString(), 30261689];
			var m = expectedStates["join"](",");
			sensor_data = ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + forminfo() + "-1,2,-94,-102," + r + "-1,2,-94,-108," + kact + "-1,2,-94,-110," + mact + "-1,2,-94,-117," + tact + "-1,2,-94,-111," + doact + "-1,2,-94,-109," + dmact + "-1,2,-94,-114," + pact + "-1,2,-94,-103," + vcact + "-1,2,-94,-112," + d + "-1,2,-94,-115," + m + "-1,2,-94,-106," + s;
			sensor_data = sensor_data + "-1,2,-94,-119," + mr + "-1,2,-94,-122," + g; // I'm not sure if the way I set 'mr' works as it should, but I think it should be fine, just not sure
			var w = ab(sensor_data);
			sensor_data = sensor_data + "-1,2,-94,-70," + fpcffpValstr + "-1,2,-94,-80," + h + "-1,2,-94,-116," + o9 + "-1,2,-94,-118," + w + "-1,2,-94,-121,";
		} catch (t) {
			console.log(t)
		}
		try {
			var b = od(cs, api_public_key)["slice"](0, 16);
			var cn = Math["floor"](get_cf_date() / 36E5);
			var k = get_cf_date();
			var $eol = b + od(cn, b) + od(sensor_data, b);
			sensor_data = $eol + ";" + (get_cf_date() - start) + ";" + tst + ";" + (get_cf_date() - k);
			return (sensor_data);
			//present()
		} catch (t) {

		}
	}
}

function fakeMouseMovements() {

	/*  Example
	//simulate Mouse movement
	simulateCMA(200, 200, 1) // state 1 = its movement
	simulateCMA(200, 201, 1) // Moved y axis forward
	simulateCMA(200, 202, 1) // Moved y axis forward again
	simulateCMA(200, 203, 1) // Moved y axis forward again (so it seems legitimate)
	console.log("Mouse Movement Count: " + mme_cnt);
	simulateCMA(200, 202, 3) // Mouse pressed / mousedown
	simulateCMA(200, 202, 4) // Mouse released / mouseup
	simulateCMA(200, 202, 2) // Mouse click / click
	console.log("Mouse Click Count: " + mduce_cnt);
	*/
	var mouseMovementAmount = Math.floor(Math.random() * (mme_cnt_lmt - 2)) + 2; // Amount of times to fake move the mouse between 2 and the max mouse movement var
	var randomXStart = Math.floor(Math.random() * (1900 - 200)) + 200; // random X axis to start from between 200 and 1900
	var randomYStart = Math.floor(Math.random() * (1000 - 200)) + 200; // random Y axis to start from between 200 and 1900
	/* Debug purposes
	console.log("Moving mouse: " + mouseMovementAmount + " times");
	console.log("Starting X coordinate: " + randomXStart);
	console.log("Starting Y coordinate: " + randomYStart);
	*/
	var moveXorY = Math.round(Math.random());
	for (var i = 0; i < mouseMovementAmount; i++) {
		if (moveXorY == 1) {
			randomXStart++;
			simulateCMA(randomXStart, randomYStart, 1)
		} else {
			randomYStart++;
			simulateCMA(randomXStart, randomYStart, 1)
		}
	}
	/* Debug purposes
	console.log("Ending X coordinate: " + randomXStart);
	console.log("Ending Y coordinate: " + randomYStart);	
	*/
	simulateCMA(randomXStart, randomYStart, 3) // Mouse pressed / mousedown
	simulateCMA(randomXStart, randomYStart, 4) // Mouse released / mouseup
	simulateCMA(randomXStart, randomYStart, 2) // Mouse click / click
}

function simulateCMA(xCoord, yCoord, _state) {
	// Events in order. _state 1 should happen more than once
	// _state 1 = mouse movement
	// _state 3 = mouse pressed on element
	// _state 4 = mouse released(after mouse)
	// _state 2 = mouse click

	// If mouse moved && mouse movement count is less than the mouse movement count limit (25 movements)
	// OR if state isn't 1 and mduce_cnt is less than hte mduce_cnt limit which is 75
	if (1 == _state && mme_cnt < mme_cnt_lmt || 1 != _state && mduce_cnt < mduce_cnt_lmt) {
		var hide = -1;
		var i = -1;
		// if props variable exists (not needed in our simulated one) and propsx exist and propsy exist (they should always)
		// props["pageX"] will be replaced with a random x coordinate
		// props["pageY"] will be replaecd with a random y coordinate
		hide = Math["floor"](xCoord);
		i = Math["floor"](yCoord);
		var value = -1; // Was var value = props["toElement"];
		var str = value; // Was var str = gf(value);
		// str returns undefined for some reason, so I assume we dont need above lines from var value = x etc
		var index = get_cf_date() - start_ts;
		var d = me_cnt + "," + _state + "," + index + "," + hide + "," + i;
		if (1 != _state) {
			d = d + "," + str;
			//h = 0 if mouse moved
			//h = 1 if mouse clicked
			var h = 0;
			if (_state == 1) {
				h = 0;
			} else {
				h = 1;
			}
			if (null != h && 1 != h) {
				d = d + "," + h;
			}
		}
		d = d + ";";
		me_vel = me_vel + me_cnt + _state + index + hide + i;
		mact = mact + d;
		ta += index;
	}
	if (1 == _state) {
		mme_cnt++;
	} else {
		mduce_cnt++;
	}
	me_cnt++;
}

function get_cf_date() {
	return Date["now"] ? Date["now"]() : +new Date;
}

function updatet() {
	return get_cf_date() - start_ts;
}

function uar() {
	return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36";
}

function to() {
	var selectScrollHeight = x2() % 1E7;
	d3 = selectScrollHeight;
	var schema = selectScrollHeight;
	var realSizeValue = 0;
	for (; realSizeValue < 5; realSizeValue++) {
		var n = pi(selectScrollHeight / Math["pow"](10, realSizeValue)) % 10;
		var count = n + 1;
		var source = "return a" + cc(n) + count + ";";
		schema = (new Function("a", source))(schema);
	}
	o9 = schema;
}

function bmisc() {
	pen = 0;
	wen = 0;
	den = 0;
}

function gd() {
	var artistTrack = uar();
	var e = "" + ab(artistTrack);
	var c = start_ts / 2;
	var n = 1920;
	var a = 1040;
	var o = 1920;
	var f = 1080;
	var i = 1920;
	var r = 658;
	var d = 1920;
	zl = pi(start_ts / (y1 * y1));
	var lastNewline = Math["random"]();
	var I = pi(1E3 * lastNewline / 2)
	var l = lastNewline + "";
	return l = l["slice"](0, 11) + I, get_browser(), bc(), bmisc(), artistTrack + ",uaend," + xagg + "," + psub + "," + lang + "," + prod + "," + plen + "," + pen + "," + wen + "," + den + "," + z1 + "," + d3 + "," + n + "," + a + "," + o + "," + f + "," + i + "," + r + "," + d + "," + bd() + "," + e + "," + l +
		"," + c + ",loc:" + loc; // Look at d3
}

function pi(name) {
	return parseInt(name);
}

function get_browser() {
	psub = "20030107";
	lang = "en-GB";
	prod = "Gecko";
	plen = 2; // Plugin length
}

function ab(b) {
	if (b == null) {
		return -1;
	}
	try {
		var b = 0;
		var a = 0;
		for (var a = 0; a < b["length"]; a++) {
			var d = b["charCodeAt"](a);
			if (d < 128) {
				b = b + d;
			}
		}
		return b;
	} catch (t) {
		return -2;
	}
}

function bc() {
	var a = 1;
	var b = 1;
	var c = 0;
	var n = 0;
	var t = 1;
	var o = 1;
	var f = 1;
	var i = 0;
	var r = 1;
	var d = 1;
	var s = 1;
	var u = 1;
	var l = 0;
	var _ = 1;
	xagg = a + (b << 1) + (c << 2) + (n << 3) + (t << 4) + (o << 5) + (f << 6) + (i << 7) + (r << 8) + (d << 9) + (s << 10) + (u << 11) + (l << 12) + (_ << 13);;
}

function bd() {
	var EnvJasmine = [];
	var DOMContentLoaded = 0;
	EnvJasmine["push"](",cpen:" + DOMContentLoaded);
	var code = 0;
	EnvJasmine["push"]("i1:" + code);
	var _V5 = 0;
	EnvJasmine["push"]("dm:" + _V5);
	var PL$23 = 1;
	EnvJasmine["push"]("cwen:" + PL$23);
	var PL$20 = 1;
	EnvJasmine["push"]("non:" + PL$20);
	var PL$15 = 0;
	EnvJasmine["push"]("opc:" + PL$15);
	var status = 0;
	EnvJasmine["push"]("fc:" + status);
	var passed = 0;
	EnvJasmine["push"]("sc:" + passed);
	var failed = 1;
	EnvJasmine["push"]("wrc:" + failed);
	var s = 0;
	EnvJasmine["push"]("isc:" + s);
	d2 = pi(z1 / 23); // come back
	var u = 1;
	EnvJasmine["push"]("vib:" + u);
	var l = 1;
	EnvJasmine["push"]("bat:" + l);
	var _ = 0;
	EnvJasmine["push"]("x11:" + _);
	var v = 1;
	return EnvJasmine["push"]("x12:" + v), EnvJasmine["join"](",");
}

function sed() {
	var t = "0";
	var e = "0";
	var c = "0"
	var n = "0";
	var a = "1";
	var o = "0";
	var f;
	return f = "0", [t, e, c, n, a, o, f]["join"](",")
}

function x2() {
	/* This code encodes the function get_cf_date() so we will just return, unencoded
	var pad = ff;
	var s = pad(103) + pad(101) + pad(116);
	s = s + pad(95) + pad(99) + pad(102) + pad(95);
	s = "return " + s + pad(100) + pad(97) + pad(116) + pad(101) + pad(40) + pad(41)
	s = s + ";"
	return (new Function(s))();*/
	return get_cf_date();
}

function ff(date) {
	return String["fromCharCode"](date);
}

function cc(options) {
	var crop_growth = options % 4;
	if (2 == crop_growth) {
		crop_growth = 3;
	}
	var next_grow = 42 + crop_growth;
	return String["fromCharCode"](next_grow);
}

function forminfo() {
	return "0,0,0,0,630,630,0;0,0,0,0,2392,1230,0;1,0,0,0,2573,883,0;0,-1,0,0,2588,520,0;0,-1,0,0,2559,309,0;";
	// Should look at forminfo() on deobfuscated script, just have some confusions 
	// Preset form info for nike (not sure if this actually matters later on)
}

function od(b, c) {
	try {
		b = String(b);
		c = String(c);
		var zarr = [];
		var y = c["length"];
		if (y > 0) {
			var a = 0;
			for (; a < b["length"]; a++) {
				var t = b["charCodeAt"](a);
				var p1 = b["charAt"](a);
				var max_h_S = c["charCodeAt"](a % y);
				t = rir(t, 47, 57, max_h_S);
				if (t != b["charCodeAt"](a)) {
					p1 = String["fromCharCode"](t);
				}
				zarr["push"](p1);
			}
			if (zarr["length"] > 0) {
				return zarr["join"]("");
			}
		}
	} catch (t) {}
	return b;
}

function rir(i, l, x, bits) {
	return i > l && i <= x && (i = i + bits % (x - l)) > x && (i = i - x + l), i;
}