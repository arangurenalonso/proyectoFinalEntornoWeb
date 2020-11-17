
export  function crearCard(identificador, talla, color, precioOri, precioUlt, nombreProducto, imagen,tipo) {


    //////////////////////--BOX IMAGEN/////////////////////////////
    const boxIMG = document.createElement('div')
    boxIMG.classList.add("card-boxImg")
    boxIMG.innerHTML = `
    <img src="${imagen[0]}" class="card-img" alt="">
    `
    //////////////////////--BOX DESCRIPCION////////////////////////////////
    const boxdescrip = document.createElement('div')
    boxdescrip.classList.add("card-info-nombreProducto")
    boxdescrip.innerHTML = `${nombreProducto}- ${tipo} - <span class="card-info-nombreProducto-Talla">
    ${talla[0]}
    </span>
    `

    /////////////////////--BOX PRECIO--/////////////////////////////
    const boxPrecio = document.createElement('div')
    boxPrecio.classList.add("card-info-precio")

    const txtPrecioOrig = document.createElement('p')
    txtPrecioOrig.classList.add("precioOriginal")
    txtPrecioOrig.innerHTML = `S/.${precioOri}`

    const txtPrecioUlt = document.createElement('p')
    txtPrecioUlt.classList.add("precioUltimo")
    txtPrecioUlt.innerHTML = `S/.${precioUlt}`
    boxPrecio.appendChild(txtPrecioOrig)
    boxPrecio.appendChild(txtPrecioUlt)
    ///////////////--BOX COLOR--///////////////////////
    const boxColores = document.createElement('div')
    boxColores.classList.add("card-info-colores")
    let indice = 0;
    color.forEach(element => {
        const color = document.createElement('div')
        color.classList.add("colorCirculo")
        color.setAttribute('style', `background-color:${element}; `)
        color.innerText = `${imagen[indice]}`
        boxColores.appendChild(color)
        indice++;
    })


    /////////////////--BOX COMPRAS--//////////////////////////////////////
    const boxTallas = document.createElement('div')
    boxTallas.classList.add("card-info-boxCompra-tallas")
    talla.forEach(element => {
        const talla = document.createElement('div')
        talla.classList.add("talla")
        talla.innerHTML = `${element}`
        boxTallas.appendChild(talla)
    })

    const boxBoton = document.createElement('div')
    boxBoton.classList.add("card-info-boxCompra-btn")
    boxBoton.innerHTML = `Agregar a mi Bolsa`

    const boxCompra = document.createElement('div')
    boxCompra.classList.add("card-info-boxCompra")
    boxCompra.appendChild(boxTallas)
    boxCompra.appendChild(boxBoton)

    ////////////////////--Box-info--////////////////////////////////
    const boxInfoProducto = document.createElement('div')
    boxInfoProducto.classList.add("card-info")
    boxInfoProducto.appendChild(boxdescrip)
    boxInfoProducto.appendChild(boxPrecio)
    boxInfoProducto.appendChild(boxColores)
    boxInfoProducto.appendChild(boxCompra)



    ///////////////////--CARD--////////////////////////////////////////
    const boxCard = document.createElement('div')
    boxCard.setAttribute('div',`${identificador}`)

    boxCard.classList.add("card")
    boxCard.appendChild(boxIMG)
    boxCard.appendChild(boxInfoProducto)


    return boxCard;

}