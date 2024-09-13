
const baseUrl = "https://hekto-api.vercel.app/hekto";

const elHeader = document.querySelector(".header");
const elHero = document.querySelector(".hero");
const elfeaturedProducts = document.querySelector(".featuredProducts");
const elleatestProducts = document.querySelector(".leatestProducts");
const elRoot = document.querySelector(".localRoot");
const elTitle = document.querySelector(".title_price")

export async function getData() {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
     renderKod(data)
}
getData()
function renderKod(data){
    console.log(data);
elHero.innerHTML = `
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
}

