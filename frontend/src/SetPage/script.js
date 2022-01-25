const inputs = document.getElementsByClassName("input");

function fetchPost() {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "matricula": inputs[0].value,
            "nome": inputs[1].value,
            "email": inputs[2].value,
            "setor": inputs[3].value,
            "dataNascimento": inputs[4].value,
            "ramal": inputs[5].value
        })
    };
    fetch('http://localhost:8080/register', init);
}