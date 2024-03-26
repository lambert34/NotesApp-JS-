const mainEl = document.querySelector('.main');

// написать функцию createNote
// добавить кнопку и повесить обработчик событий

function createNote(title, text) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
        <div class="note-header">
        <p>${title}</p>
        <div class="note-actions">
        <button class="note-edit"></button>
        <button class="note-delete"></button>
        </div>
        </div>
        `;
}