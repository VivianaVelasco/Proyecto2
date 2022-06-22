const ejecutarCodigo = () =>{
   // alert('Hola, mundo!')
  let elemento= document.getElementById('titulo1');
    elemento.textContent='Album de fotos'
    
    let arreglo=document.getElementsByClassName('text-muted')
    elemento=arreglo[1]
    elemento.innerHTML= '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'
    
    arreglo = document.getElementsByTagName('p')
    arreglo[2].setAttribute('class','d-node')

    
    const images_url = [
      {
        url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "camino",
      },
      {
        url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "energia",
      },
      {
        url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "papá",
      },
      {
        url: "https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "chica",
      },
      {
        url: "https://images.unsplash.com/photo-1653874403269-f4f0dba02f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "chica2",
      },
      {
        url: "https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "pinky",
      },
      {
        url: "https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "perrito",
      },
      {
        url: "https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "playa",
      },
      {
        url: "https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "camara",
      }
    ];
    let svg_elementos;
    svg_elementos = document.querySelectorAll('svg')
    const len_svg_elementos = svg_elementos.length;
    for (let i = 1; i < len_svg_elementos; i++) {
      const imagenes = document.createElement("img");
      imagenes.setAttribute("src", images_url[i-1].url);
      imagenes.setAttribute("alt", images_url[i-1].alt);
      imagenes.setAttribute("height", "200px");
      imagenes.setAttribute("width", "100%");
      imagenes.classList.add('bd-placeholder-img', 'card-img-top');
      svg_elementos[i].parentElement.replaceChild(imagenes, svg_elementos[i])
    }


}
  ejecutarCodigo()

 