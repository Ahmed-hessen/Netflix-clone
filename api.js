
let API_KEY = "api_key=9fcddc256077c6d7443d4c87524ac38c";
let BASE_URL ="https://api.themoviedb.org/3";
let IMG_URL="https://image.tmdb.org/t/p/original/";


// declare an object of trending
const requests = {
    fetchTrending:`${BASE_URL}/trending/all/week?${API_KEY}&language=en-US`,
}
fetch(requests.fetchTrending).then(response => response.json()).then((data) =>{

    let bannerMovie = data.results[Math.floor(Math.random()* data.results.length-1)];
    document.getElementById("myfilms").style.backgroundImage=`url(${IMG_URL + bannerMovie.backdrop_path})`;
    document.getElementById("title").innerHTML= bannerMovie.title? bannerMovie.title:bannerMovie.name;
    document.getElementById("description").innerHTML=bannerMovie.overview.slice(0,60);

}) 

// Comedy Films 





