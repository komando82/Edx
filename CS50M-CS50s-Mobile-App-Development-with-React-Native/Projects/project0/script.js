const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0;
let uncheckedCount = 0;
let i = 0;

function updateItemCount(remove = false) {
    if (remove) {
        itemCount--
    }

    itemCountSpan.innerText = itemCount
}

function updateUncheckedCount(remove = false) {
    if (remove) {
        uncheckedCount--
    }

    uncheckedCountSpan.innerText = uncheckedCount
}

function updateUncheckedCountonCheck(checked = true) {
    if (checked) {
        uncheckedCount--
    } else {
        uncheckedCount++
    }

    uncheckedCountSpan.innerText = uncheckedCount
}

function newTodo() {

    // Increment 
    // itemCount and uncheckedCount 
    // on every newTodo click
    itemCount++
    uncheckedCount++
    i++

    // Create <li> HTML element
    const li = document.createElement('LI')

    // Create <input> HTML element, 
    // set type to checkbox, 
    // add id for label 
    // and listen for click Event on input
    const input = document.createElement('INPUT')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', `checkbox-id-${itemCount}`)
    input.addEventListener('click', function() {
        updateUncheckedCountonCheck(this.checked)
    })

    // Create <label> HTML element,
    // add for to link it to input for better User Experience 
    // and populate Text of the new TODO item
    const label = document.createElement('LABEL')
    label.setAttribute('for', `checkbox-id-${itemCount}`)
    label.innerText = `${i} This is New TODO item on my list`

    // Create <button> HTML element,
    // and populate Text of the button to Delete
    // and listen for click Event on button
    // and remove <li> item and update Counts
    const deleteButton = document.createElement('BUTTON')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', function() {
        if (!input.checked) {
            updateUncheckedCount(true)
        }

        updateItemCount(true)

        list.removeChild(li)
    })

    // append input, label and delete button to <li>
    li.appendChild(input)
    li.appendChild(label)
    li.appendChild(deleteButton)

    // append li to <ul>
    list.appendChild(li)

    // update counts
    updateUncheckedCount()
    updateItemCount()

}
