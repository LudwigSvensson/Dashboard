let clientID ="-1P52t6jSbqITlH1Q9pcsJX8WCXziJ3ysoI2N6P4eMw";
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

/*function setRandomBackground() {
    fetch("https://api.unsplash.com/photos/random?client_id=cpKOFdn1hyrqMDJK0dg8hlB_rOlyUcIRiUyjc9DCgLE")
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.urls.regular;
        document.body.style.backgroundImage = `url(${imageUrl})`;
      })
      .catch((error) => console.error("Error fetching random image:", error));
  }
  
  const button = document.getElementById("randomBG");
  button.addEventListener("click", setRandomBackground);*/