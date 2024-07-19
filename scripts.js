document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fonction pour récupérer les tâches du serveur
    function fetchTasks() {
        fetch('http://localhost:8080/tasks')
            .then(response => response.json())
            .then(tasks => {
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.classList.add('task-item');

                    const taskDesc = document.createElement('span');
                    taskDesc.textContent = task.description;
                    li.appendChild(taskDesc);

                    const editButton = document.createElement('button');
                    editButton.textContent = '+';
                    editButton.classList.add('edit-button');
                    li.appendChild(editButton);

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = '-';
                    deleteButton.classList.add('delete-button');
                    li.appendChild(deleteButton);

                    const addNoteButton = document.createElement('button');
                    addNoteButton.textContent = 'Add Note';
                    addNoteButton.classList.add('add-note-button');
                    li.appendChild(addNoteButton);

                    const noteTextarea = document.createElement('textarea');
                    noteTextarea.classList.add('task-note-textarea');
                    noteTextarea.placeholder = 'Click here to add notes';
                    li.appendChild(noteTextarea);

                    const saveNoteButton = document.createElement('button');
                    saveNoteButton.textContent = 'Save Note';
                    saveNoteButton.classList.add('save-note-button');
                    li.appendChild(saveNoteButton);

                    const deleteNoteButton = document.createElement('button');
                    deleteNoteButton.textContent = 'Delete Note';
                    deleteNoteButton.classList.add('delete-note-button');
                    li.appendChild(deleteNoteButton);

                    addNoteButton.style.display = 'none';
                    noteTextarea.style.display = 'none';
                    saveNoteButton.style.display = 'none';
                    deleteNoteButton.style.display = 'none';

                    addNoteButton.addEventListener('click', () => {
                        noteTextarea.style.display = 'block';
                        saveNoteButton.style.display = 'block';
                        deleteNoteButton.style.display = 'block';
                    });

                    saveNoteButton.addEventListener('click', () => {
                        const newNote = noteTextarea.value.trim();
                        if (newNote) {
                            fetch(`http://localhost:8080/tasks/${task.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ ...task, notes: newNote })
                            })
                            .then(response => response.json())
                            .then(updatedTask => {
                                task.notes = updatedTask.notes;
                            });
                        }
                    });

                    deleteNoteButton.addEventListener('click', () => {
                        noteTextarea.value = '';
                        noteTextarea.style.display = 'none';
                        saveNoteButton.style.display = 'none';
                        deleteNoteButton.style.display = 'none';
                        fetch(`http://localhost:8080/tasks/${task.id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ ...task, notes: '' })
                        });
                    });

                    editButton.addEventListener('click', () => {
                        const newDesc = prompt('Edit task description:', task.description);
                        if (newDesc) {
                            fetch(`http://localhost:8080/tasks/${task.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ ...task, description: newDesc })
                            })
                            .then(response => response.json())
                            .then(updatedTask => {
                                task.description = updatedTask.description;
                                taskDesc.textContent = updatedTask.description;
                            });
                        }
                    });

                    deleteButton.addEventListener('click', () => {
                        fetch(`http://localhost:8080/tasks/${task.id}`, {
                            method: 'DELETE'
                        })
                        .then(() => {
                            taskList.removeChild(li);
                        });
                    });

                    li.addEventListener('mouseover', () => {
                        addNoteButton.style.display = 'block';
                        noteTextarea.style.display = 'block';
                        saveNoteButton.style.display = 'block';
                        deleteNoteButton.style.display = 'block';
                    });
                    li.addEventListener('mouseout', () => {
                        if (!noteTextarea.value.trim()) {
                            addNoteButton.style.display = 'none';
                            noteTextarea.style.display = 'none';
                            saveNoteButton.style.display = 'none';
                            deleteNoteButton.style.display = 'none';
                        }
                    });

                    taskList.appendChild(li);
                });
            });
    }

    // Ajouter une nouvelle tâche
    taskForm.addEventListener('submit', event => {
        event.preventDefault();
        const description = taskInput.value.trim();
        if (description) {
            fetch('http://localhost:8080/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description, completed: false, notes: '' })
            })
            .then(response => response.json())
            .then(task => {
                const li = document.createElement('li');
                li.classList.add('task-item');

                const taskDesc = document.createElement('span');
                taskDesc.textContent = task.description;
                li.appendChild(taskDesc);

                const editButton = document.createElement('button');
                editButton.textContent = '+';
                editButton.classList.add('edit-button');
                li.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = '-';
                deleteButton.classList.add('delete-button');
                li.appendChild(deleteButton);

                const addNoteButton = document.createElement('button');
                addNoteButton.textContent = 'Add Note';
                addNoteButton.classList.add('add-note-button');
                li.appendChild(addNoteButton);

                const noteTextarea = document.createElement('textarea');
                noteTextarea.classList.add('task-note-textarea');
                noteTextarea.placeholder = 'Click here to add notes';
                li.appendChild(noteTextarea);

                const saveNoteButton = document.createElement('button');
                saveNoteButton.textContent = 'Save Note';
                saveNoteButton.classList.add('save-note-button');
                li.appendChild(saveNoteButton);

                const deleteNoteButton = document.createElement('button');
                deleteNoteButton.textContent = 'Delete Note';
                deleteNoteButton.classList.add('delete-note-button');
                li.appendChild(deleteNoteButton);

                addNoteButton.style.display = 'none';
                noteTextarea.style.display = 'none';
                saveNoteButton.style.display = 'none';
                deleteNoteButton.style.display = 'none';

                addNoteButton.addEventListener('click', () => {
                    noteTextarea.style.display = 'block';
                    saveNoteButton.style.display = 'block';
                    deleteNoteButton.style.display = 'block';
                });

                saveNoteButton.addEventListener('click', () => {
                    const newNote = noteTextarea.value.trim();
                    if (newNote) {
                        fetch(`http://localhost:8080/tasks/${task.id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ ...task, notes: newNote })
                        })
                        .then(response => response.json())
                        .then(updatedTask => {
                            task.notes = updatedTask.notes;
                        });
                    }
                });

                deleteNoteButton.addEventListener('click', () => {
                    noteTextarea.value = '';
                    noteTextarea.style.display = 'none';
                    saveNoteButton.style.display = 'none';
                    deleteNoteButton.style.display = 'none';
                    fetch(`http://localhost:8080/tasks/${task.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ...task, notes: '' })
                    });
                });

                editButton.addEventListener('click', () => {
                    const newDesc = prompt('Edit task description:', task.description);
                    if (newDesc) {
                        fetch(`http://localhost:8080/tasks/${task.id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ ...task, description: newDesc })
                        })
                        .then(response => response.json())
                        .then(updatedTask => {
                            task.description = updatedTask.description;
                            taskDesc.textContent = updatedTask.description;
                        });
                    }
                });

                deleteButton.addEventListener('click', () => {
                    fetch(`http://localhost:8080/tasks/${task.id}`, {
                        method: 'DELETE'
                    })
                    .then(() => {
                        taskList.removeChild(li);
                    });
                });

                li.addEventListener('mouseover', () => {
                    addNoteButton.style.display = 'block';
                    noteTextarea.style.display = 'block';
                    saveNoteButton.style.display = 'block';
                    deleteNoteButton.style.display = 'block';
                });
                li.addEventListener('mouseout', () => {
                    if (!noteTextarea.value.trim()) {
                        addNoteButton.style.display = 'none';
                        noteTextarea.style.display = 'none';
                        saveNoteButton.style.display = 'none';
                        deleteNoteButton.style.display = 'none';
                    }
                });

                taskList.appendChild(li);
                taskInput.value = '';
            });
        }
    });

    fetchTasks();
});
