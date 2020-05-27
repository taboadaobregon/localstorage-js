
//obtnemos el evento submit y le pasamos la funcion savetask
document.getElementById('formTask').addEventListener('submit', saveTask);



function saveTask(){
    //capturamos los valores de los campos con la funcion document query seelector
    var title = document.querySelector("#title").value;
    var description = document.querySelector("#description").value;

    //creamos un objeto de tipo json y les pasamos title y descripcion
    var task = {
        title,
        description
    }

    //condiconamos si es ta nulo entoces se va crear una nueva tarea 
    // y si existe solo actualizara
    if(localStorage.getItem('task') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('task',JSON.stringify(tasks));
    }else
    {
        let tasks = JSON.parse(localStorage.getItem('task'));
        tasks.push(task);
        localStorage.setItem('task', JSON.stringify(tasks));
    }

    //reseteamos el formulario
    document.getElementById('formTask').reset();
    //llamamos la funcion gettask para mostrar en pantalla lo que agregamos
    getTasks();

}


//creamos la funcion delete task para eliminar el titulo
function deleteTask(title){
    //creamos una variable task que ya esta creada pero le convertimos a entero con el metodo json parse
    //y recorremos su valor que trae la variable task
    // y condicionamos si la varaible task es igual a title me va a cortar el indice + 1
    let tasks = JSON.parse(localStorage.getItem('task'));
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].title == title){
            tasks.splice(i,1);
        }
        
    }

    //agregamos tasks para que se recargue la pagina
    localStorage.setItem('task',JSON.stringify(tasks));
    //llamamos la funcion
    getTasks();

}

//creamos la funcion mostrartask
function getTasks(){
    //cremos la varaible task con el key que ya existe y obtnemos el id del documento html donde se va a mostrar el contenido
    let tasks = JSON.parse(localStorage.getItem('task'));
    let taskview = document.querySelector("#tasks");
    //agregamos un valor vacio con la funcion iiner html
    taskview.innerHTML = "";

    //recorremos la variable task y su contenido 
    for(let i = 0; i < tasks.length; i++){
        let title = tasks[i].title;
        let description = tasks[i].description;

        taskview.innerHTML +=`<div class="card mb-3">
        <div class="card-body">
        <p>${title} - ${description}
        <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5"> Delete </a>
        </p>
        </div>
        </div>
        `;
    }

}

getTasks();

/*function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();*/