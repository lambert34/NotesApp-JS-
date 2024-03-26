const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');

// написать функцию createNote
// добавить кнопку и повесить обработчик событий

function createNote(title, text) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
    <div class="note-header">
    <p id="note-title">${title}</p>
    <textarea id="note-title-input" class="hidden">${title}</textarea>
    <div>
    <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>
    <p id="note-text">${text}</p>
    `;

    return noteEl;
};

addBtn.addEventListener('click', (e) => {
    const el = createNote('Заголовок', 'Текст заметки');
    notesEl.appendChild(el);
})

