class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    if (this.tabData === "all") {

      this.cards = document.querySelectorAll(".card");
 } else {
      this.cards = document.querySelectorAll(`.card[data-tab= '${this.tabData}']`);
 }
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // this.cards = Array.from(this.cards).map();

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
  

this.cards = Array.from(this.cards).map(function(card){
    return new TabCard(card)
  })

  this.tabElement.addEventListener("click", () => {this.selectTab()})
  
  }
  selectTab(){

    const tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active-tab");
}
  
  const cards = document.querySelectorAll(".card");
  for(let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  this.tabElement.classList.add("active-tab");
  this.cards.forEach(card => card.selectCard());
  }
}
class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;

  }

 selectCard() {
this.cardElement.style.display = "flex"
 }
}
let tabs = document.querySelectorAll(".tab");
tabs.forEach(function(tab) {
  return new TabLink(tab)
}); 