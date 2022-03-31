function categoria1()
{   
    var frutas = [];
    var choice = prompt("Deseja adicionar algum produto a esta categoria? Digite 1 para sim ou 2 para não:");
    while (choice == 1){   
        if (choice == 1){
            var produto = prompt("Qual produto?");
            frutas.push(produto);
            var choice = prompt("Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
        else if (choice > 2 || choice < 1){
            var choice = prompt("Opção inválida! Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
    }
    let lista = document.getElementById('lista');
    for (var i = 0; i < frutas.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(frutas[i]));
        lista.appendChild(item)
    }
}

function categoria2(){
    var congelados = [];
    var choice = prompt("Deseja adicionar algum produto a esta categoria? Digite 1 para sim ou 2 para não.");
    while (choice == 1){   
        if (choice == 1){
            var produto = prompt("Qual produto?");
            congelados.push(produto);
            var choice = prompt("Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
        else if (choice > 2 || choice < 1){
            var choice = prompt("Opção inválida! Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
    }
    let lista = document.getElementById('lista');
    for (var i = 0; i < congelados.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(congelados[i]));
        lista.appendChild(item)
    }
}

function categoria3(){
    var laticinios = [];
    var choice = prompt("Deseja adicionar algum produto a esta categoria? Digite 1 para sim ou 2 para não.");
    while (choice == 1){   
        if (choice == 1){
            var produto = prompt("Qual produto?");
            laticinios.push(produto);
            var choice = prompt("Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
        else if (choice > 2 || choice < 1){
            var choice = prompt("Opção inválida! Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
    }
    let lista = document.getElementById('lista');
    for (var i = 0; i < laticinios.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(laticinios[i]));
        lista.appendChild(item)
    }
}

function categoria4(){
    var higiene = [];
    var choice = prompt("Deseja adicionar algum produto a esta categoria? Digite 1 para sim ou 2 para não.");
    while (choice == 1){   
        if (choice == 1){
            var produto = prompt("Qual produto?");
            higiene.push(produto);
            var choice = prompt("Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
        else if (choice > 2 || choice < 1){
            var choice = prompt("Opção inválida! Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
    }
    let lista = document.getElementById('lista');
    for (var i = 0; i < higiene.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(higiene[i]));
        lista.appendChild(item)
    }
}

function categoria5(){
    var limpeza = [];
    var choice = prompt("Deseja adicionar algum produto a esta categoria? Digite 1 para sim ou 2 para não.");
    while (choice == 1){   
        if (choice == 1){
            var produto = prompt("Qual produto?");
            limpeza.push(produto);
            var choice = prompt("Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
        else if (choice > 2 || choice < 1){
            var choice = prompt("Opção inválida! Deseja adicionar outro produto a esta categoria? Digite 1 para sim ou 2 para não:");
        }
    }
    let lista = document.getElementById('lista');
    for (var i = 0; i < limpeza.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(limpeza[i]));
        lista.appendChild(item)
    }
}


