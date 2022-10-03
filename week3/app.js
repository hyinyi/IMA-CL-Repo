window.addEventListener('load', function () {
    // console.log('page is loaded');
 
    fetch('top250_min.json')
    .then(response => response.json())
    .then(data => {

        let movieArray = data;
        let randomNumber = Math.floor(Math.random()*movieArray.movie.length);

        let nameElement = document.getElementById('m-name');
        nameElement.innerHTML = movieArray.movie[randomNumber].name;

        let imageElement = document.getElementById('m-img');
        imageElement.src = movieArray.movie[randomNumber].thumb_url;

        let ratingElement = document.getElementById('m-rating');
        ratingElement.innerHTML = "Rating: " + movieArray.movie[randomNumber].rating;
        
    })
   
    // let button = document.getElementById('movie-button');
    // button.addEventListener('click', function() {
    //      let inputText = document.getElementById('movie-input').value;
    //      console.log(inputText);

    // fetch('top250_min.json')
    // .then(response => response.json())
    // .then(data => {
    //      //console.log(data.movie[0].name);

    // let results = [];
    // for (let i = 0 ; i < 250; i++){
    // if (data.movie[i].name == inputText) {
    //     results.push(data.movie[i]);
    //     console.log(results[0]);
    //     }
    //     }
    //         // let nameElement = document.getElementById('m-name');
    //         // nameElement.innerHTML = results[0].name;

    //         let ratingElement = document.getElementById('m-rating');
    //         ratingElement.innerHTML = "Rating:" + results[0];
    //     }) 



            // let nameElement = document.getElementById('c-name');
            // nameElement.innerHTML = results[0].name;

            // let portElement = document.getElementById('c-port');
            // portElement.innerHTML = "Import/Export: " + results[0].port;

            // let numberElement = document.getElementById('c-number');
            // numberElement.innerHTML = results[0].number + " Million 60 Kilogram Bags/year";

            // let typeElement = document.getElementById('c-type');
            // typeElement.innerHTML = "Type of coffee bean: " + results[0].type;

    
        // })    
    })






    //     })
    //     .catch(err => {
    //         console.log("error is: " + err);
    //         let headingElement = document.getElementById('p-name');
    //         headingElement.innerHTML = "Could not find pokemon! try again.";

    //         let weightElement = document.getElementById('p-weight');
    //         weightElement.innerHTML = "";

    //         let imageElement = document.getElementById('p-img');
    //         imageElement.src = "";
    //     })


