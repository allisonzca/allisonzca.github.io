var art = "art";
var code = "code";
var design = "design";
var games = "games";

var colorKey = [{cat: art, color: "ce94b7"},
	{cat: code, color: "e47258"},
	{cat: design, color: "8cc1e6"},
	{cat: games, color: "bbd8a8"}];

var categories = [art, code, design, games];


var apArt = [{label: "1"}, 
	{label: "2"},
	{label: "3"},
	{label: "4"},
	{label: "5"},
	{label: "6"},
	{label: "7"},
	{label: "8"},
	{label: "9"},
	{label: "10"},
	{label: "11"},
	{label: "12"}];


var ayitl = [{label: "1"}, 
	{label: "2"}, 
	{label: "3"},
	{label: "4"},
	{label: "5"},
	{label: "6"}];

var neuCard2020 = [{label: "1"}, 
	{label: "2"},
	{label: "3"}];

var party41 = [{label: "1"}, 
	{label: "2"}];

var pinned = [{label: "1"}, 
	{label: "2"},
	{label: "3"}];

var poetryBook = [{label: "1"}, 
	{label: "2"},
	{label: "3"},
	{label: "4"},
	{label: "5"},
	{label: "6"},
	{label: "7"},
	{label: "8"}];

var switchin = [{label: "1"}, 
	{label: "2"},
	{label: "3"},
	{label: "4"}];

var reflection = [];

var crunch = [{label: "1"}, 
	{label: "2"},
	{label: "3"},
	{label: "4"},
	{label: "5"},
	{label: "6"},
	{label: "7"},
	{label: "8"}];


var dressUp = [];

var eduo = ["1", "2"];


var thisSite = [{label: "1"}, 
	{label: "2"},
	{label: "3"}];

/*

var projects = [{name: "Ap Art Concentration", category: art, month: 5, year: 2019, desc: "The concentration section of my Ap Art portfolio.", gallery: apArt, folder: "apArt", thumb:"12.jpg"}, 
				{name: "A Year In the Life", category: games, month: 2, year: 2021, desc: "A Twine game created as a final project for a Games and Society class.", gallery: ayitl, folder: "ayitl", thumb: ""},
				{name: "Northeastern University Holiday Card", category: art, month: 10, year: 2020, desc: "Entry for Northeastern University's 2020 Holiday Card Contest. 3rd Place winner.", gallery: neuCard2020, folder: "neuHolidayCard2020", thumb:""}, 
				{name: "Party for 1", category: art, month: 1, year: 2020, desc: "Submitted to Spectrum Literary Arts Magazine.", gallery: party41, folder: "party41", thumb:""},
				{name: "Pinned", category: art, month: 1, year: 2021, desc: "", gallery: pinned, folder: "pinned", thumb:""},
				{name: "Poetry Book Illustrations", category: art, month: 2, year: 2019, desc: "amet", gallery: poetryBook, folder: "poetryBook", thumb:""},
				{name: "Switchin'", category: games, month: 1, year: 2020, desc: "A prototype of a 2d platformer created as a final project for Foundations of Games.", gallery: switchin, folder: "switchin", thumb:"0.jpg"},
				{name: "Crunch", category: design, month: 1, year: 2020, desc: "A prototype of an online calendar with a focus on displaying deadlines and customizing its appearance. Created as a semester-long project for Interaction Design I.", gallery: crunch, folder: "crunch", thumb: "00.jpg"},
				{name: "Dress Up Game", category: code, month: 1, year: 2020, desc: "An online dress up game created as a final project for Programming Basics.", gallery: dressUp, folder: "dressUp", thumb:"0.jpg"},
				{name: "Reflection", category: art, month: 1, year: 2020, desc: "amet", gallery: reflection, folder: "reflection", thumb:""},
				{name: "Eduo", category: code, month: 8, year: 2019, desc: "amet", gallery: eduo, folder: "eduo", thumb:"0.jpg"}];*/

