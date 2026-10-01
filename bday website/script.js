// ===============================
// BIRTHDAY WEBSITE — INTERACTIONS
// ===============================


// ===============================
// CHANGE BETWEEN SCREENS
// ===============================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    setTimeout(function() {

        const target = document.getElementById(screenId);

        if (target) {
            target.classList.add("active");
        }

    }, 100);
}


// ===============================
// SCREEN 0 — WHAT AM I TO YOU?
// ===============================

function chooseAnswer(answer) {

    const wrongAnswer = document.getElementById("wrongAnswer");

    if (answer === "best") {

        if (wrongAnswer) {
            wrongAnswer.textContent = "I knew you'd choose that 😌🩵";
        }

        createHearts();

        setTimeout(function() {
            showScreen("welcomeScreen");
        }, 1200);

    }

    else if (answer === "friend") {

        if (wrongAnswer) {
            wrongAnswer.textContent = "Hmm... think again 😭🫠";
        }

        shakeCard();
    }

    else {

        if (wrongAnswer) {
            wrongAnswer.textContent =
                "Seriously?? 😭 You don't know me that little.";
        }

        shakeCard();
    }
}


// ===============================
// SHAKE WRONG ANSWER
// ===============================

function shakeCard() {

    const card = document.querySelector(".glass-card");

    if (!card) return;

    card.classList.remove("shake");

    void card.offsetWidth;

    card.classList.add("shake");

    setTimeout(function() {
        card.classList.remove("shake");
    }, 500);
}


// ===============================
// WELCOME → BIRTHDAY
// ===============================

function goToBirthday() {

    startMusic();

    createHearts();

    showScreen("birthdayScreen");
}


// ===============================
// BIRTHDAY → FINAL QUESTION
// ===============================

function goToFinal() {

    createHearts();

    showScreen("finalScreen");
}


// ===============================
// BACKGROUND MUSIC
// ===============================

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    const music = document.getElementById("backgroundMusic");

    if (!music) return;

    music.volume = 0.25;

    music.play()
        .then(function() {
            musicStarted = true;
        })
        .catch(function() {
            console.log("Music needs user interaction.");
        });
}


// ===============================
// HEART ANIMATION
// ===============================

function createHearts() {

    const container = document.querySelector(".hearts");

    if (!container) return;

    const heartSymbols = ["🩵", "🤍", "✨", "💙"];

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.textContent =
            heartSymbols[
                Math.floor(Math.random() * heartSymbols.length)
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (14 + Math.random() * 18) + "px";

        heart.style.zIndex = "1000";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 3s ease-out, opacity 3s ease-out";

        container.appendChild(heart);

        setTimeout(function() {

            heart.style.transform =
                "translateY(-" +
                (window.innerHeight + 100) +
                "px) rotate(" +
                (Math.random() * 360) +
                "deg)";

            heart.style.opacity = "0";

        }, 50);

        setTimeout(function() {

            heart.remove();

        }, 3100);
    }
}


// ===============================
// ONE LAST QUESTION
// ===============================

function showLastQuestion() {

    showScreen("question2Screen");
}


// ===============================
// SHOW LEAVE QUESTION
// ===============================

function showLeaveQuestion() {

    showScreen("leaveScreen");
}


// ===============================
// "I DON'T KNOW"
// ===============================

function dontKnow() {

    const result =
        document.getElementById("question2Result");

    if (!result) return;

    result.innerHTML = `

        <div class="gundu-animation">
            🧐
        </div>

        <div class="gundu-text">
            GUNDU PAGULUDHI 😏🔪
        </div>

        <p class="try-again-text">
            Okay okay... think again 😭
        </p>

    `;

    createHearts();
}


// ===============================
// "I WON'T LEAVE"
// ===============================

function stayAnswer() {

    const result =
        document.getElementById("question2Result");

    if (!result) return;


    // FIRST MESSAGE

    result.innerHTML = `

        <div class="cute-result">
            😌🩵
        </div>

        <div class="stay-text">
            Yesss, I know you won't 😌
        </div>

        <div class="cute-result-small">
            You wouldn't press the other option anyway 😭
        </div>

    `;

    createHearts();


    // AFTER 3 SECONDS → TELUGU MESSAGE

    setTimeout(function() {

        result.innerHTML = `

            <div class="final-message-pop">

                <div class="cute-result">
                    😸🩵
                </div>

                <div class="final-wish">
                    Okayyy, this is the final slide...<br>
                    so let's talk in Telugu 🤧🩵
                </div>


                <p class="final-wish-text">
                    Gurthundho ledho... nee dream fulfill ayyaka
                    naaku cheptha ani cheppav kadhaa 🫠 
                </p>


                <p class="final-wish-text">
                    So thvaraga nee dreams anni achieve cheyyali... 😸✨
                    <br>
		    and then marchipokunda cheppali, okay?🤗
                  
                </p>


                <p class="final-wish-text">
                    no need to tell but my blessings will always be with youh 🤗🩵
                   
                </p>


                <p class="final-wish-text">
                   and remember, you dont need to think of me in your good times ,
		   but you dont have the permission to forgot me in your hard times 😸
		  </p>

	        <p class="final-wish-text">
		   and also no matter what just remember 
		   that you will always be my<strong> favourite person<strong> 🤗🩵
                </p>


                <div class="cute-result">
                    ✨🩵✨
                </div>


                <button
                    class="main-button final-okay-button"
                    onclick="showTrueFinal()">
                    Okayyy 🩵
                </button>

            </div>

        `;

        createHearts();

    }, 3000);
}


// ===============================
// TRUE FINAL SCREEN
// ===============================

function showTrueFinal() {

    createHearts();

    showScreen("trueFinalScreen");

    setTimeout(function() {
        createHearts();
    }, 500);

    setTimeout(function() {
        createHearts();
    }, 1500);
}