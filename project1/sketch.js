window.addEventListener('load', function () {
    // console.log('page is loaded');
 
    fetch('top250_min.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
		     console.log(data.movie.length);
		
	
		let movieArray = data;
        let randomNumber = Math.floor(Math.random()*movieArray.movie.length);

		// console.log(movieArray.movie[randomNumber].rating);
		
		year=movieArray.movie[randomNumber].year;
		rating=movieArray.movie[randomNumber].rating;
		nData = data.movie;


    })
})


/*----p5code----*/

let year;
let rating;
let nData;


function setup() {
	//Create the canvas and save it to a variable;
	const myCanvas = createCanvas(window.innerWidth, window.innerHeight);
	//Set the parent of the canvas to an exisitng html element's id value
	myCanvas.parent("canvas-container");
	background(28, 42, 121);


//    if (nData){
	for (let i = 0; i < 8; i++) {
		fill(245, 233, 66,90);
		noStroke();
		let x = random(width);
		let y = random (height);
		let d = 200;
		circle(x, y, d);
	}
}


function draw() {
	textSize(150);
	fill(242, 244, 247,5);
	text(year, 1200, 700);
}



