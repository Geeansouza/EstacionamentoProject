'use strict'


//Criando a função que vai mudar o background

//muda a cor do section info
function darkSectionlogo(){
    var elements = document.querySelectorAll(".dkTheme-sectionLogo");
    elements.forEach((element) => {
        element.classList.toggle("dark-sectionlogo");
    });
}
//muda a cor do section info
function darkSectionInfo() {
    var elements = document.querySelectorAll(".theme-changeSectioninfo");
    
    elements.forEach((element) => {
        element.classList.toggle("dark-sectioninfo");
    });
}
//muda a cor do main
function darkMain() {
    var elements = document.querySelectorAll(".theme-change");
    
    elements.forEach((element) => {
        element.classList.toggle("dark-mode");
    });
}
//muda a cor da section tbl titulo 
function darktblTitulo() {
    var elements = document.querySelectorAll("#dkTheme-tblTitulo");
    
    elements.forEach((element) => {
        element.classList.toggle("dark-modeTbltitulo");
    });
}
//muda a cor da section tbl titulo 
function darktblConteudo() {
    var elements = document.querySelectorAll("#dkTheme-tblConteudo");
    
    elements.forEach((element) => {
        element.classList.toggle("dark-modeTblconteudo");
    });
}
function darkFooter() {
    var elements = document.querySelectorAll(".dkTheme-Footer");
    
    elements.forEach((element) => {
        element.classList.toggle("dark-footer");
    });
}
function darkTable() {
    var elements = document.querySelectorAll(".dkTheme-table");
    
    elements.forEach((element) => {
        element.classList.toggle("dark-table");
    });
}

//chamando todoas as funções para executar depois
function allStylesDark(){
    darkMain();
    darkSectionInfo();
    darktblTitulo();
    darktblConteudo();
    darkSectionlogo();
    darkFooter();
    darkTable();
}
//executando a função acima ao click do "button" dark mode
document.getElementById('btn-dark').addEventListener('change', allStylesDark) 