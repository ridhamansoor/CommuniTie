function recommendEvent() {

const interest =
document.getElementById("interest").value;

const result =
document.getElementById("result");

const events = {

gardening:
"🌱 Community Garden Meetup | Match Score: 96%",

art:
"🎨 Senior Art Workshop | Match Score: 92%",

fitness:
"🚶 Walking Club | Match Score: 95%",

technology:
"💻 AI Learning Session | Match Score: 94%",

volunteering:
"🤝 Volunteer Day | Match Score: 98%"
};

result.innerHTML = events[interest];
}