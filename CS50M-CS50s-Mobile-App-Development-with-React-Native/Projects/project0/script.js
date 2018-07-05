(function () {

    /*
    const classNames = {
        TODO_ITEM: 'todo-container',
        TODO_CHECKBOX: 'todo-checkbox',
        TODO_TEXT: 'todo-text',
        TODO_DELETE: 'todo-delete',
    }
    */

    // collect todo button and attach event Listener
    const toDoButton = document.getElementById('todo-button')
    toDoButton.addEventListener('click', () => newTodo())

    // collect list, itemCountSpan and uncheckedCountSpan
    const list = document.getElementById('todo-list')
    const itemCountSpan = document.getElementById('item-count')
    const uncheckedCountSpan = document.getElementById('unchecked-count')

    // initialize all count values
    let itemCount = 0;
    let uncheckedCount = 0;
    let i = 0;

    // update ItemCount value
    function updateItemCount(remove = false) {
        if (remove) {
            itemCount--
        }

        itemCountSpan.innerText = itemCount
    }

    // update UncheckedCount value
    function updateUncheckedCount(remove = false) {
        if (remove) {
            uncheckedCount--
        }

        uncheckedCountSpan.innerText = uncheckedCount
    }

    // update UncheckedCount value on input check/uncheck
    function updateUncheckedCountonCheck(checked = true) {
        if (checked) {
            uncheckedCount--
        } else {
            uncheckedCount++
        }

        uncheckedCountSpan.innerText = uncheckedCount
    }

    // main function for handeling TODO section
    function newTodo() {

        // Increment 
        // itemCount and uncheckedCount 
        // on every newTodo click
        itemCount++
        uncheckedCount++
        i++

        // Create <li> HTML element
        const li = document.createElement('LI')

        // append li to <ul>
        list.appendChild(li)

        // Create <input> HTML element, 
        // set type to checkbox, 
        // add id for label 
        // and listen for click Event on input
        const input = document.createElement('INPUT')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', `checkbox-id-${i}`)
        input.addEventListener('click', () => updateUncheckedCountonCheck(this.checked))

        // Create <label> HTML element,
        // add for to link it to input for better User Experience 
        // and populate Text of the new TODO item
        const label = document.createElement('LABEL')
        label.setAttribute('for', `checkbox-id-${i}`)
        label.innerText = `${i} This is New TODO item on my list`

        // Create <button> HTML element,
        // and populate Text of the button to Delete
        // and listen for click Event on button
        // and remove <li> item and update Counts
        const deleteButton = document.createElement('BUTTON')
        deleteButton.innerText = 'Delete'
        deleteButton.addEventListener('click', () => {
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

        // update counts
        updateUncheckedCount()
        updateItemCount()

    }

})()