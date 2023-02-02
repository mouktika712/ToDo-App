
// for adding line through on the task when selected
var checks = document.getElementsByName('task[]');

console.log(checks);

// Adding event listener to all the elements in the array
checks.forEach(function(check){
  check.addEventListener('click', checkIndex);
});

// function for adding line-through to the task name in task card
function checkIndex(event){
//   console.log( Array.from(checks).indexOf(event.target) );

    let index = Array.from(checks).indexOf(event.target);

    let name = document.getElementsByClassName('task-name');

    name[index].classList.toggle("line-through");
}