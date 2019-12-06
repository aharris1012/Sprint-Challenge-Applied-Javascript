// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const EntryHeader= document.querySelector(".header-container");
 
function Header() {

    
    
    const Head= document.createElement("div");
    const date= document.createElement("span");
    const LambTimes= document.createElement("h1");
    const Temp= document.createElement("span");


    Head.classList.add("header");
    date.classList.add("date");
    Temp.classList.add("temp");


    Head.appendChild(date);
    Head.appendChild(LambTimes);
    Head.appendChild(Temp);


    
    date.textContent="March 28,2019";
    LambTimes.textContent="Lambda Times";
    Temp.textContent="98 Deg";

    

   return Head;
}

// console.log(Header)
EntryHeader.appendChild(Head);

