const swapRight = document.querySelector("#swap-right");
const swapLeft = document.querySelector("#swap-left");
const imgCarousel = document.querySelector("#img-carousel");
const contentCarousel = document.querySelector("#content-carousel");

let carouselRound = 0;

const IMG = [
  '<picture><source srcset="./images/desktop/desktop-image-hero-1.jpg" media="(min-width: 800px)"/> <img src="./images/mobile/mobile-image-hero-1.jpg" alt="" /></picture>',
  '<picture><source srcset="./images/desktop/desktop-image-hero-2.jpg" media="(min-width: 800px)"/> <img src="./images/mobile/mobile-image-hero-2.jpg" alt="" /></picture>',
  '<picture><source srcset="./images/desktop/desktop-image-hero-3.jpg" media="(min-width: 800px)" /><img src="./images/mobile/mobile-image-hero-3.jpg" alt="" /></picture>',
];

const CONTENT = [
  "<h1>Discover innovative ways to decorate</h1><p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>",

  "<h1>We are available all across the globe</h1><p>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>",

  "<h1>Manufactured with the best materials</h1><p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p>",
];

swapLeft.addEventListener("click", () => {
  carouselRound--;
  if (carouselRound < 0) carouselRound = 2;
  imgCarousel.innerHTML = IMG[carouselRound];
  contentCarousel.innerHTML = CONTENT[carouselRound];
});
swapRight.addEventListener("click", () => {
  carouselRound++;
  if (carouselRound > 2) carouselRound = 0;
  imgCarousel.innerHTML = IMG[carouselRound];
  contentCarousel.innerHTML = CONTENT[carouselRound];
});
