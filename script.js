let interViewList = [];
let rejectList = [];
let currentStatus = "all-filter-btn";

let totals = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectCount");


const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("reject-filter-btn");



const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
// console.log(allCardSection.children.length);

 const filterSection = document.getElementById("filterd-section");

 const job = document.getElementById("job");


function  calculateCount (){
    totals.innerText = allCardSection.children.length;
    interviewCount.innerText = interViewList.length;
    rejectCount.innerText = rejectList.length;

    if(currentStatus == "all-filter-btn" ){
        job.innerText = `
           ${allCardSection.children.length} of ${allCardSection.children.length} jobs`;
    }
   else if(currentStatus == "interview-filter-btn" ){
        job.innerText = `
           ${interViewList.length} of ${allCardSection.children.length} jobs`;
    }
   else if(currentStatus == "reject-filter-btn" ){
        job.innerText = `
           ${rejectList.length} of ${allCardSection.children.length} jobs`;
    }
}
calculateCount();


function toggleStyle (id){

    // if any button has btn-primary then remove
    allFilterBtn.classList.remove("btn-primary" ,"text-black");
    interviewFilterBtn.classList.remove("btn-primary","text-black");
    rejectFilterBtn.classList.remove("btn-primary","text-black");

    // addinf btn-primary for all
    allFilterBtn.classList.add("btn" , "text-gray-500");
    interviewFilterBtn.classList.add("btn", "text-gray-500");
    rejectFilterBtn.classList.add("btn", "text-gray-500");


    // console.log(id);

    const selected = document.getElementById(id);
        currentStatus = id;
    // console.log(selected);

    // adding btn-primary for current button

    selected.classList.remove("text-gray-500");
    selected.classList.add("btn-primary","text-black");


    if(id == "interview-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterView();
    }else if(id == "all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }else if(id == "reject-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderRejected();
    }

    calculateCount();
    
}

mainContainer.addEventListener("click",function(event){ 
    // console.log(event.target.classList.contains("interview-btn"));

    if(event.target.classList.contains("interview-btn")){ 
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode);

        const plantName = parentNode.querySelector(".plantName").innerText;
        const latinName = parentNode.querySelector(".latinName").innerText;
        const stu = parentNode.querySelector(".stu").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText="INTERVIEW";

        const cardInfo = {
            parentNode,
            plantName,
            latinName,
            stu,
            status:"INTERVIEW",
            notes
        }

        const plantExist = interViewList.find(item => item.plantName == cardInfo.plantName);

        if(!plantExist){
            interViewList.push(cardInfo);
        }
        // console.log(interviewList);

              rejectList=rejectList.filter(item => item.plantName != cardInfo.plantName);

        calculateCount();

        if(currentStatus == "reject-filter-btn"){
            renderRejected();
        }


    }


   else if(event.target.classList.contains("reject-btn")){ 
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode);

        const plantName = parentNode.querySelector(".plantName").innerText;
        const latinName = parentNode.querySelector(".latinName").innerText;
        const stu = parentNode.querySelector(".stu").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText="REJECTED";

        const cardInfo = {
            parentNode,
            plantName,
            latinName,
            stu,
            status:"REJECTED",
            notes
        }

        const plantExist = rejectList.find(item => item.plantName == cardInfo.plantName);

        if(!plantExist){
            rejectList.push(cardInfo);
        }
        // console.log(interviewList);

            interViewList=interViewList.filter(item => item.plantName != cardInfo.plantName);

            if(currentStatus == "interview-filter-btn" ){
                renderInterView();
            }

        calculateCount();

 

    }
})

function renderInterView(){
    filterSection.innerHTML = ' ' ;

    if(interViewList.length == 0){
        filterSection.innerHTML = `
        <div class="text-center border border-l-purple-500 border-r-amber-500 border-t-blue-900 border-b-red-700  rounded-2xl   p-4 md:p-8 shadow-xl/30  ring-2 mb-8 md:h-145 
        flex items-center justify-center flex-col">
        
        
        <img src="jobs.png" alt="Try again" class="text-center w-[200px] mx-auto ">

         <h1 class="text-5xl font-bold mb-7">No Jobs available</h1>

         <p class ="text-2xl text-gray-500">Check back home for new job operation</P>


        </div>
        `
    }
    for(inter of interViewList){
        let div = document.createElement("div");
        
        div.innerHTML = `
        
          <div class="flex flex-col md:flex-row  gap-6 justify-between border border-l-purple-500 border-r-amber-500 border-t-blue-900 border-b-red-700  rounded-2xl   p-4 md:p-8 shadow-xl/30  ring-2">

                <div class="space-y-4 md:space-y-8">
                    
                    <div>
                        <h2 class="plantName  text-lg md:text-2xl font-bold">${inter.plantName}</h2>
                        <p class="latinName text-[20px] text-gray-500">React Native Developer</p>
                    </div>
                    <div>
                        <p class="stu text-gray-500">Remote • Full-time •$130,000 - $175000</p>
                    </div>
                    <div>
                        <button class="status btn w-35 ">${inter.status}</button>
                    </div>
                    <div>
                        <p class="notes text-gray-500">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>

                    <div>
                        <button class="interview-btn btn w-35 py-6 text-green-500 ">INTERVIEW</button>
                        <button class="reject-btn btn w-35 py-6 text-red-500">REJECTED</button>
                    </div>
 
                </div>

                <div>
                    <i class="fa-solid fa-trash-can"></i>
                </div>

            </div>
        
        `
        filterSection.appendChild(div);
    }
}
function renderRejected(){
    filterSection.innerHTML = ' ' ;

      if(rejectList.length == 0){
        filterSection.innerHTML = `
        <div class="text-center border border-l-purple-500 border-r-amber-500 border-t-blue-900 border-b-red-700  rounded-2xl   p-4 md:p-8 shadow-xl/30  ring-2 mb-8 md:h-145 
        flex items-center justify-center flex-col">
        
        
        <img src="jobs.png" alt="Try again" class="text-center w-[200px] mx-auto ">

         <h1 class="text-5xl font-bold mb-7">No Jobs available</h1>

         <p class ="text-2xl text-gray-500">Check back home for new job operation</P>


        </div>
        `
    }


    for(reject of rejectList){
        let div = document.createElement("div");

        div.innerHTML = `
        
          <div class="flex flex-col md:flex-row  gap-6 justify-between border border-l-purple-500 border-r-amber-500 border-t-blue-900 border-b-red-700  rounded-2xl   p-4 md:p-8 shadow-xl/30  ring-2">

                <div class="space-y-4 md:space-y-8">
                    
                    <div>
                        <h2 class="plantName  text-lg md:text-2xl font-bold">${reject.plantName}</h2>
                        <p class="latinName text-[20px] text-gray-500">React Native Developer</p>
                    </div>
                    <div>
                        <p class="stu text-gray-500">Remote • Full-time •$130,000 - $175000</p>
                    </div>
                    <div>
                        <button class="status btn w-35 ">${reject.status}</button>
                    </div>
                    <div>
                        <p class="notes text-gray-500">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>

                    <div>
                        <button class="interview-btn btn w-35 py-6 text-green-500 ">INTERVIEW</button>
                        <button class="reject-btn btn w-35 py-6 text-red-500">REJECTED</button>
                    </div>
 
                </div>

                <div>
                    <i class="fa-solid fa-trash-can"></i>
                </div>

            </div>
        
        `
        filterSection.appendChild(div);
    }
}