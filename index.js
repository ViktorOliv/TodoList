let inputValue = document.querySelector("#enterTask");
let button = document.querySelector("#pushTask");
let task = document.querySelector("#taskArea") ;
let deleteTaskButton = document.querySelectorAll(".delete");

    console.log(deleteTaskButton);

button.addEventListener("click", addTask);

function addTask() {
    let value = inputValue.value;
    if (value !== "") {
        task.innerHTML +=        
        "<div class='taskBlock'> <div class='task standardSize'>" + value + "</div>     <button class='delete'> <img src='free-icon-recycle-bin-3156999.png' alt='Delete'></button>  </div>";
        inputValue.value = "";
    } else {
        return;
    }
}
/////////////////////////////////////////////
    deleteTaskButton.forEach ( (del) => {
        del.addEventListener("click", (e) => {
            e.target.parentNode.remove();
            console.log("asdasd");
        });
    });


for (let i = 0; i < deleteTaskButton.length; i++) {
    const element = array[i];
    element.addEventListener("click", deleteTask);
}

function deleteTask() {
    this.parentNode.remove();
    console.log("asdasd");
}