var projects = [{name: "Ap Art Concentration", category: [art], month: 5, year: 2019, desc: "The concentration section of my Ap Art portfolio.", gallery: apArt, folder: "apArt", thumb:"12.jpg"}, 
				{name: "A Year In the Life", category: [games, art], month: 12, year: 2020, desc: "A Twine game created as a final project for a Games and Society class.", gallery: ayitl, folder: "ayitl", thumb: ""},
				{name: "Northeastern University Holiday Card", category: [art], month: 12, year: 2020, desc: "Entry for Northeastern University's 2020 Holiday Card Contest. 3rd Place winner.", gallery: neuCard2020, folder: "neuHolidayCard2020", thumb:""}, 
				{name: "Party for 1", category: [art], month: 5, year: 2020, desc: "Submitted to Spectrum Literary Arts Magazine.", gallery: party41, folder: "party41", thumb:""},
				{name: "Pinned", category: [art], month: 1, year: 2021, desc: "", gallery: pinned, folder: "pinned", thumb:""},
				{name: "Poetry Book Illustrations", category: [art], month: 12, year: 2019, desc: "A series of illustrations of existing poems for a semester-long project in 2D Tools.", gallery: poetryBook, folder: "poetryBook", thumb:""},
				{name: "Switchin'", category: [games, art], month: 12, year: 2020, desc: "A prototype of a 2d platformer created as a final project for Foundations of Games.", gallery: switchin, folder: "switchin", thumb:"0.jpg"},
				{name: "Crunch", category: [design], month: 12, year: 2020, desc: "A prototype of an online calendar with a focus on displaying deadlines and customizing its appearance. Created as a semester-long project for Interaction Design I. The desktop prototype can be viewed <a href=\"https://www.figma.com/proto/nDAXIeLO4bgWjDLkgLrhRG/Crunch?page-id=322%3A10633&node-id=322%3A12529&viewport=389%2C275%2C0.0847831591963768&scaling=min-zoom&starting-point-node-id=322%3A12529\">here</a>, and the mobile prototype can be viewed <a href=\"https://www.figma.com/proto/nDAXIeLO4bgWjDLkgLrhRG/Crunch?page-id=322%3A15909&node-id=322%3A15910&viewport=437%2C374%2C0.22920119762420654&scaling=scale-down&starting-point-node-id=322%3A15910\">here</a>.", gallery: crunch, folder: "crunch", thumb: "00.jpg"},
				{name: "Dress Up Game", category: [code, games], month: 5, year: 2020, desc: "An online dress up game created as a final project for Programming Basics. It can be played <a href=\"https://allisonzca.github.io/dressUpGame/game.html\">here</a>.", gallery: dressUp, folder: "dressUp", thumb:"0.jpg"},
				{name: "Reflection", category: [art], month: 3, year: 2021, desc: "", gallery: reflection, folder: "reflection", thumb:""},
				{name: "Eduo", category: [design, code], month: 8, year: 2019, desc: "An educational web game where 2 players are randomly matched to solve math problems. Created in 24 hours in a team of 4 for AngelHacks 2019. Qualified for semifinals. It can be played <a href=\"http://eduo.herokuapp.com/\">here</a>.", gallery: eduo, folder: "eduo", thumb:"0.jpg"},

				{name: "This website", category: [code, design], month: 7, year: 2021, desc: "A website I created to showcase my projects across disciplines. Prototyped in Figma, coded using javascript and d3.js.", gallery: thisSite, folder: "thisSite", thumb:""}
				];

function compareDates(a, b) {
	var aYear = a.year;
	var bYear = b.year;
	var aMonth = a.month;
	var bMonth = b.month;

	console.log("sorted");
	if (aYear < bYear) {
		return 1;

	} else if (aYear > bYear) {
		return -1;

	} else {
		if (aMonth < bMonth) {
			return 1;
		} else {
			return -1;
		}
	}

}

projects.sort(compareDates);


var head = "1";
var waist = "2";
var thigh = "3";
var full = "4";
var illust = "";

var sketch = "a";
var line = "b";
var color = "b";

var standList = [{type: head, finish: line, url: "1.png", xstart: 1, xend:2, ystart: 1, yend:3},
	{type: full, finish: sketch, url: "2.jpg",  xstart: 2, xend:4, ystart: 1, yend:2},
	{type: waist, finish: line, url: "3.png",  xstart: 2, xend:3, ystart: 2, yend:3},
	{type: waist, finish: sketch, url: "4.jpg",  xstart: 3, xend:4, ystart: 2, yend:3}
	];

line = "a";
full = "2";

var chibiList = [{type: head, finish: color, url: "1.jpg",  xstart: 1, xend:2, ystart: 1, yend:2},
	{type: head, finish: color, url: "2.jpg",  xstart: 2, xend:3, ystart: 1, yend:2},
	{type: full, finish: color, url: "3.jpg",  xstart: 1, xend:3, ystart: 2, yend:3}
	];

line = "b";

var illustList = [{type: illust, finish: line, url: "4.jpg", xstart: 1, xend:2, ystart: 1, yend:3},
	{type: illust, finish: sketch, url: "2.jpg", xstart: 2, xend:4, ystart: 1, yend:2},
	{type: illust, finish: line, url: "3.jpg", xstart: 2, xend:3, ystart: 2, yend:3},
	{type: illust, finish: sketch, url: "1.jpg", xstart: 3, xend:4, ystart: 2, yend:3}];
