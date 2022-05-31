const large_buttons = document.querySelectorAll(".kbc-button-lg");
const mid_buttons = document.querySelectorAll(".kbc-button-md");

const randomQuestions = [
    "How many cats do I have?",
    "What is my luky number?",
    "My birth month?",
    "How many countries have I visited?"
]

const answers = [
    "3",
    "2",
    "3",
    "7"
]
let questionIndex = -1;
let answerSubmitted = false;

function resizeLargeButtons() {

    if ($(window).width() < 992) {
        large_buttons.forEach(button => {
            button.classList.add("kbc-button-md");
            button.classList.remove("kbc-button-lg");
        });
    
    } else {
        large_buttons.forEach(button => {
            button.classList.add("kbc-button-lg");
            button.classList.remove("kbc-button-md");
        });
    }
}

function resizeMidButtons() {
    let width = $(window).width();

    if (width > 1200) {
        mid_buttons.forEach(button => {
            button.classList.add("kbc-button-md");
            button.classList.remove("kbc-button-lg");
            button.classList.remove("kbc-button-sm");
        });
    } else if (width < 1200 && width > 992) {
        mid_buttons.forEach(button => {
            button.classList.remove("kbc-button-md");
            button.classList.remove("kbc-button-lg");
            button.classList.add("kbc-button-sm");
        });
    } else {
        mid_buttons.forEach(button => {
            button.classList.remove("kbc-button-md");
            button.classList.add("kbc-button-lg");
            button.classList.remove("kbc-button-sm");
        });
    }
}

function resizeIcons() {
    let width = $(window).width();

    if (width < 576) {
        $(".large-icon").addClass("fa-2x");
        $(".large-icon").removeClass("fa-4x");
    
        $(".mid-icon").addClass("fa-1x");
        $(".mid-icon").removeClass("fa-2x");
    } else {
        $(".large-icon").removeClass("fa-2x");
        $(".large-icon").addClass("fa-4x");

        $(".mid-icon").removeClass("fa-1x");
        $(".mid-icon").addClass("fa-2x");
    }
    
}

function generateRandomQuestion() {
    const questionsNum = randomQuestions.length;
    questionIndex = Math.floor(Math.random() * questionsNum);
    $(".question").text(randomQuestions[questionIndex]);
}

$(window).on("resize", resizeLargeButtons);
$(window).on("resize", resizeMidButtons);
$(window).on("resize", resizeIcons);

resizeLargeButtons();
resizeMidButtons();
resizeIcons();
generateRandomQuestion();


$(".key").click(function (e) { 
    let pressed = this.id;
    
    if (answerSubmitted) {
        $(".answer").text("");
    }

    if (pressed === "enter") {
        answerSubmitted = true;
        if ($(".answer").text() === answers[questionIndex]) {
            $(".answer").text("YOU GUESSED IT! 🥰");
        } else {
            $(".answer").text("NOPE NOPE. 🤪");
        }
    } else if (pressed === "next") {
        answerSubmitted = false;
        $(".answer").text("");
        generateRandomQuestion();
    } else {
        answerSubmitted = false;
        $(".answer").text($(".answer").text() + pressed);
    }
});


