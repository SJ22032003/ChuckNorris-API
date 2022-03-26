const jokes = document.getElementById("jokePara");
const jokeBtn = document.getElementById("mainBtn");

let jokesArray = [];

function putJokes(){
    jokes.innerHTML = jokesArray.value;
    if(jokes.innerHTML.length == 0 || jokes.innerHTML.length > 270){
        getJoke();
    }
    // console.log(jokes.innerHTML.length);

}

async function getJoke() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";
    try {
        const response = await fetch(apiUrl);
        jokesArray = await response.json();
        // console.log(jokesArray);
        putJokes();

    } catch (error) {
        console.log(error);
    }
}

//Event Listners
jokeBtn.addEventListener('click', getJoke);

//On Load
getJoke();