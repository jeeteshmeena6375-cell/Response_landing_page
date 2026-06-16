/* =========================
 LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 500);

    }, 1200);

});


/* =========================
 NAVBAR SCROLL EFFECT
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
 MOBILE MENU
========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* =========================
 ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
 SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});


/* =========================
 TYPEWRITER EFFECT
========================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "Web Developer",
    "UI Designer",
    "Frontend Engineer",
    "AI Enthusiast",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/* =========================
 COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target =
        +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 100;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            counter.innerText =
                Math.floor(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

};

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(
                    entry.target
                );

                counterObserver.unobserve(
                    entry.target
                );

            }

        });

    });

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================
 SCROLL REVEAL
========================= */

const hiddenElements =
    document.querySelectorAll(".hidden");

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

hiddenElements.forEach(el => {

    revealObserver.observe(el);

});


/* =========================
 TESTIMONIAL SLIDER
========================= */

const testimonials =
    document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial() {

    testimonials.forEach(item => {

        item.classList.remove(
            "active-slide"
        );

    });

    testimonials[
        testimonialIndex
    ].classList.add("active-slide");

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {
        testimonialIndex = 0;
    }

}

setInterval(showTestimonial, 3000);


/* =========================
 FAQ ACCORDION
========================= */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        if (
            answer.style.display === "block"
        ) {

            answer.style.display = "none";

        } else {

            document
                .querySelectorAll(".faq-answer")
                .forEach(ans => {

                    ans.style.display = "none";

                });

            answer.style.display = "block";

        }

    });

});





/* =========================
 DARK MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

});


/* =========================
 BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
 CHATBOT OPEN/CLOSE
========================= */

const chatToggle =
    document.getElementById("chatToggle");

const chatbot =
    document.getElementById("chatbot");

chatToggle.addEventListener("click", () => {

    if (
        chatbot.style.display === "block"
    ) {

        chatbot.style.display = "none";

    } else {

        chatbot.style.display = "block";

    }

});


/* =========================
 OFFLINE AI CHATBOT
========================= */

const sendBtn =
    document.getElementById("sendBtn");

const userInput =
    document.getElementById("userInput");

const chatBody =
    document.getElementById("chat-body");

function addMessage(text, className) {

    const div =
        document.createElement("div");

    div.className = className;

    div.innerHTML = text;

    chatBody.appendChild(div);

    chatBody.scrollTop =
        chatBody.scrollHeight;

}

function botReply(message) {

    message =
        message.toLowerCase();

    let reply =
        "Sorry, I didn't understand that.";

    if (
        message.includes("hello") ||
        message.includes("hi")
    ) {
        reply =
            "Hello 👋 Welcome to TechLanding!";
    }

    else if (
        message.includes("service")
    ) {
        reply =
            "We provide Web Development, UI Design, SEO, Cloud Hosting and Security.";
    }

    else if (
        message.includes("contact")
    ) {
        reply =
            "You can contact us at info@example.com";
    }

    else if (
        message.includes("price")
    ) {
        reply =
            "Pricing depends on project requirements.";
    }

    else if (
        message.includes("ai")
    ) {
        reply =
            "I am an offline AI Assistant built using JavaScript.";
    }

    else if (
        message.includes("bye")
    ) {
        reply =
            "Goodbye 👋 Have a nice day!";
    }

    setTimeout(() => {

        addMessage(
            reply,
            "bot-message"
        );

    }, 500);

}

sendBtn.addEventListener("click", () => {

    const message =
        userInput.value.trim();

    if (message === "") return;

    addMessage(
        message,
        "user-message"
    );

    botReply(message);

    userInput.value = "";

});

userInput.addEventListener(
    "keypress",
    e => {

        if (e.key === "Enter") {

            sendBtn.click();

        }

    }
);


/* =========================
MOUSE GLOW EFFECT
========================= */

document.addEventListener(
    "mousemove",
    e => {

        document.body.style.background =
            `
radial-gradient(
circle at ${e.clientX}px ${e.clientY}px,
rgba(0,217,255,.08),
#0a0f1c 40%
)
`;

    }
);















/* =========================
 CONTACT FORM STORAGE
========================= */

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

const name =
this.querySelector('input[type="text"]').value;

const email =
this.querySelector('input[type="email"]').value;

const message =
this.querySelector('textarea').value;

/* Save in Local Storage */

let contacts =
JSON.parse(
localStorage.getItem("contacts")
) || [];

contacts.push({
name,
email,
message
});

localStorage.setItem(
"contacts",
JSON.stringify(contacts)
);

/* Show Data */

displayContacts();

alert("Message Submitted Successfully!");

this.reset();

});

/* Display Records */

function displayContacts() {

    let contacts =
        JSON.parse(localStorage.getItem("contacts")) || [];

    let output = `
    <h3 style="margin-top:30px;">Submitted Messages</h3>

    <table style="width:100%;margin-top:20px;border-collapse:collapse;">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
        </tr>
    `;

    contacts.forEach((contact, index) => {

        output += `
        <tr>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.message}</td>
            <td>
                <button onclick="deleteContact(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

    output += "</table>";

    document.getElementById("submittedData").innerHTML = output;
}






function deleteContact(index) {

    let contacts =
        JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.splice(index, 1);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    displayContacts();
}

displayContacts();