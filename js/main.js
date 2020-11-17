import {crearCard} from './functionCrearCard.js';
import {data} from './json.js';

const cardConteiner = document.querySelector('.contenedor-card')
const carritoProductsAdd = document.querySelector('.carrito-ProdAnadido')


function mostrarProductos() {
    data.forEach(element => {
        let cardProducto=crearCard(
            element.identificador,
            element.talla,
            element.color,
            element.precioOri,
            element.precioUlt,
            element.nombreProducto,
            element.imagen,
            element.tipo

        )
        cardConteiner.appendChild(cardProducto)
    });

}


mostrarProductos()


cardConteiner.addEventListener("click", (e) => {
    if (e.target.classList.contains('colorCirculo')) {
        let card = e.target.parentElement.parentElement.parentElement;
        let circulocolor = e.target
        editarImagen(card, circulocolor)

    }
    if (e.target.classList.contains('card-info-boxCompra-btn')) {
        let card=e.target.parentElement.parentElement.parentElement;
        agregarCarrito(card);

    }



})

function  agregarCarrito(card){
    const datos={
        img:card.querySelector('.card-img').src,
        descrip:card.querySelector('.card-info-nombreProducto').textContent,
        preciOrig:card.querySelector('.precioOriginal').textContent,
        preciFinal:card.querySelector('.precioUltimo').textContent,
    }
    console.log(datos)
    crearProdCarrito(datos.img,datos.descrip,datos.preciOrig,datos.preciFinal)
}


function editarImagen(color, circulocolor) {
    const infoCurso = {
        url: circulocolor.textContent,
    }
    let imagen = color.querySelector(`.card-img`)
    imagen.setAttribute("src", `${infoCurso.url}`)


}





function crearProdCarrito(imgCard,descrip,precOrig,precioFinal){
    const boxProductoAnadido = document.createElement('div')
    boxProductoAnadido.classList.add('boxProductAdd')
    boxProductoAnadido.innerHTML=`
                        <div class="boxProductAdd-boxImg">
                            <img src="${imgCard}" alt="">
                        </div>
                        <div class="boxProductAdd-boxInfo">
                            <h3 class="boxProductAdd-boxInfo-nomProd">${descrip}</h3>
                            <div class="boxProductAdd-boxInfo-precio">
                                <p class="boxProductAdd-boxInfo-precio-ultimo">${precioFinal}</p>
                                <p class="boxProductAdd-boxInfo-precio-original">${precOrig}</p>
                            </div>
                        </div>
                        <div class="boxProductAdd-boxClose">
                            <img src="img/btnCerrar.png" alt="">
                        </div>
          `
          carritoProductsAdd.appendChild(boxProductoAnadido)
}

