const token = localStorage.getItem("token");

const edit = `<?xml version="1.0"?><svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`

const cross = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="20 -5 100 100">
<path d="M 46 13 C 44.35503 13 43 14.35503 43 16 L 43 18 L 32.265625 18 C 30.510922 18 28.879517 18.922811 27.976562 20.427734 L 26.433594 23 L 23 23 C 20.802666 23 19 24.802666 19 27 C 19 29.197334 20.802666 31 23 31 L 24.074219 31 L 27.648438 77.458984 C 27.88773 80.575775 30.504529 83 33.630859 83 L 66.369141 83 C 69.495471 83 72.11227 80.575775 72.351562 77.458984 L 75.925781 31 L 77 31 C 79.197334 31 81 29.197334 81 27 C 81 24.802666 79.197334 23 77 23 L 73.566406 23 L 72.023438 20.427734 C 71.120481 18.922811 69.489078 18 67.734375 18 L 57 18 L 57 16 C 57 14.35503 55.64497 13 54 13 L 46 13 z M 46 15 L 54 15 C 54.56503 15 55 15.43497 55 16 L 55 18 L 45 18 L 45 16 C 45 15.43497 45.43497 15 46 15 z M 32.265625 20 L 43.832031 20 A 1.0001 1.0001 0 0 0 44.158203 20 L 55.832031 20 A 1.0001 1.0001 0 0 0 56.158203 20 L 67.734375 20 C 68.789672 20 69.763595 20.551955 70.306641 21.457031 L 71.833984 24 L 68.5 24 A 0.50005 0.50005 0 1 0 68.5 25 L 73.5 25 L 77 25 C 78.116666 25 79 25.883334 79 27 C 79 28.116666 78.116666 29 77 29 L 23 29 C 21.883334 29 21 28.116666 21 27 C 21 25.883334 21.883334 25 23 25 L 27 25 L 61.5 25 A 0.50005 0.50005 0 1 0 61.5 24 L 28.166016 24 L 29.693359 21.457031 C 30.236405 20.551955 31.210328 20 32.265625 20 z M 64.5 24 A 0.50005 0.50005 0 1 0 64.5 25 L 66.5 25 A 0.50005 0.50005 0 1 0 66.5 24 L 64.5 24 z M 26.078125 31 L 73.921875 31 L 70.357422 77.306641 C 70.196715 79.39985 68.46881 81 66.369141 81 L 33.630859 81 C 31.53119 81 29.803285 79.39985 29.642578 77.306641 L 26.078125 31 z M 38 35 C 36.348906 35 35 36.348906 35 38 L 35 73 C 35 74.651094 36.348906 76 38 76 C 39.651094 76 41 74.651094 41 73 L 41 38 C 41 36.348906 39.651094 35 38 35 z M 50 35 C 48.348906 35 47 36.348906 47 38 L 47 73 C 47 74.651094 48.348906 76 50 76 C 51.651094 76 53 74.651094 53 73 L 53 69.5 A 0.50005 0.50005 0 1 0 52 69.5 L 52 73 C 52 74.110906 51.110906 75 50 75 C 48.889094 75 48 74.110906 48 73 L 48 38 C 48 36.889094 48.889094 36 50 36 C 51.110906 36 52 36.889094 52 38 L 52 63.5 A 0.50005 0.50005 0 1 0 53 63.5 L 53 38 C 53 36.348906 51.651094 35 50 35 z M 62 35 C 60.348906 35 59 36.348906 59 38 L 59 39.5 A 0.50005 0.50005 0 1 0 60 39.5 L 60 38 C 60 36.889094 60.889094 36 62 36 C 63.110906 36 64 36.889094 64 38 L 64 73 C 64 74.110906 63.110906 75 62 75 C 60.889094 75 60 74.110906 60 73 L 60 47.5 A 0.50005 0.50005 0 1 0 59 47.5 L 59 73 C 59 74.651094 60.348906 76 62 76 C 63.651094 76 65 74.651094 65 73 L 65 38 C 65 36.348906 63.651094 35 62 35 z M 38 36 C 39.110906 36 40 36.889094 40 38 L 40 73 C 40 74.110906 39.110906 75 38 75 C 36.889094 75 36 74.110906 36 73 L 36 38 C 36 36.889094 36.889094 36 38 36 z M 59.492188 41.992188 A 0.50005 0.50005 0 0 0 59 42.5 L 59 44.5 A 0.50005 0.50005 0 1 0 60 44.5 L 60 42.5 A 0.50005 0.50005 0 0 0 59.492188 41.992188 z"></path>
</svg>`


if (!token || token.length == 0) {
  alert("Please Login to access this page");
  window.location.href = "index.html";
}

async function getTodos() {
  const response = await axios.get("https://todo-with-db-dzxy.vercel.app/todos", {
    headers : {
      token : token,
      'Content-Type': 'application/json'
    }
  });

  response.data.map((data) => {
    const { _id, title, done, time, date } = data;
    renderTodo( _id, title, done, time, date );
  });

}
getTodos();

async function addTodo() {  // addtodo() calls in html
  const todoInput = document.getElementById("todo-input");

  const response = await axios.post("https://todo-with-db-dzxy.vercel.app/todo", 
    {
     title : todoInput.value.trim()
    },
    {
      headers : {
        token : token
      }
    });

  const { todoId, title, done, time, date } = response.data;
  
  renderTodo( todoId, title, done, time, date );

  todoInput.value = "";
}

async function renderTodo( _id, title, done, time, date ) {
  const todoList = document.getElementById("todo-list");

  const liEl = document.createElement("li");
  liEl.setAttribute("todoId", _id);
  liEl.setAttribute("done", done);



  const spanElforTitle = document.createElement("span");
  spanElforTitle.id = `${_id}`;
  spanElforTitle.innerHTML = title;
  spanElforTitle.ondblclick = function() {
    editTodoInline(spanElforTitle, `${spanElforTitle.id}`);
  }

  const divEl = document.createElement("div");
  divEl.id = "tools"; // done || edit || delete. 

  const spanElforUndone = document.createElement("span");
  spanElforUndone.className = "operations";
  spanElforUndone.innerHTML = `<svg class="${_id}" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
