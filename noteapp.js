const form = document.querySelector('form');
const addNoteButton = document.querySelector('#addNote')
const noteTextArea = document.querySelector('.noteText')
const notesArea = document.querySelector('#notes');
const noteColor = document.querySelector('#noteColor');

const createElementAddClass = (element, className) => {
    const container = document.createElement(element)
    container.classList.add(className)
    return container;
}

const addNote = () => {
    const noteContainer = createElementAddClass('div', 'note')
    const noteTextContainer = createElementAddClass('div', 'note-text')
    const deleteButton = createElementAddClass('span', 'delete-note')
    deleteButton.innerHTML = '&#9986'

    noteContainer.classList.add(noteColor.value)

    let text = noteTextArea.value;
    noteTextContainer.innerHTML = text;
    noteTextContainer.setAttribute("contenteditable", "true")

    noteContainer.appendChild(noteTextContainer)
    noteContainer.appendChild(deleteButton);

    notesArea.appendChild(noteContainer);

    noteTextArea.value = '';
    noteTextArea.focus();

    eventListenerDeleteButton(deleteButton);
}

const eventListenerDeleteButton = (deleteButton) => {
    deleteButton.addEventListener('click', function (e) {
        e.stopPropagation();      
        deleteNote(e);
      });
}

const deleteNote = (e) => {
    let eventNote = e.target.parentNode;
    eventNote.parentNode.removeChild(eventNote);
  }

addNoteButton.addEventListener('click', function (e) {
    e.preventDefault();  
    addNote();
  })
