const large_buttons = document.querySelectorAll(".kbc-button-lg");
const mid_buttons = document.querySelectorAll(".kbc-button-md");
let answerSubmitted = false;

let randomQandAs = new Map(
    [
        ["How many cats do I have?", "3"],
        ["What is my lucky number?", "2"],
        [ "My birth month?", "3"],
        ["How many countries have I visited?", "7"]
    ]
);

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
    const questionsNum = randomQandAs.size;
    let questionIndex = Math.floor(Math.random() * questionsNum);
    $(".question").text(Array.from(randomQandAs.keys())[questionIndex]);
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
        let question = $(".question").text();
        if ($(".answer").text() === randomQandAs.get(question)) {
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


