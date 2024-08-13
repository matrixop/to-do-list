let input = document.querySelector(".add");
let btn = document.querySelector(".btn");
let cont = document.querySelector(".listcont");

    cont.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
          savework();
        } else if (e.target.tagName === "SPAN") {
          e.target.parentElement.remove();
          savework();
        }
      });
      

function add() {

    if(input.value===''){
        alert('Add text !')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        cont.appendChild(li);
      
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      
        input.value = "";
        savework();
    }
   
  }



btn.addEventListener("click", add);

function savework(){
    localStorage.setItem('data',cont.innerHTML);
}

function load(){
    cont.innerHTML=localStorage.getItem('data');
}

load();