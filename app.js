
const baseUrl = "https://hekto-api.vercel.app/hekto";

const elHero = document.querySelector(".hero");
const elfeaturedProducts = document.querySelector(".featuredProducts");
const elleatestProducts = document.querySelector(".leatestProducts");
const elRoot = document.querySelector(".localRoot");
const elTitle = document.querySelector(".title_price")

// Dark mode tugmasi
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


const swiper = new Swiper('.swiper-container', {
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000, // 5 seconds delay between slides
  },
});


export async function getData() {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
     renderKod(data)
}
getData()

function renderKod(data){
    console.log(data);
    elHero.innerHTML = `
    <div class="swiper">
      <div class="swiper-wrapper">
  
        <!-- Birinchi slayd -->
        <div class="swiper-slide">
          <div class="w-[80%] mx-auto flex justify-between px-5">
            <div class="flex flex-1 flex-col gap-3 justify-center items-center relative">
              <img class="absolute top-0 -left-[150px] object-cover h-[250px] max-w-[150px]" src="https://raw.githubusercontent.com/nematov9844/hekto-images/main/hero/lomp-left.png" alt="">
              <div class="gap-4 flex mx-auto flex-col justify-center items-start">
                <h1 class="text-fuchsia-600 font-semibold">${data.hero.titleHead}</h1>
                <h1 class="text-5xl font-bold">${data.hero.titleMain}</h1>
                <h1 class="text-gray-500">${data.hero.titleFooter}</h1>
                <button class="bg-[rgba(251,46,134,1)] py-1 px-3 text-white text-xs">${data.hero.heroBtnText}</button>
              </div>
            </div>
            <div class="flex-1">
              <img src="https://raw.githubusercontent.com/nematov9844/hekto-images/main/hero/hero-right.png" alt="">
            </div>
          </div>
        </div>
  
        <!-- Ikkinchi slayd -->
        <div class="swiper-slide bg-gray-100">
          <div class="flex flex-col items-center justify-center h-full text-center">
            <h1 class="text-blue-600 font-bold text-4xl">New Arrivals</h1>
            <p class="text-gray-500 text-lg mt-2">Discover the latest trends</p>
            <button class="mt-5 bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white text-lg rounded-lg">Shop Collection</button>
          </div>
        </div>
  
        <!-- Uchinchi slayd -->
        <div class="swiper-slide bg-gradient-to-r from-purple-400 to-pink-600">
          <div class="flex justify-center items-center h-full">
            <div class="text-white text-center">
              <h1 class="text-6xl font-extrabold">Limited Edition</h1>
              <p class="mt-4 text-xl">Don't miss out on our exclusive products</p>
              <button class="mt-6 bg-white text-purple-700 hover:text-pink-600 py-2 px-6 rounded-lg">Explore Now</button>
            </div>
          </div>
        </div>
  
        <!-- To'rtinchi slayd -->
        <div class="swiper-slide bg-white">
          <div class="flex justify-between items-center px-10">
            <div class="flex-1 text-left">
              <h1 class="text-gray-900 font-bold text-5xl">Big Discounts</h1>
              <p class="text-gray-500 text-lg mt-2">Save up to 50% on selected items</p>
              <button class="mt-4 bg-green-500 hover:bg-green-700 py-2 px-4 text-white text-lg rounded-lg">Buy Now</button>
            </div>
            <div class="flex-1">
              <img src="https://raw.githubusercontent.com/nematov9844/hekto-images/main/hero/hero-right.png" alt="">
            </div>
          </div>
        </div>
  
      </div>
  
      <div class="swiper-pagination"></div>
  
      <div class="swiper-button-next bg-gradient-to-r from-gray-700 to-gray-300 rounded-full overflow-hidden px-6 text-center flex justify-center text-white hover:from-red-500 hover:to-blue-500 hover:text-fuchsia-700 cursor-pointer"></div>
      <div class="swiper-button-prev bg-gradient-to-r from-gray-700 to-gray-300 rounded-full overflow-hidden px-6 text-center flex justify-center text-white hover:from-red-500 hover:to-blue-500 hover:text-fuchsia-700 cursor-pointer"></div>
    </div>
  `;
  

let titleFeat = document.createElement("div");
titleFeat.innerHTML = `
  <h1 class="font-bold text-4xl text-center">${data.featuredProducts.title}</h1>
`;
let cards = document.createElement("div");
cards.classList = "flex w-full justify-center gap-4 py-10";
data.featuredProducts.cards.forEach((item) => {
  cards.innerHTML += `
    <div class="flex mt-10 hover:text-white hover:bg-[rgba(47,26,196,1)] flex-col justify-center items-center">
      <img src="${item.cardImg}" class="bg-[rgba(246,247,251,1)] min-w-full h-[300px] " alt="">
      <div class="bg-inherit w-full px-4 flex justify-center flex-col gap-1 py-2 items-center">
        <h1 class="font-bold text-[rgba(251,46,134,1)] text-xl">${item.cardTitle}</h1>
        <h1 class="font-bold bg-transparent text-xs">${item.cardDesc}</h1>
        <h1 class="text-xs">$${item.cardPrice}</h1>
        <button data-buy="${item.id}" class="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Button</button>
      </div>
    </div>
  `;
});

cards.addEventListener("click", (e) => {
  let dataId = e.target.dataset.buy;
  if (dataId) {
    let newData = featuredProducts.cards.find((item) => item.id == dataId);
    let itemExists = dataLocal.find((item) => item.id == dataId);

    if (!itemExists) {
      dataLocal.push({ ...newData, count: 1, price_total: newData.cardPrice });
    }
    renderLocal();
    saveDataLocal();
  }
});

elfeaturedProducts.append(titleFeat, cards);

// latestProducts
elleatestProducts.innerHTML = `
  <h1 class="pt-5 text-4xl mt-8 font-bold text-center">${data.leatestProducts.title}</h1>
`;

let leatBtns = document.createElement("div");

leatBtns.innerHTML = `
<div class="flex justify-center">    
  <button class="newArrivalBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">New Arrival</button>
  <button class="bestSellerBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">Best Seller</button>
  <button class="featuredBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">Featured</button>
  <button class="specialOfferBtn py-1 px-3 text-xl text-[rgba(21,24,117,1)] hover:text-[rgba(251,46,134,1)] hover:underline">Special Offer</button>
</div>
`;

elleatestProducts.appendChild(leatBtns);

let arrivalCards = document.createElement("div");
arrivalCards.classList = "w-[60%] mx-auto grid grid-cols-3 gap-6";
elleatestProducts.appendChild(arrivalCards);

document.querySelector(".newArrivalBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = "";
  data.leatestProducts.newArrival.forEach((item) => {
    arrivalCards.innerHTML += `
      <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
          <h1>${item.name}</h1>
          <div class="flex gap-3">
            <h1>${item.price}</h1>
            <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
          </div>
        </div>
      </div>
    `;
  });
});

