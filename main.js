document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();

            let campoA= parseInt(document.getElementById("campoA").value);
            let campoB= parseInt(document.getElementById("campoB").value);

            console.log ("Campo A", campoA)
            console.log ("Campo B", campoB)
    
            if (campoB > campoA){
                alert("Formulário enviado com sucesso!");
            } else {
                alert("Formulário inválido!");
            }
    })