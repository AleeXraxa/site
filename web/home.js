

function menu() {

        if (document.getElementById("n2").style.display == "none") {
                document.getElementById("n2").style.display = "block";
        } else {
                document.getElementById("n2").style.display = "none";
        }

}

function chat() {

        if (document.getElementById("chatbox").style.display == "none") {
                document.getElementById("chatbox").style.display = "flex";
        } else {
                document.getElementById("chatbox").style.display = "none";
        }
}

// function addtowish() {
//         if (document.getElementById("wish-heart").style.src == "images/wish.png") {
//                 document.getElementById("wish-heart").style.src = "images/wish (1).png";
//         } else {
//                 document.getElementById("wish-heart").style.src = "images/wish.png";
//         }
// }

// var close = document.getElementsByClassName("wishheart");
// for (let i = 0; i < wish - heart.length; i++) {
//         wishheart[i].onclick = function() {
//                 let dlt = this.parentElement;
//                if (dlt.style.src == "images/wish.png") {
//                 dlt.style.src = "images/wish (1).png";
//         } else {
//                 dlt.style.src = "images/wish.png";
//         } 
//         }
// }



// brand menu

function showbrandmenu(){
        
        if (document.getElementById("brands").style.display == "none") {
                document.getElementById("brands").style.display = "flex";
        } else {
                document.getElementById("brands").style.display = "none";
        }   

}
