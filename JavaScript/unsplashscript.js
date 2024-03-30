let clientID ="9GVRMIgLPj9yB1D5FIHLeDOlkEveXprrsgKJ2mupnAw";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

function randomBackground(){
fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.urls.regular;
        document.body.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch((error) => console.error("Error fetching random image:", error));
}
const button = document.getElementById("randomBG");
button.addEventListener("click", randomBackground);

