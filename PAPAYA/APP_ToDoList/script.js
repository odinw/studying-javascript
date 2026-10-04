// get input and insert to list
const input = document.getElementById("itemInput");
const listUi = document.getElementById("listUi");

function addItem(task){
    console.log(input.value);
    if (IsStringEmpty(input.value)) return;

    const item = document.createElement("li");
    item.innerHTML = `
        <input type="checkbox" class="doneCheckbox">
        <label>${input.value}</label>
        <button class="recycle">🗑️</button>
    `
    const recycle = item.querySelector(".recycle");
    recycle.addEventListener("click", function () {
        item.remove();
    });
    const doneCheckbox = item.querySelector(".doneCheckbox");
    doneCheckbox.addEventListener("change", function() {
        if (doneCheckbox.checked){
            item.style.textDecoration = "line-through";
            item.style.color = "#999";
            listUi.append(item);
        }
        else {
            item.style.textDecoration = "none";
            item.style.color = "";
            listUi.prepend(item);
        }
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