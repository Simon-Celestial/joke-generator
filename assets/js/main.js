const wrapper =  document.createElement('div');
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);
const heading = document.createElement("h1");
heading.innerText = "Chuck Norris Jokes Generator";
wrapper.appendChild(heading);
const img = document.createElement("img");
img.setAttribute("src","./assets/icons/chuck.png");
wrapper.appendChild(img);
const btn = document.createElement("button");
btn.classList.add("btn");
btn.innerText = "GET RANDOM JOKE";
wrapper.appendChild(btn);
const jokesContainer = document.createElement("div");
jokesContainer.classList.add("jokes-container");
wrapper.appendChild(jokesContainer);
const text = document.createElement("p");
jokesContainer.appendChild(text);
function joker () {
    fetch("https://api.chucknorris.io/jokes/random ")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            text.innerText = data.value;
        })
}
btn.addEventListener('click',joker);





