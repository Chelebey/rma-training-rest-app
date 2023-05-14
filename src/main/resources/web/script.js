let nameInput = document.getElementById("NameInput")
let url = "localhost:8090/test21"
async function giveServer()
{
    alert("SDsd");
    let response = await fetch(url);
 
    if (response.ok) 
    {
        let text = await response.text();
  
        alert(text);
    } 
    else 
       {alert("Ошибка HTTP: " + response.status);}
}

onchange(nameInput,giveServer)