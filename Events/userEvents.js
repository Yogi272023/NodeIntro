import * as Events from "events";

 class UserEvents extends Events.EventEmitter{
    createPost(content){
      console.log("Post is created.");
      this.emit("postCreated");
    }
};

export default UserEvents;

