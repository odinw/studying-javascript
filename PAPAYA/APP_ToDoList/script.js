// get input and insert to list
const input = document.getElementById("itemInput");
const listUi = document.getElementById("listUi");

const listDiv = document.querySelector("#listDiv");

function addItem(task){
    console.log(input.value);
    if (IsStringEmpty(input.value)) return;

    const item = document.createElement("li");
    item.innerHTML = `
        <label>${input.value}</label>
        <button class="recycle">🗑️</button>
    `
    item.addEventListener("click", function () {
        item.remove();
    });
    listUi.append(item);
    input.value = "";
}

function IsStringEmpty(s){
    if (s === null || s.trim() === "")
        return true;
    else
        return false;
}

addItemBtn.addEventListener("click", addItem);
itemInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter")
        addItem();
});