var facebookProfile = {
    name: "Katya",
    friends: 222,
    messages: ["Udacity", "Scholarship", "I'm the best"],
    postMessage: function(text){
        return facebookProfile.messages.push(text);
    },
    deleteMessage: function(num){
       return facebookProfile.messages.splice(num,1);
    },
    addFriend: function(){
        return facebookProfile.friends+=1;
    },
    removeFriend: function(){
        return facebookProfile.friends-=1;
    }
}