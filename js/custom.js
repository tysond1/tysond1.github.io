
function clickContent(id){
    console.log(id);
    contentDivs = document.getElementsByClassName("content");

    // console.log(contentDivs);
    for (let i = 0; i < contentDivs.length; i++){
        // console.log(contentDivs[i]);
        contentDivs[i].classList.add("content-hidden");
        contentDivs[i].classList.remove("content-show");
        
    }

    buttons = document.getElementsByClassName("nav-button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("btn-active");
    }

    console.log(id+"Button")
    buttonDiv = document.getElementById(id+"Button");
    buttonDiv.classList.add("btn-active");
    currentDiv = document.getElementById(id);
    currentDiv.classList.remove("content-hidden");
    currentDiv.classList.add("content-show");
}


function clickcontent(id){
    console.log(id);
    contentDivs = document.getElementsByClassName("button");


    for (let i = 0; i < contentDivs.length; i++){

        contentDivs[i].classList.add("button-hidden");
        contentDivs[i].classList.remove("button-show");
    }

    currentDiv = document.getElementById(id);
    currentDiv.classList.remove("button-hidden");
    currentDiv.classList.add("button-show");
}