</svg>`;
  spanElforUndone.style = `margin: 4px 0px 0px 0px;`
  spanElforUndone.onclick = function () {
    if (liEl.getAttribute("done") == "true") {
      todoUndone(_id)
    } else {
      todoDone(_id);
    }
  };

  
  const spanElforEdit = document.createElement("span");
  spanElforEdit.className = "operations";
  spanElforEdit.innerHTML = edit;
  spanElforEdit.onclick = () => {
    editTodoInline(spanElforTitle, _id);
  }
  
  const spanElforCross = document.createElement("span");
  spanElforCross.className = "operations";
  spanElforCross.innerHTML = cross;
  spanElforCross.onclick = () => {
    deleteButton(_id);
  }
  
  const spanElforTime = document.createElement("span");
  spanElforTime.innerHTML = time;
  
  const spanElforDate = document.createElement("span");
  spanElforDate.innerHTML = date;
  
  
  divEl.appendChild(spanElforUndone);
  divEl.appendChild(spanElforEdit);
  divEl.appendChild(spanElforCross);
  divEl.appendChild(spanElforTime);
  divEl.appendChild(spanElforDate);
  
  liEl.appendChild(spanElforTitle);
  
  liEl.appendChild(divEl);
  
  todoList.appendChild(liEl);
  
  if (liEl.getAttribute("done") == "true") {
  document.getElementById(`${_id}`).style.textDecoration = "line-through";
  document.getElementsByClassName(`${_id}`)[0].style.backgroundColor = "#00ff05";
  document.getElementsByClassName(`${_id}`)[0].style.borderRadius = "10px";
  }
}



async function todoDone(_id) {
  alert("task complete");
  await axios.post("https://todo-with-db-dzxy.vercel.app/done", {
    todoId : _id
  },
  {
    headers : {
      token : token
    }
  });

  document.getElementById(`${_id}`).style.textDecoration = "line-through";
  document.getElementsByClassName(`${_id}`)[0].style.backgroundColor = "#00ff05";
  document.getElementsByClassName(`${_id}`)[0].style.borderRadius = "10px";

  document.getElementById(`${_id}`).parentElement.setAttribute("done", "true");

}

async function todoUndone(_id) {
  alert("task incomplete");
  await axios.post("https://todo-with-db-dzxy.vercel.app/undone", {
    todoId : _id
  },
  {
    headers : {
      token : token
    }
  });

  document.getElementById(`${_id}`).style.textDecoration = "none";
  document.getElementsByClassName(`${_id}`)[0].style.backgroundColor = "#f4f4f4";

  document.getElementById(`${_id}`).parentElement.setAttribute("done", "false");
}


function editTodoInline(spanEl, id) {
  const input = document.createElement('input');
  input.value = spanEl.innerText;
  input.classList.add('edit-input');

  const originalText = spanEl.innerText;
  const parentLi = spanEl.closest('li');

  // Replace the text span with the input field
  spanEl.replaceWith(input);
  input.focus();

  // Find the edit button and change to 'Save'
  const editButton = parentLi.querySelector('.operations:nth-child(2)');
  
  
  const originalEditHTML = editButton.innerHTML;
  editButton.innerHTML = '💾'; // Save icon

  const saveChanges = async () => {
    const newText = input.value.trim();
    if (newText !== '') {
      try {
        const response = await axios.post(`https://todo-with-db-dzxy.vercel.app/update`,
          {
            title: newText,
            todoId: id
          },
          {
            headers: {
              'Content-Type': 'application/json',
              token: token
            }
          });

        input.replaceWith(spanEl);

        const title = response.data.title;

        spanEl.innerHTML = title;

        editButton.innerHTML = edit;  // edit svg

        editButton.onclick = () => {
        editTodoInline(spanEl, id);
        }
      } catch (err) {
        console.error('Error updating todo:', err);
      }
    } else {
      // Restore original text if empty input
      input.replaceWith(spanEl);
      spanEl.innerText = originalText;
      editButton.innerHTML = originalEditHTML;
    }
  };

  // Pressing Enter saves the edit
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveChanges();
    }
  });

  // Clicking Save button saves the edit
  editButton.onclick = () => {
    saveChanges();
  };
}


