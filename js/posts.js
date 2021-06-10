var data = [
    "https://tinny-rajput.github.io/Age-calculator/",
    "https://tinny-rajput.github.io/Profile-card/",
    "https://tinny-rajput.github.io/To-Do-List/",
    "https://tinny-rajput.github.io/RPS/",
    "https://tinny-rajput.github.io/Glassmorphism-Clock/",
    "https://tinny-rajput.github.io/Among-us-speed-art/",
    "https://tinny-rajput.github.io/Build-a-Geolocation-Weather-App/",
    "https://tinny-rajput.github.io/Digital-Clock/",
    "https://tinny-rajput.github.io/neonlove.github.io/",
    "https://tinny-rajput.github.io/CodePen-Home-Accessible-Image-Compare-github.io/",
    "https://photocarousal.netlify.app/",
    "https://tinny-rajput.github.io/Bezos-earing-calculator/",
    "https://tinny-rajput.github.io/Credit-Card-Form---VueJs/"

]



console.log(data);
const container = document.querySelector("#container");

data.forEach((r) => {

    container.innerHTML += `<iframe width="600" src="${r}" width="200" height=450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
