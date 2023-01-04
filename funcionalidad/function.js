//calcula los años para los datos personales
var fechaactual = new Date();
var fechanacimiento = new Date(1963, 1, 5)
document.getElementById("cumpleaños").innerHTML += fechaactual.getFullYear()-fechanacimiento.getFullYear();

//funcion que permite que solo se habra un solo ver mas a la ves
function sacar(){
    for (let index = 1; index <= 5; index++) {
        if(document.getElementById("vermas"+index).style.display == "block"){
            document.getElementById("vermas"+index).style = 'display:none';
            document.getElementById("btnvermenos"+index).style = 'display:none';
            document.getElementById("btnvermas"+index).style = 'display:block';
        }
    }
}

//botones ver mass

//quise generalizar la funcion de los botones ver mas y ver menos pero la parte addEventListener("click",function())
//no me deja mandar por parametro el numero del boton correspondiente
document.getElementById("btnvermas1").addEventListener("click",function(){
    sacar();
    document.getElementById("vermas1").style = 'display:block';
    document.getElementById("btnvermas1").style = 'display:none';
    document.getElementById("btnvermenos1").style = 'display:block';
});

document.getElementById("btnvermas2").addEventListener("click",function(){
    sacar();
    document.getElementById("vermas2").style = 'display:block';
    document.getElementById("btnvermas2").style = 'display:none';
    document.getElementById("btnvermenos2").style = 'display:block';
})

document.getElementById("btnvermas3").addEventListener("click",function(){
    sacar();
    document.getElementById("vermas3").style = 'display:block';
    document.getElementById("btnvermas3").style = 'display:none';
    document.getElementById("btnvermenos3").style = 'display:block';
})

document.getElementById("btnvermas4").addEventListener("click",function(){
    sacar();
    document.getElementById("vermas4").style = 'display:block';
    document.getElementById("btnvermas4").style = 'display:none';
    document.getElementById("btnvermenos4").style = 'display:block';
})

document.getElementById("btnvermas5").addEventListener("click",function(){
    sacar();
    document.getElementById("vermas5").style = 'display:block';
    document.getElementById("btnvermas5").style = 'display:none';
    document.getElementById("btnvermenos5").style = 'display:block';
})


//botones ver menos
document.getElementById("btnvermenos1").addEventListener("click",function(){
    document.getElementById("vermas1").style = 'display:none';
    document.getElementById("btnvermenos1").style = 'display:none';
    document.getElementById("btnvermas1").style = 'display:block';
})
document.getElementById("btnvermenos2").addEventListener("click",function(){
    document.getElementById("vermas2").style = 'display:none';
    document.getElementById("btnvermenos2").style = 'display:none';
    document.getElementById("btnvermas2").style = 'display:block';
})
document.getElementById("btnvermenos3").addEventListener("click",function(){
    document.getElementById("vermas3").style = 'display:none';
    document.getElementById("btnvermenos3").style = 'display:none';
    document.getElementById("btnvermas3").style = 'display:block';
})
document.getElementById("btnvermenos4").addEventListener("click",function(){
    document.getElementById("vermas4").style = 'display:none';
    document.getElementById("btnvermenos4").style = 'display:none';
    document.getElementById("btnvermas4").style = 'display:block';
})
document.getElementById("btnvermenos5").addEventListener("click",function(){
    document.getElementById("vermas5").style = 'display:none';
    document.getElementById("btnvermenos5").style = 'display:none';
    document.getElementById("btnvermas5").style = 'display:block';
})