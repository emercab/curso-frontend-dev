const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('.shopping-cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click', showMobileMenu);
btnShoppingCar.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
   shoppingCartDetail.classList.remove('show-aside')
   productDetail.classList.remove('show-aside');
   desktopMenu.classList.toggle('show-desktop-menu');
}

function showMobileMenu() {
   shoppingCartDetail.classList.remove('show-aside')
   productDetail.classList.remove('show-aside');
   mobileMenu.classList.toggle('show-mobile-menu')
}

function toggleShoppingCart() {
   desktopMenu.classList.remove('show-desktop-menu');
   mobileMenu.classList.remove('show-mobile-menu');
   productDetail.classList.remove('show-aside');
   shoppingCartDetail.classList.toggle('show-aside')
}

function showProductDetail() {
   // Obtengo el id del producto escogido (clickeado)
   productId = this.dataset.product;
   renderProductDetail(productId);
   
   desktopMenu.classList.remove('show-desktop-menu');
   mobileMenu.classList.remove('show-mobile-menu');
   shoppingCartDetail.classList.remove('show-aside');
   productDetail.classList.add('show-aside');
}

function closeProductDetail() {
   productDetail.classList.remove('show-aside');
}

products = [
   {
      id: '1',
      name: 'Redmi Note 10 5G',
      price: 780000,
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/redmi-note-10-5g-analisis-opinion-2360679.jpg?itok=Gm9VWDsO',
      description: 'El Xiaomi Redmi Note 10 5G es la variante con conectividad 5G de la serie Redmi Note 10, pero a pesar de tener el mismo nombre, también tiene sustanciales diferencias en sus características.',
   },
   {
      id: '2',
      name: 'Xiaomi Smart Band 6',
      price: 210000,
      image: 'https://www.notebookcheck.org/fileadmin/Notebooks/Xiaomi/Mi_Smart_Band_6/Xiaomi_Mi_Smart_Band_6_Accessory.jpg',
      description: 'Disfruta de la Smart Band 6 de Xiaomi que llega ahora con un diseño de pantalla que aprovecha más los espacios y una monitorización de la frecuencia cardíaca 24/7 mejorada y más precisa, además de con todo lo necesario para registrar tu salud y la actividad diaria.',
   },
   {
      id: '3',
      name: 'Laptop Gamer HP Victus',
      price: 5240000,
      image: 'https://static-geektopia.com/storage/t/p/119/119449/784x441/a_hjRVFZgSg.webp',
      description: 'El portátil gaming Victus by HP de 16.1 pulgadas tiene lo que necesitas para jugar. Un potente procesador Intel®, excelentes gráficos NVIDIA® y un sistema de refrigeración mejorado. Además de una pantalla de alta resolución y rápida frecuencia de actualización.',
   },
   {
      id: '4',
      name: 'Iphone 12 Pro',
      price: 4180000,
      image: 'https://m.economictimes.com/thumb/msid-79463181,width-1200,height-900,resizemode-4,imgsize-638297/from-different-sizes-to-different-features-apple-has-tried-to-differentiate-each-2020-iphone-model-with-each-other-.jpg',
      description: 'El iPhone 12 Pro tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Con el nuevo Ceramic Shield, es cuatro veces más resistente a las caídas (2). Y te permite tomar fotos increíbles con poca luz gracias a un nuevo sistema de cámaras Pro y un rango de zoom óptico de 4x.',
   },
   {
      id: '5',
      name: 'TV XIAOMI 32" Pulgadas',
      price: 760000,
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/xiaomi-mi-tv-p1-50-2365481.jpg?itok=v9KqZ8mC',
      description: 'El TV XIAOMI 32" P1 ofrece un diseño sin biseles en tres lados para que puedas tener una visualización única, su diseño sofisticado y su base de alta calidad refuerza el concepto visual de alta definición con una experiencia visual más clara, envolvente y agradable, que te permitirán vivir experiencias únicas en el lugar donde estés.',
   },
   {
      id: '6',
      name: 'Samsung Galaxy A13 128 GB',
      price: 750000,
      image: 'https://i.blogs.es/1a2f9a/samsung-galaxy-a13-5g/1366_2000.jpg',
      description: 'El Galaxy A13 llamara tu atención con la pantalla infinita de 6,6" FHD+ y con la cámara cuádruple que te ofrece un lente principal de alta resolución 50 MP, Ultra gran angular de 5MP, Teleobjetivo de 2MP y un lente macro para te acerques y logres las mejores fotografías de detalle.',
   },
   {
      id: '7',
      name: 'Consola PS5 Estándar 825 GB',
      price: 3850000,
      image: 'https://ae01.alicdn.com/kf/U1d5d22a4ef6c4bc4bf929ef1b7f124bal/PS5-Consola-Sony-PlayStation-5-Standard-Edition-825-GB-4K-HDR-con-lector-de-disco.jpg',
      description: 'Experimenta cargas super rápidas gracias a una unidad de estado sólido de alta velocidad, una inmersión más profunda con retroalimentación háptica, gatillos adaptables y audio 3D, además de una nueva generación de increíbles juegos de PlayStation.',
   },
   {
      id: '8',
      name: 'Cámara Fotográfica CANON M50II',
      price: 3230000,
      image: 'https://www.photolari.com/wp-content/uploads/2018/05/Canon_EOS_M50-9.jpg',
      description: 'La EOS M50 MarkII está basada en el sólido rendimiento de la popular EOS M50 y cuenta con mejoras que serán especialmente notables para los creadores de contenido como los video blogueros y demás. Obtendrá la impresionante calidad de imagen del sensor CMOS de 24.1 megapíxeles.',
   },
];

