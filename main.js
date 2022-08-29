// Toggle submenu email
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('.shopping-cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const btnCloseProductDetail = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleSubMenuEmail);
btnMobileMenu.addEventListener('click', showMobileMenu);
btnShoppingCar.addEventListener('click', toggleShoppingCart);
btnCloseProductDetail.addEventListener('click', closeProductDetail);

function toggleSubMenuEmail() {
   shoppingCartDetail.classList.remove('show-aside')
   productDetail.classList.remove('show-aside');
   desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
   shoppingCartDetail.classList.remove('show-aside')
   productDetail.classList.remove('show-aside');
   mobileMenu.classList.toggle('show-mobile-menu')
}

function toggleShoppingCart() {
   desktopMenu.classList.add('inactive');
   mobileMenu.classList.remove('show-mobile-menu');
   productDetail.classList.remove('show-aside');
   shoppingCartDetail.classList.toggle('show-aside')
}

function showProductDetail() {
   desktopMenu.classList.add('inactive');
   mobileMenu.classList.remove('show-mobile-menu');
   shoppingCartDetail.classList.remove('show-aside')
   productDetail.classList.add('show-aside');
}

function closeProductDetail() {
   productDetail.classList.remove('show-aside');
}


products = [
   {
      name: 'Redmi Note 10',
      price: 780000,
      image: 'https://asset.kompas.com/crops/AbO7PmOY4-o_FbyxdO7ow12AWNc=/0x31:1000x698/750x500/data/photo/2021/03/04/6040e12918378.jpg',
   },
   {
      name: 'Xiaomi Smart Band 6',
      price: 210000,
      image: 'https://http2.mlstatic.com/D_NQ_NP_606398-MEC50819694036_072022-O.jpg',
   },
   {
      name: 'Laptop Gamer HP Victus',
      price: 5240000,
      image: 'https://d1pc5hp1w29h96.cloudfront.net/catalog/product/4/7/470N9LA-3_T1646419313.png',
   },
   {
      name: 'Iphone 12',
      price: 3180000,
      image: 'https://web-mobile-first.s3.eu-west-3.amazonaws.com/production/iphone_12_min_9a28e126d8.jpg',
   }
];

console.log(products);
renderProducts(products);

function renderProducts(dataProducts) {
   for (const product of dataProducts) {
      const divProductCard = document.createElement('div');
      divProductCard.classList.add('product-card');

      const imgProduct = document.createElement('img');
      imgProduct.setAttribute('src', product.image);
      imgProduct.setAttribute('alt', `Imagen de ${product.name}`);
      imgProduct.addEventListener('click', showProductDetail);

      const divProductInfo = document.createElement('div');
      divProductInfo.classList.add('product-info');
      const divContainerText = document.createElement('div');
      const pProductPrice = document.createElement('p');
      const pProductName = document.createElement('p');
      pProductPrice.innerHTML = `$ ${product.price}`;
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