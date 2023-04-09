const sentences = [
  { english: 'Talk to somebody.', sinhala: '01. කාටහරි කතා කරන්න.' },
  { english: 'Are there dogs in your home?', sinhala: '02. බල්ලෝ ඉන්නවද ඔයාගෙ ගෙදර ?' },
  { english: 'she has a long hair.', sinhala: '03.ඇයට දිග කොන්ඩයක් තියෙනවා.' },
  { english: 'I accept that challenge.', sinhala: '04. මම ඒ අභියෝගය භාර ගන්නවා.' },
  { english: 'Tell me about your children.', sinhala: '05. ඔබේ දරුවන් ගැන මට කියන්න.' },
  { english: 'This is a bottle of water.', sinhala: '06. මේක වතුර බෝතලයක්.' },
  { english: 'Why are the lights off?', sinhala: '07. ඇයි ඔයා ලයිට් එක ඔෆ් කලේ?' },
  { english: 'I decided to run away with her.', sinhala: '08. මම ඇය සමඟ පලා යාමට තීරණය කලා.' },
  { english: 'The ball is floating in the sea.', sinhala: '09. බෝලේ මුහුදේ පාවෙමින් තියෙනවා.' },
  { english: 'you can call me any time you want.', sinhala: '10. ඔබට අවශ්‍යය ඕන වෙලාවක මට කතා කරන්න පුලුවන්.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://krishbro.github.io/English-Sent-Maker-05/";
});
