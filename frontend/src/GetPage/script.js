const optionId = document.getElementById('options');
const textId = document.getElementById('txt_value');
const buttnId = document.getElementById('btn_search');
const table = document.getElementById('tableresult');

function updateButton() {
    if (optionId.value === "ramal") {
        textId.style.display = "none";
        textId.disabled = true;
    } else {
        textId.style.display = "inline-block";
        textId.disabled = false;
        textId.placeholder = optionId.value.toUpperCase();
    }
}

function searchButton() {
    if (optionId.value === "ramal") {
        fetch("http://localhost:8080/ramal").then(response => response.json()).then(resposta => createTable(resposta))
    } else if (optionId.value === "mes" && textId.value) {
        fetch("http://localhost:8080/birthday/" + textId.value).then(response => response.json()).then(resposta => createTable(resposta))
    } else if (optionId.value === "setor" && textId.value) {
        fetch("http://localhost:8080/sector/" + textId.value).then(response => response.json()).then(resposta => createTable(resposta))
    }
}

function createTable(resposta) {
    let tableHtml = `
    <thread>
    <tr>
        <th>Número de registro</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Setor</th>
        <th>Data de Nascimento</th>
        <th>Ramal</th>
        </tr>

</thread>`;
    resposta.forEach(element => {
        tableHtml += `
        <tr>
            <td>${element.matricula}</td>
            <td>${element.nome}</td>
            <td>${element.email}</td>
            <td>${element.setor}</td>
            <td>${element.dataNascimento}</td>
            <td>${element.ramal}</td>
        </tr>`
    });
    table.innerHTML = tableHtml;
}