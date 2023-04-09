var questionCount = 0;
var errorCount = 0;

function generateQuestion() {
    // // ランダムに足し算または引き算を生成する
    // var operator = Math.random() < 0.5 ? '+' : '-';
    // // ランダムに2つの整数を生成する
    // var num1 = Math.floor(Math.random() * 10) + 1;
    // var num2 = Math.floor(Math.random() * 10) + 1;
    // // 問題を表示する
    // document.getElementById('question').innerHTML = num1 + ' ' + operator + ' ' + num2 + ' = ';
    // // 答えを計算して保存する
    // if (operator === '+') {
    //     answer = num1 + num2;
    // } else {
    //     answer = num1 - num2;
    // }

    // ランダムに足し算、引き算、乗算を生成する
    var operator;
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;

    switch(Math.floor(Math.random() * 3)){
        case 0:
            operator = "+";
            answer = num1 + num2;
            break;
        case 1:
            operator = "-";
            answer = num1 - num2;
            break;
        case 2:
            operator = "×";
            answer = num1 * num2;
            break;
    }

    // 問題を表示する
	document.getElementById('question').innerHTML = num1 + ' ' + operator + ' ' + num2 + ' = ';
    questionCount += 1;
}

function checkAnswer() {
    // ユーザーが入力した答えを取得する
    var userAnswer = document.getElementById('answer').value;
    // 正解かどうかをチェックする
    if (userAnswer == answer) {
        alert('せいかい！');
        // 次の問題を生成する
        generateQuestion();
        // 入力欄をクリアする
        document.getElementById('answer').value = '';
    } else {
        alert('ちがいます。もういちどがんばろう！');
        // 入力欄クリア
        document.getElementById('answer').value = '';
        errorCount += 1
    }
}

function addToInput(value) {
    document.getElementById('answer').value += value;
}

function clearInput() {
    document.getElementById('answer').value = '';
}

function answerCheck(){
    alert('いま' + ' ' + questionCount + ' ' + 'もんめで、' + ' ' + errorCount + ' ' + 'かいまちがえています。');
}