// runs addTodo() after clicking enter key on keybord
const todoInput = document.getElementById("todo-input");
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
});


async function deleteButton(id) {
  try {
    await axios.post("https://todo-with-db-dzxy.vercel.app/deletes", {
      todoId : id
    }, {
      headers : {
        token : token
      }
    });

    const deletedSpanEl = document.getElementById(id)
    deletedSpanEl.parentElement.remove(); // deletes the entire list element
    
    console.log("todo deleted succefully");
    
    
  } catch (error) {
    alert("problem while deleting the todo");
  }
}

function Logout() {

  localStorage.removeItem("token");

  window.location.href = "index.html";
  
}

// function editTodoByButton(id) {
//   const li = [...todoList.children].find(li => {
//     return li.querySelector('button[onclick^="editTodoByButton"]').outerHTML.includes(id);
//   });

//   const span = li.querySelector('span');
//   editTodoInline(span, id);
// }

// function editTodoInline(span, id) {
//   const originalText = span.textContent;
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.value = originalText;

//   input.onblur = () => {
//     const newText = input.value.trim();
//     if (newText !== "") {
//       const index = todos.findIndex(t => t.id === id);
//       if (index !== -1) {
//         todos[index].text = newText;
//       }
//     }
//     renderTodos();
//   };

//   span.replaceWith(input);
//   input.focus();














// function renderTodos() {
//   todoList.innerHTML = '';
//   todos.forEach(todo => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <span ondblclick="editTodoInline(this, ${todo.id})">${todo.text}</span>
//       <button onclick="editTodoByButton(${todo.id})">Edit</button>
//       <button onclick="deleteTodo(${todo.id})">Delete</button>
//     `;
//     todoList.appendChild(li);
//   });
// }




// function deleteTodo(id) {
//   todos = todos.filter(t => t.id !== id);
//   renderTodos();
// }

// }










// function toggleDone(id) {
//   const todo = todos.find(t => t.id === id);
//   if (todo) {
//     todo.done = !todo.done;
//     renderTodos();
//   }
// }

// function deleteTodo(id) {
//   todos = todos.filter(t => t.id !== id);
//   renderTodos();
// }

// function editTodo(id) {
//   const todo = todos.find(t => t.id === id);
//   if (todo) {
//     const newText = prompt("Edit todo:", todo.text);
//     if (newText !== null && newText.trim() !== "") {
//       todo.text = newText.trim();
//       renderTodos();
//     }
//   }
// }