import UserEvents from "./userEvents.js";

const userEvents= new UserEvents();

function saveToDatabase(){
    console.log("Post is saved to database.")
}
function sendNotification(){
    console.log("Notification is send.")
}
function updateTimeLine(){
    console.log("Timeline is updated.")
}

userEvents.addListener("postCreated",saveToDatabase);
userEvents.addListener("postCreated",sendNotification);
userEvents.addListener("postCreated",updateTimeLine);

userEvents.createPost("This is my first post.")