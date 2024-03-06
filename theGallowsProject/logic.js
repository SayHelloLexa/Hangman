function pickWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress(answerArray) {
    alert(answerArray.join(" "));
}

function getGuess() {
    return prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
}

function updateGameState(guess, word, answerArray, remainingLetters) {
    var correctAnswer = false;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
            answerArray[j] = guess.toLowerCase();
            remainingLetters--;
            correctAnswer = true;
        }
    }
    console.log(remainingLetters);
    return [remainingLetters, correctAnswer];
}

function showAnswerAndCongratulatePlayer(answerArray, attempts) {
    alert(answerArray.join(" "));
    if (attempts === 0) {
        alert("Ваши попытки закончились. Было загадано слово: " + word);
    } else {
        alert("Отлично! Было загадано слово: " + word);
    }

}

var word = pickWord(["программа", "макака", "прекрасный", "оладушек", "жвачка", "мандарин", "собака"]);
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var attempts = 3; // количество попыток

while (remainingLetters > 0) {
    if (attempts === 0) {
        break;
    } else {
        showPlayerProgress(answerArray);
        var guess = getGuess();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Пожалуйста, введите одиночную букву.");
        } else {
            var gameState = updateGameState(guess, word, answerArray, remainingLetters);
            remainingLetters = gameState[0]; // обновляем значение remainingLetters
            var correctAnswer = gameState[1]; // получаем значение correctAnswer
        }
        if (correctAnswer === false) {
            attempts--;
        }
    }
}
showAnswerAndCongratulatePlayer(answerArray, attempts);