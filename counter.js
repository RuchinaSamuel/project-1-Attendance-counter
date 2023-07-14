let count = 0;
let counted = document.getElementById("count")
let saveEl = document.getElementById("save-el")

function increment(){
    count +=1
    counted.textContent = count;
}

function save(){
let saved = ` ${count} ${"-"}`
saveEl.textContent += saved;
counted.textContent =0;
count = 0;
}
