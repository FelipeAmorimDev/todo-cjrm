const formAddTodo = document.querySelector('.form-add-todo')
const taskList = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  const taskValue = formAddTodo.add.value.trim()
  const itemElement = document.createElement('li')

  if (taskValue.length > 0) {
    itemElement.innerHTML = `<span>${taskValue}</span><i class="far fa-trash-alt delete"></i>`
    itemElement.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
    taskList.insertAdjacentElement('beforeend', itemElement)

    event.target.reset()
  }
})

taskList.addEventListener('click', ({ target }) => {
const isADeletableIten = target.matches('.delete')
  if (isADeletableIten) {
    target.parentElement.remove()
  }
})