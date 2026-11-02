
// Change the letter here whenever you want
const myLetter = `ချစ်ကလေးရေ🙆 ဖြစ်ခဲ့သမျှ ပြဿနာတိုင်းအတွက် ကိုကို့ဘက်က အနူးအညွတ်တောင်းပန်ပါတယ်နှော်😘။

ပီးတော့လည်း ချစ်နဲ့ပဲလက်တွဲချင်ပါတယ်🥰။

ချစ်သူဖြစ်တဲ့ ၆နှစ်ကျော်အတွင်းမှာလည်း သည်းခံပေးခဲ့လို့လဲကျေးဇူးတင်ပါတယ်နှော်💓💓။

ကိုကိုက ချစ်ကိုပဲအစထဲကချစ်ခဲ့တာပါ။

ကိုချုပ်ချယ်တာတေကလည်း ချစ်ကလေးကို အရမ်းချစ်လို့ အရမ်းသဝန်တိုလို့ချုပ်ချယ်ခဲ့တာပါ။

နောက်နောင်ရန်မဖြစ်ပဲ နောင်နှစ်ပေါင်းများစာအထိ အတူတူရှိသွားချင်ပါတယ်👩‍❤️‍👨👩‍❤️‍👨။

ရန်မဖြစ်ပဲနေသွားကြမယ်နှော်......`;


// Change page function
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


// Welcome page
function startWebsite() {
    showPage("envelopePage");
}


// Open envelope
function openLetter() {
    const envelope = document.getElementById("envelope");

    envelope.classList.add("open");

    setTimeout(() => {
        showPage("letterPage");
        typeLetter();
    }, 700);
}


// Typing animation
function typeLetter() {
    const letterElement = document.getElementById("letterText");
    const continueBtn = document.getElementById("continueBtn");

    letterElement.textContent = "";
    continueBtn.classList.add("hidden");

    const characters = Array.from(myLetter);
    let index = 0;

    function type() {
        if (index < characters.length) {
            letterElement.textContent += characters[index];
            index++;

            setTimeout(type, 65);
        } else {
            continueBtn.classList.remove("hidden");
        }
    }

    type();
}


// Proposal page
function showProposal() {
    showPage("proposalPage");
}


// YES button
function sayYes() {
    document.getElementById("answer").textContent =
        "အရမ်းဝမ်းသာပါတယ် ချစ်ကလေးရေ ❤️🥰";

    createHearts(30);
}


// MAYBE button
function sayMaybe() {
    document.getElementById("answer").textContent =
        "ရပါတယ် ချစ်ကလေးရေ။ စိတ်အေးအေးနဲ့ အချိန်ယူပါနော် 😊❤️";
}


// Floating hearts
function createHearts(amount = 1) {
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";

        const emojis = ["❤️", "💕", "💗", "💖", "🌸"];
        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}


// Background heart animation
setInterval(() => {
    createHearts(1);
}, 900);
