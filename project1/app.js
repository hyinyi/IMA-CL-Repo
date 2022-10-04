window.addEventListener('load', function () {
    // console.log('page is loaded');
 
    fetch('top250_min.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data.movie);

        // movieData = data.movie

        let movieArray = data;
        let randomNumber = Math.floor(Math.random()*movieArray.movie.length);

        let nameElement = document.getElementById('m-name');
        nameElement.innerHTML = movieArray.movie[randomNumber].name;

        let imageElement = document.getElementById('m-img');
        imageElement.src = movieArray.movie[randomNumber].thumb_url;

        let ratingElement = document.getElementById('m-rating');
        ratingElement.innerHTML = "Rating: " + movieArray.movie[randomNumber].rating;

    })

 
    })







