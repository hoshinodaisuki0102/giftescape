const quizData = [
    { 
        question: "다음 숫자와 관련있는 이름은? 19021216 1920928", 
        answer: ["유관순 열사", "유관순"] 
    },
    { 
        question: "모든 정수를 다 곱하면 얼마일까요?", 
        answer: ["0"] 
    },
    { 
        question: "이곳은 1919년 일제의 조선 식민지배를 반대하며 약 3000명의 군중이 대한독립을 외친 곳으로 유관순 열사가 참여한 곳입니다. 이 장소는 어디일까요?", 
        answer: ["아우내장터"] 
    },
    { 
        question: "다음 알파벳으로 알맞은 단어를 조합하시오: yadhtrib", 
        answer: ["birthday"] 
    },
    { 
        question: "이것은 1919년 3·1 운동 때 발표된 기미독립선언서에 서명한 위인들을 일컫는다.", 
        answer: ["민족대표 33인", "민족대표33인"] 
    },
    { 
        question: "49L 물통에 물을 채웁니다. 가 수도는 1분에 3.1L, 나 수도는 1분에 0.6L를 배출합니다. 물통이 가득 차는 시간은 몇 분 몇 초인가요?", 
        answer: ["19분 36초", "19분36초"] 
    },
    { 
        question: "다음 글자를 재배열하라: '울해상힉채'", 
        answer: ["생일 축하해", "생일축하해"] 
    }
];

let currentQuestion = 0;

function startGame() {
    document.getElementById("intro").style.display = "none"; // 소개 문구 숨기기
    document.getElementById("quizContainer").classList.remove("hidden"); // 퀴즈 컨테이너 보이기
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        document.getElementById("question").innerText = quizData[currentQuestion].question;
        document.getElementById("answerInput").value = "";
        document.getElementById("feedback").innerText = "";
    } else {
        // 모든 퀴즈를 풀고 나면 축하 메시지와 선물을 띄운다.
        document.getElementById("quizContainer").classList.add("hidden"); // 퀴즈 숨기기
        document.getElementById("congratulationsContainer").classList.remove("hidden"); // 축하 메시지 보이기
        setTimeout(showGiftCard, 500); // 0.5초 후에 선물 카드 나타나게 하기
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
    document.getElementById("giftCard").classList.remove("hidden"); // 선물 카드 보이기
}

window.onload = function() {
    document.getElementById("startButton").style.display = "inline"; // 초기에는 버튼 보이도록 설정
};