document.querySelector(".bestSellerBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = "";
  data.leatestProducts.bestSeller.forEach((item) => {
    arrivalCards.innerHTML += `
      <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
          <h1>${item.name}</h1>
          <div class="flex gap-3">
            <h1>${item.price}</h1>
            <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
          </div>
        </div>
      </div>
    `;
  });
});

document.querySelector(".featuredBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = "";
  data.leatestProducts.featured.forEach((item) => {
    arrivalCards.innerHTML += `
      <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
          <h1>${item.name}</h1>
          <div class="flex gap-3">
            <h1>${item.price}</h1>
            <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
          </div>
        </div>
      </div>
    `;
  });
});

document.querySelector(".specialOfferBtn").addEventListener("click", () => {
  arrivalCards.innerHTML = "";
  data.leatestProducts.specialOffer.forEach((item) => {
    arrivalCards.innerHTML += `
      <div class="shadow-black shadow-md rounded-lg h-[290px] bg-slate-200 flex justify-between flex-col items-center bg-[rgba(238, 239, 251, 1)]">
        <img src="${item.img}" class="min-w-full min-h-[80%]" alt="">    
        <div class="text-xs text-[rgba(21,24,117,1)] bg-white w-full flex justify-between px-3 py-1 rounded-b-md">
          <h1>${item.name}</h1>
          <div class="flex gap-3">
            <h1>${item.price}</h1>
            <h1 class="text-[rgba(251,36,72,1)]">${item.sale}</h1>
          </div>
        </div>
      </div>
    `;
  });
});
const swiper = new Swiper('.swiper', {
  loop: true, // Karuselni qaytarilish uchun
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000, // Slaydlarni avtomatik almashtirish
  },
});

}

