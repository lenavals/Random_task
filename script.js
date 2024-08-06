document.getElementById('get-task').addEventListener('click', () => {
    const languageSelect = document.getElementById('language-select');
    const language = languageSelect.value;

    const tasks = {
        chinese: [
            'Read and translate a text in Chinese.',
            'Complete grammar exercises.',
            'Listen to an audio lesson and repeat.',
            'Record a short video on a topic you studied.',
            'Learn 10 new words and use them in sentences.'
        ],
        english: [
            'Read a chapter of an English book.',
            'Write a short essay on your favorite hobby.',
            'Watch an English video and summarize it.',
            'Practice pronunciation of difficult words.',
            'Learn 10 new English words and use them in sentences.'
        ],
        spanish: [
            'Read and translate a paragraph from a Spanish book.',
            'Complete a Spanish grammar exercise.',
            'Watch a Spanish video and discuss it.',
            'Record yourself speaking in Spanish.',
            'Learn 10 new Spanish words and use them in sentences.'
        ],
        arabic: [
            'Read and translate a passage from an Arabic text.',
            'Practice Arabic script writing.',
            'Listen to an Arabic podcast and summarize it.',
            'Record yourself speaking in Arabic.',
            'Learn 10 new Arabic words and use them in sentences.'
        ],
        polish: [
            'Read and translate a text in Polish.',
            'Complete a Polish grammar exercise.',
            'Watch a Polish video and discuss it.',
            'Record a short Polish speech.',
            'Learn 10 new Polish words and use them in sentences.'
        ]
    };

    if (language && tasks[language]) {
        const randomIndex = Math.floor(Math.random() * tasks[language].length);
        const task = tasks[language][randomIndex];
        document.getElementById('task').innerText = task;
        document.getElementById('discard-task').style.display = 'inline'; // Показать кнопку "Отказаться от задания"
    } else {
        document.getElementById('task').innerText = 'Please select a language.';
        document.getElementById('discard-task').style.display = 'none'; // Скрыть кнопку "Отказаться от задания"
    }
});

document.getElementById('discard-task').addEventListener('click', () => {
    const languageSelect = document.getElementById('language-select');
    const language = languageSelect.value;

    const tasks = {
        chinese: [
            'Read and translate a text in Chinese.',
            'Complete grammar exercises.',
            'Listen to an audio lesson and repeat.',
            'Record a short video on a topic you studied.',
            'Learn 10 new words and use them in sentences.'
        ],
        english: [
            'Read a chapter of an English book.',
            'Write a short essay on your favorite hobby.',
            'Watch an English video and summarize it.',
            'Practice pronunciation of difficult words.',
            'Learn 10 new English words and use them in sentences.'
        ],
        spanish: [
            'Read and translate a paragraph from a Spanish book.',
            'Complete a Spanish grammar exercise.',
            'Watch a Spanish video and discuss it.',
            'Record yourself speaking in Spanish.',
            'Learn 10 new Spanish words and use them in sentences.'
        ],
        arabic: [
            'Read and translate a passage from an Arabic text.',
            'Practice Arabic script writing.',
            'Listen to an Arabic podcast and summarize it.',
            'Record yourself speaking in Arabic.',
            'Learn 10 new Arabic words and use them in sentences.'
        ],
        polish: [
            'Read and translate a text in Polish.',
            'Complete a Polish grammar exercise.',
            'Watch a Polish video and discuss it.',
            'Record a short Polish speech.',
            'Learn 10 new Polish words and use them in sentences.'
        ]
    };

    if (language && tasks[language]) {
        const randomIndex = Math.floor(Math.random() * tasks[language].length);
        const task = tasks[language][randomIndex];
        document.getElementById('task').innerText = task;
    }
});
