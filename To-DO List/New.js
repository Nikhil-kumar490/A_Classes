function addOne(){
    var task= document.getElementById("taskInput").value;

    document.getElementById("todoItems").innerHTML += "<div  class='con'><div>"+task+"</div><div onclick='rem(this);'>X</div></div>";

    document.getElementById("taskInput").value="";
}

function rem(elem){
    var task2= elem.parentElement.innerText.split("\n")[0];

    document.getElementById("completedList").innerHTML +="<div  class='con'><div>"+task2+"</div><div onclick='com(this);'>X</div></div>";

    elem.parentElement.remove();

}

function com(el){
    el.parentElement.remove();
}