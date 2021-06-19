var input=document.getElementById("input");
var pen=document.getElementById("pen");
var ul = document.querySelector("ul");
function createList(){
    var li =document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    var dbtn = document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dbtn);
    input.value="";
    dbtn.onclick=function(){
        li.classList.add("delete")
    }
    li.onclick=function(){
        li.classList.toggle("done")
    }
    
};
pen.onclick=function(){
    if (input.value.length > 0){
    createList()
    }
};
    

