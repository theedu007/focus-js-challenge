const createView = (content) => {
    let json = content.data;
    const body = $("#container");
    for(let i = 0; i < json.length; i++){
        
        //creating the row where the info will be
        let row = $('<div></div>').addClass("child");

        let group = $('<div></div>').addClass("child-2");
        //creating the img col
        let imgCol = $('<div></div>').addClass("child");
        imgCol.append(`<img src="${json[i].userImg}">`);
        
        //creating the name col
        let nameCol = $('<div></div>').addClass("child-2").html(`<strong>${json[i].username}</strong>`);
        
        //creating the text row
        let textRow = $('<p></p>').addClass("child-2").text(json[i].posts.map(post => post.body).reduce((prev, current) => `${prev}${current}\n`));
        
        //appending the img col to the row
        group.append(imgCol);
        group.append(nameCol);

        row.append(group);
        row.append(textRow);

        body.append(row);
    }
    console.log(json);
}



const getData = () => {
    $.get({
        url: 'http://localhost:5000/data',
        success: (data) => {
            createView(data);
        }
    })
}



$(document).ready(() => {
    getData();
});