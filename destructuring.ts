let otherArr = [0, "abc", false]
const [num, s, flag] = otherArr;

console.log(`num = ${num}, s = ${s}, flag = ${flag}`);

var todo = {
    id: 1,
    todoName: "Clean up kitchen"
}

const {id, todoName: taskName} = todo

console.log(`${id} ${taskName} ${taskName}`)