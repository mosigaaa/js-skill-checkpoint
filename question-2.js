// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
let walkthedog = {id:5, task: "Walk the dog"};
userTaskList[4] = walkthedog;
userTaskList[3] = {id:4, task: "Go to the gym"};
userTaskList.pop()
console.log(" Task id:" + userTaskList[userTaskList.length-1].id +", "+ userTaskList[userTaskList.length-1].task)