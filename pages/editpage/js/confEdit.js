'use strict'

function changeButton(){
    const btnConfirmar = document.getElementById("btnConfirmar");
    btnConfirmar.disabled = !btnConfirmar.disabled;
}
function changeButtonEditar(){
    const btnEditar = document.getElementById("btnEditar");
    btnEditar.disabled = !btnEditar.disabled;
}
function changeBoxEdit(){
    const inputBoxEdit = document.getElementById("inputBoxEdit");
    inputBoxEdit.disabled =  !inputBoxEdit.disabled;
}
function allfunctions(){
    changeButton();
    changeBoxEdit();
    changeButtonEditar();

}
function confirmeReset(){
    alert("Alterado")
}

document.getElementById('btnEditar').addEventListener('click', allfunctions)
document.getElementById('btnConfirmar').addEventListener('click',confirmeReset)