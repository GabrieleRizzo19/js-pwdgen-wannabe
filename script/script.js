

function password_generator(){

    let fname = prompt("Inserisci il tuo nome");
    let lname = prompt("Inserisci il tuo cognome");
    let preferred_color = prompt("Inserisci il tuo colore preferito");

    if(fname == null || lname == null || preferred_color == null){
        alert("Impossibile generare password");
    }
    else{
        document.getElementById("password").innerText = `La password è ${fname}-${lname}-${preferred_color}-2023`
    }
    
    

}