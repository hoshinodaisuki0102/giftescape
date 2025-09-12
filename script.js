const quizData = [
    { 
        question: "체세포 분열의 전기에서 염색체가 나타나나요? (O or X) ", 
        answer: ["O", "o"] 
    },
    { 
        question: "생식세포 분열은 몇 회 일어나나요?", 
        answer: ["2", "2회"]
    },
    { 
        question: "체세포 분열에서의 딸세포의 수는 몇 개 인가요?", 
        answer: ["2", "2개"] 
    },
    { 
        question: "체세포 분열에서의 딸세포의 수는 몇 개 인가요?", 
        answer: ["4", "4개"] 
    },
    { 
        question: "생식세포 분열에서는 딸세포의 염색체 수가 모세포의 염색체 수의 절반이다. (O or X)", 
        answer: ["O", "o"] 
    },
    { 
        question: "체세포 분열의 의미는?", 
        answer: ["생장", "재생", "체세포 유지"] 
    },
    { 
        question: "생식세포 분열의 의미", 
        answer: ["생식세포형성", "생식세포 형성", "생식과 유전"] 
    }
];

let currentQuestion = 0;

function startGame() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("quizContainer").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        document.getElementById("question").innerText = quizData[currentQuestion].question;
        document.getElementById("answerInput").value = "";
        document.getElementById("feedback").innerText = "";
    } else {
        // 모든 퀴즈를 풀고 나면 축하 메시지와 선물을 띄운다.
        document.getElementById("quizContainer").classList.add("hidden");
        document.getElementById("congratulationsContainer").classList.remove("hidden");
        setTimeout(showGiftCard, 500); // 0.5초 후에 카드 나타나게 하기
    }
}

function checkAnswer() {
    let userInput = document.getElementById("answerInput").value.trim().replace(/\s+/g, ""); // 띄어쓰기 제거
    let correctAnswers = quizData[currentQuestion].answer.map(ans => ans.replace(/\s+/g, "")); // 정답에서도 띄어쓰기 제거

    if (correctAnswers.includes(userInput)) {
        document.getElementById("feedback").innerText = "✅ 정답입니다!";
        currentQuestion++;
        setTimeout(loadQuestion, 1000);
    } else {
        document.getElementById("feedback").innerText = "❌ 틀렸습니다. 다시 시도해 보세요!";
    }
}

function showGiftCard() {
    document.getElementById("giftCard").classList.remove("hidden");
}

