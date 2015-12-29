// Site with other API calls -> http://www.census.gov/data/developers/data-sets/population-estimates-and-projections.html
// Descriptions of the variables -> https://api.census.gov/data/2013/pep/subcty/variables.html

var APIKey = "8dc0417f8fc868ab67c9d9a47034f97789f6bcc9",
	theUrl = "https://api.census.gov/data/2013/pep/stchar5?get=AGE,SEX,DATE,STNAME,RACE5,HISP,POP&for=state:*&key=" + APIKey,
	//https://api.census.gov/data/2013/pep/stchar5?get=AGE,SEX,DATE,STNAME,RACE5,HISP,POP&for=state:*&key=" + APIKey,
	request = $.getJSON(theUrl);

request.done(function(populationData){
	var headers = populationData[0],
		body = populationData.slice(1),
		obj = [];

	body.forEach(function(d) {
		obj.push({
			age: 		+d[0], // age 0 to 100
			sex: 		+d[1],
			date:       +d[2],
			state: 		d[3],
			race: 		+d[4],
			hispanic: 	+d[5],
			population: parseInt(d[6])
		});
	});

	// Set proper sex
	obj.forEach(function(d) {
		switch(d.sex) {
			case 1: d.sex =  "Male";
			break;
			case 2: d.sex =  "Female";
			break;
			default: d.sex = "Both sexes";
			break;
		}
	});

	// Set proper date values
	obj.forEach(function(d) {
		switch(d.date) {
			case 1: d.date = "4/1/2010";
			break;
			case 2: d.date = "4/1/2010";
			break;
			case 3: d.date = "5/1/2010";
			break;
			case 4: d.date = "6/1/2010";
			break;
			case 5: d.date = "7/1/2010";
			break;
			case 6: d.date = "8/1/2010";
			break;
			case 7: d.date = "9/1/2010";
			break;
			case 8: d.date = "10/1/2010";
			break;
			case 9: d.date = "11/1/2010";
			break;
			case 10: d.date = "12/1/2010";
			break;
			case 11: d.date = "1/1/2011";
			break;
			case 12: d.date = "2/1/2011";
			break;
			case 13: d.date = "3/1/2011";
			break;
			case 14: d.date = "4/1/2011";
			break;
			case 15: d.date = "5/1/2011";
			break;
			case 16: d.date = "6/1/2011";
			break;
			case 17: d.date = "7/1/2011";
			break;
			case 18: d.date = "8/1/2011";
			break;
			case 19: d.date = "9/1/2011";
			break;
			case 20: d.date = "10/1/2011";
			break;
			case 21: d.date = "11/1/2011";
			break;
			case 22: d.date = "12/1/2011";
			break;
			case 23: d.date = "1/1/2012";
			break;
			case 24: d.date = "2/1/2012";
			break;
			case 25: d.date = "3/1/2012";
			break;
			case 26: d.date = "4/1/2012";
			break;
			case 27: d.date = "5/1/2012";
			break;
			case 28: d.date = "6/1/2012";
			break;
			case 29: d.date = "7/1/2012";
			break;
			case 30: d.date = "8/1/2012";
			break;
			case 31: d.date = "9/1/2012";
			break;
			case 32: d.date = "10/1/2012";
			break;
			case 33: d.date = "11/1/2012";
			break;
			case 34: d.date = "12/1/2012";
			break;
			case 35: d.date = "1/1/2013";
			break;
			case 36: d.date = "2/1/2013";
			break;
			case 37: d.date = "3/1/2013";
			break;
			case 38: d.date = "4/1/2013";
			break;
			case 39: d.date = "5/1/2013";
			break;
			case 40: d.date = "6/1/2013";
			break;
			case 41: d.date = "7/1/2013";
			break;
			case 42: d.date = "8/1/2013";
			break;
			case 43: d.date = "9/1/2013";
			break;
			case 44: d.date = "10/1/2013";
			break;
			case 45: d.date = "11/1/2013";
			break;
			case 46: d.date = "12/1/2013";
			break;
			case 47: d.date = "1/1/2014";
			break;
			case 48: d.date = "2/1/2014";
			break;
			case 49: d.date = "3/1/2014";
			break;
			case 50: d.date = "4/1/2014";
			break;
			case 51: d.date = "5/1/2014";
			break;
			case 52: d.date = "6/1/2014";
			break;
			case 53: d.date = "7/1/2014";
			break;
			case 54: d.date = "8/1/2014";
			break;
			case 55: d.date = "9/1/2014";
			break;
			case 56: d.date = "10/1/2014";
			break;
			case 57: d.date = "11/1/2014";
			break;
			case 58: d.date = "12/1/2014";
			break;
			case 59: d.date = "1/1/2015";
			break;
			case 60: d.date = "2/1/2015";
			break;
			case 61: d.date = "3/1/2015";
			break;
			case 62: d.date = "4/1/2015";
			break;
			case 63: d.date = "5/1/2015";
			break;
			case 64: d.date = "6/1/2015";
			break;
			case 65: d.date = "7/1/2015";
			break;
			case 66: d.date = "8/1/2015";
			break;
			case 67: d.date = "9/1/2015";
			break;
			case 68: d.date = "10/1/2015";
			break;
			case 69: d.date = "11/1/2015";
			break;
			case 70: d.date = "12/1/2015";
			break;
			case 71: d.date = "1/1/2016";
			break;
			case 72: d.date = "2/1/2016";
			break;
			case 73: d.date = "3/1/2016";
			break;
			case 74: d.date = "4/1/2016";
			break;
			case 75: d.date = "5/1/2016";
			break;
			case 76: d.date = "6/1/2016";
			break;
			case 77: d.date = "7/1/2016";
			break;
			case 78: d.date = "8/1/2016";
			break;
			case 79: d.date = "9/1/2016";
			break;
			case 80: d.date = "10/1/2016";
			break;
			case 81: d.date = "11/1/2016";
			break;
			case 82: d.date = "12/1/2016";
			break;
			default: d.date = "1/1/1900";
			break;
		}
	});

	// Set proper race
	obj.forEach(function(d) {
		switch(d.race) {
			case 1: d.race =  "White";
			break;
			case 2: d.race =  "Black";
			break;
			case 3: d.race = "American Indian and Alaskan Native";
			break;
			case 5: d.race = "Asian";
			break;
			default: d.race = "Two or more races";
			break;
		}
	});

 	// Set proper hispanic origin
	obj.forEach(function(d) {
		switch(d.hispanic) {
			case 1: d.hispanic =  "Non-Hispanic";
			break;
			case 2: d.hispanic =  "Hispanic";
			break;
			default: d.hispanic = "Both Hispanic origins";
			break;
		}
	});

	var augStatePop = obj.filter(function(d) {
		return "8/1/2010" === d.date;
	});

	var augPopByState = d3.nest()
		.key(function(d) { return d.state; })
		// why does .rollup(function(v) { return v.population; }); return undefined?
		.rollup(function(v) { return d3.sum(v, function(d) { return d.population; }); })
		.map(augStatePop);

	console.log(augPopByState);

});