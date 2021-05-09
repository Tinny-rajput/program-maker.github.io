var data = [
    "https://age-calculatorbytinny.netlify.app/",
    "https://instagram-profile.netlify.app/",
    "https://to-do-list-by-tinny.netlify.app/",
    "https://rps-by-tinny.netlify.app/",
    "https://glassmorphism-clock-by-tinny.netlify.app/",
    "https://among-us-speed-art-by-tinny.netlify.app/",
    "https://geolacationweatherappbytinny.netlify.app/",
    "https://digital-clock-by-tinny.netlify.app/",

]

console.log(data);
const container = document.querySelector("#container");

data.forEach((r) => {

    container.innerHTML += `<iframe width="500" src="${r}" width="300" height="500" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});