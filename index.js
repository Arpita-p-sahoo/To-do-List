let todo = [];



/**
 * @description show all the data
 * @author Arpita
 * @returns HTML block
 */

function showData() {

  console.log('show data');
  if (todo.length == 0) {
    document.getElementById("card").innerHTML = `
    <div >
    <h1 class="text-center"><i class="fa-solid fa-clipboard"></i></h1>
    <h4 class="text-center">No Items Yet</h4>
    </div>
    `;
  } else {
    document.getElementById("card").innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
      const item = document.getElementById("card");
      item.innerHTML += showCard(todo[i], i);
    }
  }
}
function showCard(todo, index) {
  return `
  <div class="col-3 sub" >
    <div class="alert alert-danger" > 
        <h5 class="card-title d-inline-block text-truncate">${todo.subject}  <span onclick="deleteData(${index})"><i class="fa-solid fa-circle-xmark"></i></span></h5>   
         <div class="lead">${todo.currtime}<br><h6 class="font-weight-bold">${todo.date}</h6></div>
    </div> 
   </div>
`;
}
/**
 * for adding one more data recieving the input value
 */
function addData() {
  if (validate().success) {
    let s1 = document.getElementById("subject").value;
    document.getElementById("subject").value = "";

    let time = new Date();
    let currtime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let currdate = day + "-" + month + "-" + year;

    let data = {
      subject: s1,
      currtime: currtime,
      date: currdate,
    };

    todo.unshift(data);
    showData();
  } else {
    alert(!validate().success ? validate().message : "something went wrong");
  }
}
/**
 * @description validate the input
 * @returns boolean value based on conditions
 *  */

function validate() {
  if (
    document.getElementById("subject").value == "" || document.getElementById("subject").value == null
  ) {
    return {
      success: false,
      message: "please enter data",
    };
  }
  return {
    success: true,
    message: "data is valid",
  };
}

/**
 * for deleting data index wise
 *  */
function deleteData(index) {
  console.log(index);
  if (confirm("Are you sure you want to delete")) {
    todo.splice(index, 1);
  }
  showData();
}

showData();


