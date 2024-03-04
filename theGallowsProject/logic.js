var words = ["программа","макака","прекрасный","оладушек", "жвачка", "мандарин", "собака"];
var word = words[Math.floor(Math.random() * words.length)];
var attempts = 3; // количество попыток
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length; // показывает сколько осталось угадать букв
// игровой цикл, куда помещена основная программа
while (remainingLetters > 0) {
    if (attempts === 0) {
        break;
    }
    alert(answerArray.join(" "));
    // диалоговое окно для ввода буквы или выхода из игры
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
        // проверка на то, чтобы была введена одна буква
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        var correctAnswer = false;
        // проходим по символам слова
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
                correctAnswer = true;
            }
        }
    }
    if (correctAnswer === false) {
        attempts--;
    }
    console.log(attempts);
}
alert(answerArray.join(" "));
if(attempts === 0) {
    alert("Ваши попытки закончились. Было загадано слово: " + word);
} else {
    alert("Отлично! Было загадано слово: " + word);
}