renderProducts(products);

function renderProducts(dataProducts) {
   for (const product of dataProducts) {
      const divProductCard = document.createElement('div');
      divProductCard.classList.add('product-card');

      const imgProduct = document.createElement('img');
      imgProduct.setAttribute('src', product.image);
      imgProduct.setAttribute('alt', `Imagen de ${product.name}`);
      imgProduct.setAttribute('id', 'imgProduct');
      imgProduct.setAttribute('data-product', product.id);
      imgProduct.addEventListener('click', showProductDetail);

      const divProductInfo = document.createElement('div');
      divProductInfo.classList.add('product-info');
      const divContainerText = document.createElement('div');
      const pProductPrice = document.createElement('p');
      const pProductName = document.createElement('p');
      pProductPrice.innerHTML = `$ ${product.price.toLocaleString("es-CO")}`;
      pProductName.innerHTML = product.name;

      const figureShoppingCart = document.createElement('figure');
      const imgShoppingCart = document.createElement('img');
      imgShoppingCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      imgShoppingCart.setAttribute('alt', 'Shopping cart icon');
      
      figureShoppingCart.appendChild(imgShoppingCart);
      divContainerText.append(pProductPrice, pProductName);

      divProductInfo.append(divContainerText, figureShoppingCart);
      divProductCard.append(imgProduct, divProductInfo);

      cardsContainer.appendChild(divProductCard);
   }
}

function renderProductDetail(productId) {
   // Busco el producto elegido en el array de productos 
   const product = products.find((p) => p.id === productId);
   
   // Borro cualquier info del producto anterior para renderizar el nuevo
   productDetail.innerHTML = '';

   // close icon
   const divClose = document.createElement('div');
   divClose.setAttribute('class', 'product-detail-close');
   divClose.addEventListener('click', closeProductDetail);
      const imgClose = document.createElement('img');
      imgClose.setAttribute('src', './icons/icon_close.png');
      imgClose.setAttribute('alt', 'Close icon');
   divClose.append(imgClose);

   // product img
   const imgProduct = document.createElement('img');
   imgProduct.setAttribute('src', product.image);
   imgProduct.setAttribute('alt', `${product.name} picture`);

   // product info
   const divProductInfo = document.createElement('div');
   divProductInfo.setAttribute('class', 'product-info');
      const pPrice = document.createElement('p');
      const pProductName = document.createElement('p');
      const pProductDescription = document.createElement('p');
      pPrice.innerText = `$ ${product.price.toLocaleString('es-CO')}`;
      pProductName.innerText = product.name;
      pProductDescription.innerText = product.description;
   
   const btnAddToCart = document.createElement('button');
   btnAddToCart.setAttribute('class', 'primary-button add-to-cart-button');
   btnAddToCart.innerText = 'Add to cart';
      const imgButton = document.createElement('img');
      imgButton.setAttribute('src', './icons/bt_add_to_cart.svg');
      imgButton.setAttribute('alt', 'Add to cart icon');
   btnAddToCart.appendChild(imgButton);

   divProductInfo.append(
      pPrice,
      pProductName,
      pProductDescription,
      btnAddToCart
   );

   productDetail.append(divClose, imgProduct, divProductInfo);
}