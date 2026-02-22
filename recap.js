let thrivingList =[];
let strugglingList =[];

let totals = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugglingCount = document.getElementById("strugglingCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilerBtn =document.getElementById("thriving-filter-btn");
const struggligFilterBtn = document.getElementById("struggling-filter-btn");


const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
// console.log(allCardSection.children.length)


 const filterSection = document.getElementById("filterd-section");


function  calculateCount (){
    totals.innerText=allCardSection.children.length;
    thrivingCount.innerText=thrivingList.length;
    strugglingCount.innerText=strugglingList.length;
}
// calculateCount();

function toggleStyle(id){

    // if any button has black then remove
    allFilterBtn.classList.remove("bg-black", "text-white");
    thrivingFilerBtn.classList.remove("bg-black", "text-white");
   struggligFilterBtn.classList.remove("bg-black", "text-white");

// adding fray bg for all
    allFilterBtn.classList.add("bg-gray-300", "text-black");
    thrivingFilerBtn.classList.add("bg-gray-300", "text-black");
   struggligFilterBtn.classList.add("bg-gray-300", "text-black");

//    console.log(id);

    const selected = document.getElementById(id);
    // console.log(selected)

    // adding black bg for current button
    selected.classList.remove("bg-gray-300","text-black");
    selected.classList.add("bg-black" , "text-white");

    if(id == "thriving-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
    }
    else if(id == "all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }
    
}


mainContainer.addEventListener("click" , function(event){

    console.log(event.target.classList.contains("thriving-btn"));
    if(event.target.classList.contains("thriving-btn")){
    
   const parentNode =event.target.parentNode.parentNode;
   const plantName =parentNode.querySelector(".plantName").innerText;
   const latinName =parentNode.querySelector(".latinName").innerText;
   const light = parentNode.querySelector(".light").innerText;
   const water = parentNode.querySelector(".water").innerText;
   const status = parentNode.querySelector(".status").innerText;
   const notes = parentNode.querySelector(".notes").innerText;

//    console.log(plantName,latinName,light.water,status,notes);

   parentNode.querySelector(".status").innerText="Thrive";

   const cardInfo ={
    parentNode,
    plantName,
    latinName,
    light,
    water,
    status:"Thrive",
    notes
   }


  const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName);


  if(!plantExist){
    thrivingList.push(cardInfo);
  }
//   console.log(thrivingList);

 calculateCount();


  renderThriving();

    }
   else if(event.target.classList.contains("struggling-btn")){
    
   const parentNode =event.target.parentNode.parentNode;
   const plantName =parentNode.querySelector(".plantName").innerText;
   const latinName =parentNode.querySelector(".latinName").innerText;
   const light = parentNode.querySelector(".light").innerText;
   const water = parentNode.querySelector(".water").innerText;
   const status = parentNode.querySelector(".status").innerText;
   const notes = parentNode.querySelector(".notes").innerText;

//    console.log(plantName,latinName,light.water,status,notes);

   parentNode.querySelector(".status").innerText="struggle";

   const cardInfo ={
    parentNode,
    plantName,
    latinName,
    light,
    water,
    status:"struggle",
    notes
   }


  const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName);


  if(!plantExist){
    strugglingList.push(cardInfo);
  }
//   console.log(thrivingList);

 calculateCount();


  renderThriving();
  renderStruggle()

    }

})

function renderThriving (){


    filterSection.innerHTML = " ";

    for ( thrive of thrivingList){
        
    let div = document.createElement("div");
    div.className='flex justify-between border border-l-purple-500 border-r-amber-500 border-t-blue-900 border-b-red-700  rounded-2xl p-8';

    div.innerHTML=`

         <!-- main part 1 -->

        <div class="space-y-6">
            <!-- part 1 -->
             <div>
                <p class="plantName text-4xl">${thrive.plantName}</p>
                <p class="latinName">Latin Name</p>
             </div>
             <!-- part 2 -->
              <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">Bright Indicate</p>
                <p class="water bg-gray-200 px-5">weekly</p>
              </div>

              <!-- part 3 -->
               <p class="status">${thrive.status}</p>
               <p class="notes">New leaf unfurling by the east window.</p>
               <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-8 py-2   rounded-2xl">Thrive</button>
                <button class="struggling-btn bg-green-200 px-8 py-2 rounded-2xl">Struggle</button>
               </div>
        </div>
        <!-- main part 2 -->
        <div>

            <button class="btn-delete bg-red-200 text-red-500 px-8 py-2 rounded-2xl">Delete</button>
        </div>

     </div>
    
    `
    filterSection.appendChild(div)
    }

}
function renderStruggle (){


    filterSection.innerHTML = " ";

    for ( struggle of strugglingList){
        
    let div = document.createElement("div");
    div.className='flex justify-between border border-l-purple-500 border-r-amber-500 border-t-blue-900 border-b-red-700  rounded-2xl p-8';

    div.innerHTML=`

         <!-- main part 1 -->

        <div class="space-y-6">
            <!-- part 1 -->
             <div>
                <p class="plantName text-4xl">${struggle.plantName}</p>
                <p class="latinName">Latin Name</p>
             </div>
             <!-- part 2 -->
              <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">Bright Indicate</p>
                <p class="water bg-gray-200 px-5">weekly</p>
              </div>

              <!-- part 3 -->
               <p class="status">${struggle.status}</p>
               <p class="notes">New leaf unfurling by the east window.</p>
               <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-8 py-2   rounded-2xl">Thrive</button>
                <button class="struggling-btn bg-green-200 px-8 py-2 rounded-2xl">Struggle</button>
               </div>
        </div>
        <!-- main part 2 -->
        <div>

            <button class="btn-delete bg-red-200 text-red-500 px-8 py-2 rounded-2xl">Delete</button>
        </div>

     </div>
    
    `
    filterSection.appendChild(div)
    }

}
