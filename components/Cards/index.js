// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const EntryCards= document.querySelector(".cards-container");



axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response =>{
    // console.log(response);
    const Topics=Object.values(response.data.articles);
    Topics.forEach( e =>{
        e.forEach(x =>{
            EntryCards.appendChild(Cards(x.headline, x.authorPhoto, x.authorName));

        });
    });
})
.catch(error=>{
    console.log(error);
});




function Cards(title, Pic, name){
    for(var key in response.data.articles){

        let name= key;
        console.log(name);

        for (let i =0; i < response.data.articles[name].length; i++){
    console.log(i);
    const Card=document.createElement("div")
    const HeadLine=document.createElement("div")
    const Author=document.createElement("div")
    const ImgContainer=document.createElement("div")
    const Img=document.createElement("img")
    const ByAuthor= document.createElement("span")

    Card.classList.add("card")
    HeadLine.classList.add("headline")
    Author.classList.add("author")
    ImgContainer.classList.add("img-container")
    

    Card.appendChild(HeadLine)
    Card.appendChild(Author)
    Card.appendChild(ImgContainer)
    ImgContainer.appendChild(Img)
    Card.appendChild(ByAuthor)

    HeadLine.textContent= title;
    Img.src= Pic;
    ByAuthor.textContent=name;

        }//loop lenght//
    }//closes loop// 
    return Card;
}//closes Cards//
