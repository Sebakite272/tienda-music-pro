class Carrito{
    comprarInstrumento(e){
        e.prevenDefault();
        if(e.target.classicList.contains('agregar-carrito')){
            const instrumento = e.target.parentElement.parentElement;
            this.leerDatosInstrumento(instrumento);

            //console.log(instrumento);
        }
    }
    leerDatosInstrumento(instrumento){
        const infoInstrumento = {
            imagen: instrumento.querySelector('img').src,
            titulo: instrumento.querySelector('h4').textContent,
            precio: instrumento.querySelector('p').textContent,
            id : instrumento.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        this.insertarCarrito(infoInstrumento);

    }

    insertarCarrito(instrumento){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${instrumento.imagen}" width=100>
        </td>
        <td>${instrumento.titulo}</td>
        <td>${instrumento.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${instrumento.id}"></a>
        </td>
    `;
    listaInstrumentos.appendChild(row);
    this.guardarProductosLocalStorage(producto);





        
      
    }

    eliminarInstrumento(e){
        e.preventDefault();
        let instrumento, instrumentoID;
        if(e.target.classList.contains('borrar-instrumento')){
            e.target.parentElement.parentElement.remove();
            instrumento = e.target.parentElement.parentElement;
            instrumentoID = instrumento.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();

    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaInstrumentos.firstChild){
            listaInstrumentos.removeChild(listaInstrumentos.firstChild);
        }
        this.vaciarLocalStorage();

        return false;

    }
}