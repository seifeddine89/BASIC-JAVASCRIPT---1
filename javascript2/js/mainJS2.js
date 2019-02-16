function test() {

}
function gras() {
    //document.querySelector(".description").style.fontWeight = "bold"
    var z = document.querySelector(".description").style
    if (z.fontWeight === "bold") 
    {
        z.fontWeight = "normal"
              /*changement de bouleur de boutton après le clic*/
        document.querySelector("#boutton1").style.backgroundColor = "blue"
       
    }
    else {
        z.fontWeight = "bold"
              /*changement de bouleur de boutton après le clic*/
        document.querySelector("#boutton1").style.backgroundColor = "grey"
        
    }
}


function italique() {
    //document.querySelector(".description").style.fontStyle = "italic"
    var a = document.querySelector(".description").style
    if (a.fontStyle === "italic") 
    {
        a.fontStyle = "normal"
              /*changement de bouleur de boutton après le clic*/
        document.querySelector("#boutton2").style.backgroundColor="blue"
    }
    else {

        a.fontStyle = "italic"
              /*changement de bouleur de boutton après le clic*/
        document.querySelector("#boutton2").style.backgroundColor="grey"

    }
}


function souligner() {
    // document.querySelector(".description").style.textDecoration = "underline"

    var b = document.querySelector(".description").style
    if (b.textDecoration === "underline") 
    {
        b.textDecoration = "none"
        /*changement de bouleur de boutton après le clic*/
        document.querySelector("#boutton3").style.backgroundColor="blue"

    }
    else {
        b.textDecoration = "underline"
              /*changement de bouleur de boutton après le clic*/
        document.querySelector("#boutton3").style.backgroundColor="grey"

    }
}


function changepolice() {
    var y = document.querySelector("#police").value
    document.querySelector(".description").style.fontFamily = y
}

function taille() {
    var x = document.querySelector("#size").value;
    document.querySelector(".description").style.fontSize = x + "px"
}


