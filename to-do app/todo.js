
let todoList = []
const inputValue = document.querySelector("#todo")

const items = JSON.parse(localStorage.getItem("todoItems"))
console.log(items)
todoList.push(items)
const createList = () => {
    List = inputValue.value

    todoList.push(List)
    console.log(todoList)
    inputValue.value = ""

    localStorage.setItem('todoItems', JSON.stringify(todoList))


    document.querySelector("#list").innerHTML = todoList

}