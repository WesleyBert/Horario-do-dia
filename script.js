function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem")
    var horario = new Date();
    var hora = horario.getHours();

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = "img/manha.png"
        msg.innerText=`Bom dia! Agora são ${hora} horas`
        img.style="width: 250px"
        document.body.style.background="#AABDC4"
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = "img/tarde.png"
        msg.innerText=`Boa tarde! Agora são ${hora} horas `
        img.style ="width: 60%"
        document.body.style.background="#DBDEDB"
    }else {
        img.src ="img/noite.png"
        msg.innerHTML=`Boa noite! Agora são ${hora} horas`
        img.style ="width: 280px"
        document.body.style.background ="#594A91"
    }
}