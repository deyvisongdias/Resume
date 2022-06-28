 function clickButton() {
    document.querySelector("#b1").click();
    alert("Bem vindo");
 }

$(document).ready(()=>{


    $("#b1").click(()=>{
        $("#endereco").show();         
        $("#descricao").hide();
        $("#formacao").hide();
        $("#treinamentos").hide();
        $("#habilidades").hide();
        $("#experiencia").hide();       
    });

    $("#b2").click(()=>{
        $("#endereco").hide();         
        $("#descricao").show();
        $("#formacao").hide();
        $("#treinamentos").hide();
        $("#habilidades").hide();
        $("#experiencia").hide();
    });

    $("#b3").click(()=>{
        $("#endereco").hide();         
        $("#descricao").hide();
        $("#formacao").show();
        $("#treinamentos").hide();
        $("#habilidades").hide();
        $("#experiencia").hide();
    });
            
    $("#b4").click(()=>{
        $("#endereco").hide();         
        $("#descricao").hide();
        $("#formacao").hide();
        $("#treinamentos").show();
        $("#habilidades").hide();
        $("#experiencia").hide();
    });


    $("#b5").click(()=>{
        $("#endereco").hide();         
        $("#descricao").hide();
        $("#formacao").hide();
        $("#treinamentos").hide();
        $("#habilidades").show();
        $("#experiencia").hide();
        });


    $("#b6").click(()=>{
        $("#endereco").hide();         
        $("#descricao").hide();
        $("#formacao").hide();
        $("#treinamentos").hide();
        $("#habilidades").hide();
        $("#experiencia").show();
        });
})