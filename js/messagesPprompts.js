function message  (event) {
    var id = event.target.id
    if(confirm("Вы уверены что хотите прейти на этот сайт?") ){
        if(id == "instagram"){
            window.open("https://www.instagram.com/", "_blank")
        }
        else if(id == "facebook"){
            window.open("https://www.facebook.com/", "_blank")
        }
        else{
            window.open("https://www.whatsapp.com/", "_blank")
        }
    }
}