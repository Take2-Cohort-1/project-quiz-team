const questions = [
    {
      question: "Which of these animals is native to New Zealand?",
      options: ["Kangaroo", "Kiwi bird", "Koala", "Emu"],
      answer: "Kiwi bird",
    },
    {
      question: "What is the capital city of New Zealand?",
      options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
      answer: "Wellington",
    },
    {
      question: "What is the name of the indigenous people of New Zealand?",
      options: ["Maori", "Aborigines", "Inuit", "Sami"],
      answer: "Maori",
    },
    {
      question: "Which of these films was primarily shot in New Zealand?",
      options: [
        "Harry Potter series",
        "Lord of the Rings trilogy",
        "Pirates of the Caribbean",
        "Star Wars series",
      ],
      answer: "Lord of the Rings trilogy",
    },
    {
      question: "What is the highest mountain in New Zealand?",
      options: [
        "Mount Cook (Aoraki)",
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount McKinley",
      ],
      answer: "Mount Cook (Aoraki)",
    },
    {
      question: "Which city in New Zealand is known as the 'City of Sails'?",
      options: ["Auckland", "Wellington", "Dunedin", "Queenstown"],
      answer: "Auckland",
    },
    {
      question: "What is the official national sport of New Zealand?",
      options: ["Cricket", "Rugby Union", "Soccer", "Netball"],
      answer: "Rugby Union",
    },
    {
      question: "Which sea lies to the west of New Zealand?",
      options: ["Tasman Sea", "Coral Sea", "South China Sea", "Arafura Sea"],
      answer: "Tasman Sea",
    },
    {
      question: "What is the traditional Maori greeting called?",
      options: ["Haka", "Hongi", "Powhiri", "Waka"],
      answer: "Hongi",
    },
    {
      question:
        "Which New Zealand town is famous for its geothermal activity and Maori culture?",
      options: ["Rotorua", "Christchurch", "Hamilton", "Napier"],
      answer: "Rotorua",
    },
  ];

//   Declare variables and link them to the DOM

  const questionElement = document.getElementById('quiz-question');
  const answer1Element = document.getElementById('answer-1');
  const answer2Element = document.getElementById('answer-2');
  const answer3Element = document.getElementById('answer-3');
  const answer4Element = document.getElementById('answer-4');
  const submitButton = document.getElementById('submit-button');

//   Display first question in question area

questionElement.innerText = questions[0].question;

// Display answer choices

answer1Element.innerText = questions[0].options[0];
answer2Element.innerText = questions[0].options[1];
answer3Element.innerText = questions[0].options[2];
answer4Element.innerText = questions[0].options[3];

// Declare array for answer buttons

let answersArray = [answer1Element, answer2Element, answer3Element, answer4Element]

// Add event listener to answer and submit buttons
answer1Element.addEventListener('click', greenHighlight);
answer2Element.addEventListener('click', greenHighlight);
answer3Element.addEventListener('click', greenHighlight);
answer4Element.addEventListener('click', greenHighlight);
submitButton.addEventListener('click', showAlert);

// Answer button turns green when clicked

answersArray.forEach(greenhighlight);

function greenHighlight(event){
    answer1Element.style.backgroundColor = "";
    answer2Element.style.backgroundColor = "";
    answer3Element.style.backgroundColor = "";
    answer4Element.style.backgroundColor = "";
    event.target.style.backgroundColor = "green";
}

function showAlert( ){
    alert('Please select an answer');
}