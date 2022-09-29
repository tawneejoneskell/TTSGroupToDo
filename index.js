const ulList=document.getElementById("toDoList");
const inputAdd=document.getElementById("addItem");
const addItemButton=document.getElementById("submitButton");

const addToList=()=>{
    const inputText=inputAdd.value;
    const newItem=document.createElement('li');
    newItem.innerHTML=`<input type="radio"><input type="checkbox">${inputText}`;
    ulList.appendChild(newItem);

}

