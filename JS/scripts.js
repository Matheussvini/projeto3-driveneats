let prato;
let bebida;
let sobremesa;
let total;

function selecionarPrato(produto){

    const itemSelecionado = document.querySelector('.prato .selecionado')    
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');


    prato = produto.innerHTML;
    habilitaFecharPedido();    

}
function selecionarBebida(produto){

    const itemSelecionado = document.querySelector('.bebida .selecionado')
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    bebida = produto.innerHTML;
    habilitaFecharPedido();
}
function selecionarSobremesa(produto){

    const itemSelecionado = document.querySelector('.sobremesa .selecionado')
    
    if ( itemSelecionado !== null ){
        itemSelecionado.classList.remove('selecionado');
    }

    produto.classList.add('selecionado');

    sobremesa = produto.innerHTML;
    habilitaFecharPedido();
}

function habilitaFecharPedido(){
    if ( prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botaoFecharPedido = document.querySelector('.fechar-pedido');
        botaoFecharPedido.classList.add('habilitado');

        const paragrafo = document.querySelector('.fechar-pedido p.a400-20');
        paragrafo.innerHTML = "Fechar pedido";
    }
}

function fecharPedido(){
    if ( prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const fundo = document.querySelector('.fundoFecharPedido');
        fundo.classList.add('habilitar');

        const painel = document.querySelector('.confirmarPedido');
        painel.classList.add('habilitar');

        conferirPedido();
    }
}

function conferirPedido(){
    
    let n= 3

    //link das comidas para confirmação
    prato = document.querySelector('.prato .item.selecionado p.a700-16');
    const Rprato = document.querySelector('.Rprato');
    Rprato.innerHTML = prato.innerHTML;

    bebida = document.querySelector('.bebida .item.selecionado p.a700-16');
    const Rbebida = document.querySelector('.Rbebida');
    Rbebida.innerHTML = bebida.innerHTML;

    sobremesa = document.querySelector('.sobremesa .item.selecionado p.a700-16');
    const Rsobremesa = document.querySelector('.Rsobremesa');
    Rsobremesa.innerHTML = sobremesa.innerHTML;

    //Link dos preços para confirmação
    const Pprato = document.querySelector('.prato .item.selecionado p.a400-16');
    const precoPrato = document.querySelector('.precoPrato');
    precoPrato.innerHTML = Pprato.innerHTML.substring(n);

    const Pbebida = document.querySelector('.bebida .item.selecionado p.a400-16');
    const precobebida = document.querySelector('.precoBebida');
    precobebida.innerHTML = Pbebida.innerHTML.substring(n);

    const Psobremesa = document.querySelector('.sobremesa .item.selecionado p.a400-16');
    const precosobremesa = document.querySelector('.precoSobremesa');
    precosobremesa.innerHTML = Psobremesa.innerHTML.substring(n);  

    //Soma para valor Total

    let Vprato = Pprato.innerHTML.substring(n);
    Vprato = Number(Vprato.replace(",","."));

    let Vbebida = Pbebida.innerHTML.substring(n);
    Vbebida = Number(Vbebida.replace(",","."));

    let Vsobremesa = Psobremesa.innerHTML.substring(n);
    Vsobremesa = Number(Vsobremesa.replace(",","."));

    const Ptotal = document.querySelector('.precoTotal');

    total = Vprato + Vbebida + Vsobremesa;
    total = total.toFixed(2);
    let total2
    total2 = "R$ " + total.toString().replace(".",",");  
    Ptotal.innerHTML = total2;     
}   

function mensagemWhatsapp(){
// Adiciona valores à mensagem do pedido para enviar no whatsapp

    const Cliente = prompt("Informe o seu nome:");
    
    const endereco = prompt("Informe o endereço para entrega:");

    const texturi = encodeURI(`Olá, gostaria de fazer o pedido:
- Prato: ${prato.innerHTML}
- Bebida: ${bebida.innerHTML}
- Sobremesa: ${sobremesa.innerHTML}
Total: ${total}

Nome: ${Cliente}
Endereço: ${endereco}`
    );
    const linkurl =`https://wa.me/5584998514181?text=${texturi}`;
    open(linkurl);
}
function botaoCancelar(){
    const fundo = document.querySelector('.fundoFecharPedido');
        fundo.classList.remove('habilitar');

        const painel = document.querySelector('.confirmarPedido');
        painel.classList.remove('habilitar');
}