const jokeEl= document.getElementById('joke');
const get_joke = document.getElementById('get-joke');

 get_joke.addEventListener('click', generateJoke);

 generateJoke() ;

async function generateJoke() {
    const jokeRes= await  fetch('https://icanhazdadjoke.com/',{
    headers:  {
        'Accept': 'application/json'
    }
    });
    const joke = await jokeRes.json();

   document.getElementById('joke').innerHTML=joke.joke;
}