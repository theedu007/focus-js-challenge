const {getData, getUnparsedData} = require('./utils');
const postEndPoint = "https://jsonplaceholder.typicode.com/posts";
const userEndPoint = "https://jsonplaceholder.typicode.com/users";
const genderEndPoint = "https://api.genderize.io/?name="
const imgEndPoint = "https://joeschmoe.io/api/v1/";


module.exports.buildJSON = async () => {
    const posts = await getData(postEndPoint);
    const users = await getData(userEndPoint);
    let jsonResult = { data : []};

    for(let i = 0;  i < users.length; i++){
        
        //Creating the body of the message
        let userPosts = posts.filter(post => post.userId === users[i].id).map(result => {
            return {"body" : result.title}
        });

        let username = users[i].name.split(" ")[0];
        
        //get gender of the user
        let genderURL = genderEndPoint + username;
        let genderJSON = await getData(genderURL);
        let gender = genderJSON.gender;

        //get image of user
        let imgName = gender === "female" ? "josephine" : "jacques";
        let imgURL = imgEndPoint + imgName;

        //bulding JSON
        const json = {
            "username" : users[i].name,
            "userImg" : imgURL,
            "posts" : userPosts
        };
        jsonResult.data.push(json);
    }
    return jsonResult;
}

