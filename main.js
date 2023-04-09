function generateQuestion() {
    // ランダムに足し算または引き算を生成する
    var operator = Math.random() < 0.5 ? '+' : '-';
    // ランダムに2つの整数を生成する
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    // 問題を表示する
    document.getElementById('question').innerHTML = num1 + ' ' + operator + ' ' + num2 + ' = ';
    // 答えを計算して保存する
    if (operator === '+') {
        answer = num1 + num2;
    } else {
        answer = num1 - num2;
    }
}

function checkAnswer() {
    // ユーザーが入力した答えを取得する
    var userAnswer = document.getElementById('answer').value;
    // 正解かどうかをチェックする
    if (userAnswer == answer) {
        alert('正解！');
        // 次の問題を生成する
        generateQuestion();
        // 入力欄をクリアする
        document.getElementById('answer').value = '';
    } else {
        alert('不正解。もう一度挑戦してみてください。');
        // 入力欄クリア
        document.getElementById('answer').value = '';
    }
}

function addToInput(value) {
    document.getElementById('answer').value += value;
}

function clearInput() {
    document.getElementById('answer').value = '';
}