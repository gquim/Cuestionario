// Colección de preguntas
const questions = [
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Roma", "Madrid", "París"],
        answer: "Roma"
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        options: ["1939", "1941", "1945"],
        answer: "1939"
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es el metal más abundante en la corteza terrestre?",
        options: ["Hierro", "Aluminio", "Oro"],
        answer: "Aluminio"
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Pacífico", "Atlántico", "Índico"],
        answer: "Pacífico"
    },
    {
        question: "Qué país es el más extenso en la tierra.",
        options: ["Estados Unidos","Brasil","Rusia"],
        answer: "Rusia"
    }
];

const form = document.getElementById('Form');
let score = 0;

// Agregar las preguntas y opciones al formulario
questions.forEach((questionObj, index) => {
    const questionContainer = document.createElement('div');
    questionContainer.innerHTML = `
        <h3>Pregunta ${index + 1}:</h3>
        <p class="h6">${questionObj.question}</p>
    `;
    questionObj.options.forEach((option, optionIndex) => {
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `q${index}`;
        
        optionInput.value = option;
        questionContainer.appendChild(optionInput);
        const optionLabel = document.createElement('label');
        optionLabel.textContent = ` ${option}`;
        questionContainer.appendChild(optionLabel);
        questionContainer.appendChild(document.createElement('br'));
    });
    form.insertBefore(questionContainer, form.lastElementChild);
});

// Agregar evento para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Reiniciar puntuación
    score = 0;
    // Iterar a través de las preguntas y comprobar respuestas
    questions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (selectedAnswer === questionObj.answer) {
                score++;
            }
        }
    });
    // Mostrar resultado
    alert(`Has respondido correctamente ${score} de ${questions.length} preguntas.`);
});