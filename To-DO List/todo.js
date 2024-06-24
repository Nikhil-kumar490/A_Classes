document.getElementById("todo-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var inputValue = document.getElementById("todo-input").value;
  
    if (inputValue === "") {
        alert("Please enter a task!");
        return;
    }
  
    var li = document.createElement("li");
    li.textContent = inputValue;
  
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });
  
    document.getElementById("todo-list").appendChild(li);
  
    document.getElementById("todo-input").value = "";
});