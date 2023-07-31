function admain(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload= function(){
       
        document.getElementById("main").innerHTML =xhttp.responseText;

    }
    xhttp.open("GET","/main.txt");
    xhttp.send();                   
}