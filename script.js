function generateMatch(){

const interest = document.getElementById("interest").value;
const availability = document.getElementById("availability").value;
const transport = document.getElementById("transport").value;
const accessibility = document.getElementById("accessibility").value;

const result = document.getElementById("result");

let buddy = "";
let event = "";
let score = 0;

/* AI MATCH LOGIC */

if(interest === "Gardening"){
buddy = "Alice • Gardening Enthusiast";
event = "Community Garden Meetup";
score = 98;
}

else if(interest === "Art"){
buddy = "Maya • Local Artist";
event = "Art Workshop";
score = 95;
}

else if(interest === "Fitness"){
buddy = "James • Walking Leader";
event = "Morning Walking Club";
score = 93;
}

else if(interest === "Technology"){
buddy = "Daniel • Tech Mentor";
event = "AI Learning Session";
score = 96;
}

else{
buddy = "Sarah • Community Volunteer";
event = "Volunteer Day";
score = 97;
}

/* OUTPUT */

result.style.display = "block";

result.innerHTML = `
<h3>🤖 AI Match Found</h3>

<p><strong>👥 Buddy:</strong> ${buddy}</p>
<p><strong>🎟 Event:</strong> ${event}</p>

<p><strong>📅 Availability:</strong> ${availability}</p>
<p><strong>🚌 Transport:</strong> ${transport}</p>
<p><strong>♿ Accessibility:</strong> ${accessibility}</p>

<p style="margin-top:10px;">
<strong>Match Confidence:</strong> ${score}%
</p>
`;
}


/* =========================
   BUDDY FINDER AI FILTER
   ========================= */

function showBuddies(){

const interest = document.getElementById("buddyInterest").value;
const container = document.getElementById("buddyResults");

let buddies = [];

if(interest === "Gardening"){
buddies = [
["Alice","🌱 Gardening","0.7 miles","98%"],
["Ethan","🌿 Plant Care","1.1 miles","94%"]
];
}

else if(interest === "Art"){
buddies = [
["Maya","🎨 Artist","1.2 miles","95%"],
["Liam","🖌 Sketching","0.9 miles","92%"]
];
}

else if(interest === "Fitness"){
buddies = [
["James","🚶 Walking Club","0.8 miles","93%"],
["Noah","🏃 Running Group","1.3 miles","91%"]
];
}

else if(interest === "Technology"){
buddies = [
["Daniel","💻 Tech Mentor","1.0 miles","96%"],
["Ava","🤖 AI Enthusiast","1.4 miles","94%"]
];
}

else{
buddies = [
["Sarah","🤝 Volunteer","1.5 miles","97%"],
["Olivia","🌍 Community Work","1.2 miles","95%"]
];
}


// update every 3 seconds
setInterval(updateMap, 3000);
/* BUILD UI */

container.innerHTML = "";

buddies.forEach(b => {

container.innerHTML += `
<div class="buddy-card">

<div class="icon">👤</div>

<h2>${b[0]}</h2>

<p>${b[1]}</p>

<p>${b[2]} away</p>

<div class="match">${b[3]} Compatibility</div>

<button class="btn">Connect</button>

</div>

`;
});


/* IMPORTANT: wait until page loads */
window.addEventListener("DOMContentLoaded", startLiveMap);
}
function toggleMenu(){

    const menu =
    document.getElementById("dropdownMenu");

    menu.classList.toggle("show");

}