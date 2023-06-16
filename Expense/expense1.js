var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('expense').value;
  var newDiscription = document.getElementById('discription').value;
  var newCategory = document.getElementById('category').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newDiscription));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newCategory));
  li.appendChild(document.createTextNode(" "));



//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode(' Delete Expense '));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);


//   // Create edit button element
//   var editBtn = document.createElement('button');
//   // Add classes to edit button
//   editBtn.className = 'btn-sm float-right';
//   // Append text node
//   editBtn.appendChild(document.createTextNode(' Edit Expense '));
//   // Append button to li
//   li.appendChild(editBtn);
//   // Append li to list
//   itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}




function test(){
    // e.preventDefault();
    // RETRIEVING DATA
    let expenseId = document.getElementById('expense').value;
    let discriptionId = document.getElementById('discription').value;
    let categoryId = document.getElementById('category').value;
    //  STORING DATA
    let user=localStorage.setItem("EXPENSE", expenseId);
    let pass=localStorage.setItem("DISCRIPTION", discriptionId);
    let email=localStorage.setItem("CATEGORY", categoryId);

    const myObj={
        EXPENSE: expenseId,
        DISCRIPTION: discriptionId,
        CATEGORY: categoryId
    }
    
    // alert(userId+passwordId+emailId);

    let object=localStorage.setItem(discriptionId , JSON.stringify(myObj));
    // console.log(myObj);
    showUserOnScreen(myObj);

    function showUserOnScreen(myObj){
        let parent=document.getElementById('items');
        let child=document.createElement('li');
        child.textContent= myObj.EXPENSE + '-' + myObj.DISCRIPTION + '-' + myObj.CATEGORY + '      ';
        // child.innerHTML= `<li><input type="button" value="delete"></li>`
        parent.appendChild(child);
    

        // ADDING DELETE BUTTON
        const deleteButton= document.createElement('input')
        deleteButton.type="button"
        deleteButton.value="Delete"
        deleteButton.onclick= () => {
            localStorage.removeItem(myObj.DISCRIPTION)
            parent.removeChild(child)
        }
        child.appendChild(deleteButton)

// ADDING EDIT BUTTON
        let expense_Id = document.getElementById('expense');
        let discription_Id = document.getElementById('discription');
        let category_Id = document.getElementById('category');

         const editButton= document.createElement('input')
         editButton.type="button"
         editButton.value="Edit"
         editButton.onclick = () => {
            expense_Id.value=myObj.EXPENSE;
            discription_Id.value=myObj.DISCRIPTION;
            category_Id.value=myObj.CATEGORY;
            parent.removeChild(child)
         }
         child.appendChild(editButton)


         
    
    }

    // window.addEventListener("DOMContentLoaded",() =>{
    //     const localStorageObj=localStorage;
    //     const localStoragekeys=Object.keys(localStorageObj);

    //     for(var i=0;i<localStoragekeys.length;i++){
    //         const key =localStoragekeys[i]
    //         const userDetailsString=localStorageObj[key];
    //         const userDetailsObj=JSON.parse(userDetailsString);
    //         showUserOnScreen(userDetailsObj);
    //     }
    // })


    
    // console.log(parent)
    // parent.innerHTML=parent.innerHTML+`<li>${myObj.USERNAME} - ${myObj.PASSWORD} - ${myObj.EMAIL}</li>`

}
// document.onload=showUserOnScreen();

//     let expenseId = document.getElementById('expense').value;
//     let discriptionId = document.getElementById('discription').value;
//     let categoryId = document.getElementById('category').value;

//     const myObj={
//         EXPENSE: expenseId,
//         DISCRIPTION: discriptionId,
//         CATEGORY: categoryId
//     }
//     showUserOnScreen(myObj);

//     function showUserOnScreen(myObj){
//         let parent=document.getElementById('items');
//         let child=document.createElement('li');
//         child.textContent= myObj.EXPENSE + '-' + myObj.DISCRIPTION + '-' + myObj.CATEGORY + '      ';
//         // child.innerHTML= `<li><input type="button" value="delete"></li>`
//         parent.appendChild(child);
//     }
// // let discriptionId = document.getElementById('discription').value;
// let refresh=JSON.parse(localStorage.getItem('CATEGORY').value);
// console.log(refresh)
 