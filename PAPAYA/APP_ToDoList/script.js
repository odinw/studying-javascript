// get input and insert to list
const input = document.getElementById("taskInput");
const listUi = document.getElementById("listUi");

const listDiv = document.querySelector("#listDiv");

function addTask(task){
    console.log(input.value);
    if (IsStringEmpty(input.value)) return;

    const s = document.createElement("li");
    s.innerHTML = `
        <label>${input.value}</label>
        <button class="recycle">🗑️</button>
    `
    s.addEventListener("click", function () {
        s.remove();
    });
    listUi.append(s);
    input.value = "";
}

function IsStringEmpty(s){
    if (s === null || s.trim() === "")
        return true;
    else
        return false;
}

submitBtn.addEventListener("click", addTask);