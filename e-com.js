let card = document.querySelectorAll(".card");
let submit = document.getElementById("submit");
let num = 0;

card.forEach(function (cards) {
    cards.addEventListener("click", function () {
        console.log(cards);

        num++;
        document.querySelector("#cartnum").innerHTML = num;

        let div = document.createElement("div");
        div.classList.add("cartlist");
        div.innerHTML = `
          <img src=${cards.firstElementChild.src}>
            <p>$199</p>
        `
        document.querySelector(".cartitems").appendChild(div)
    })
}
)

function remove(){
    num -- ;
    let cartlist = document.querySelectorAll (".cartlist");
    cartlist.forEach(function(currentItem){
        currentItem.addEventListener("click", function(){
            if(num == 0 ){
                document.querySelector(".cartitem").style.display = "none"
            }
            currentItem.style.display = "none"
              document.querySelector("#cartnum").innerHTML = num;
        })
    }
)
}




submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    
    if(email.value == "" && pass.value == ""){
        alert("enter email and password")
    } else{
        alert("thank you for login")
    }
})