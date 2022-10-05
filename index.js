const ulList=document.getElementById("toDoList");
const inputAdd=document.getElementById("addItem");
const removeToDo=document.getElementById("removeButton")
const addItemButton=document.getElementById("submitButton");

const addToList=()=>{
    const inputText=inputAdd.value;
    const newItem=document.createElement('li');
    newItem.innerHTML=`<input type="checkbox" class='itemRemove'>${inputText}`;
    ulList.appendChild(newItem);
}
const removeFromList=()=>{
  const removeListItems=document.getElementsByClassName('itemRemove');
  for(let i=0;i<removeListItems.length; i++){
    console.log(removeListItems[i].checked);
    if(removeListItems[i].checked){
    ulList.removeChild(ulList.children[i]);
    }
}
}


