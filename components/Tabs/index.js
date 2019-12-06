// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response =>{
// console.log(response);
})


.catch(response =>{
    console.log(response,error);
});

const EntryTabs= document.querySelector(".tabs");

function Tabs(tab){
    
    let Tab=document.createElement("div")

    Tab.classList.add("tab")

    Tab.textContent=tab.data.topics[0];

    
    EntryTabs.prepend(Tab);
    return Tab;


}

console.log (Tabs)
