const carro = new Carrito();
const carrito = document.getElementById('carrito');
const instrumento = document.getElementById('lista-instrumentos');
const listaInstrumentos = document.querySelector('lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');
cargarEventos();

function cargarEventos(){
    instrumento.addEventListener('click', (e)=>{carro.comprarInstrumento(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarInstrumento(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    



}

