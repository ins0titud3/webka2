function showFinished(){
    var finished = document.getElementById("projects").childNodes
    for(let i = 0; i < finished.length; i++){
        if(finished[i].id !== "finishedProj"){
            finished[i].style = "display: none"
        }
        else{
            finished[i].style = "display: "
        }
    }
}
function showInProcess(){
    var finished = document.getElementById("projects").childNodes
    for(let i = 0; i < finished.length; i++){
        if(finished[i].id !== "inProcess"){
            finished[i].style = "display: none"
        }
        else{
            finished[i].style = "display: "
        }
    }
}
function showDesignProcess(){
    var finished = document.getElementById("projects").childNodes
    for(let i = 0; i < finished.length; i++){
        if(finished[i].id !== "designProcess"){
            finished[i].style = "display: none"
        }
        else{
            finished[i].style = "display: "
        }
    }
}
function showAll(){
    var finished = document.getElementById("projects").childNodes
    for(let i = 0; i < finished.length; i++){
            finished[i].style = "display: "
    }
}