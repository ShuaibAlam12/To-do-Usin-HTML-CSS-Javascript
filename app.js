let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
btn.addEventListener("click", function () {
    if (inp.value.trim() === "") {
        return; // Do nothing if the input is empty
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";

})
let btns = document.querySelector("ul");
btns.addEventListener("click",function(event){

 if(event.target.nodeName === "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
 }

});
