let NavigationBar = document.querySelector("nav");
function Nav(){
    // alert("hell0")
    if(NavigationBar.classList.contains("show")){
        NavigationBar.classList.add("hide");
        NavigationBar.classList.remove("show");
    }
    else if(NavigationBar.classList.contains("hide")){
        NavigationBar.classList.remove("hide");
        NavigationBar.classList.add("show");   
    }
}