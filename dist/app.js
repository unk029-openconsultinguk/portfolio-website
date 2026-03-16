"use strict";
const userProfile = {
    name: "John Doe",
    role: "Senior Full Stack Engineer",
    phone: "+1 (555) 000-1111",
    email: "john.doe@example.com",
    github: "http://github.com/username"
};
const displayProfile = (profile) => {
    const nameEl = document.getElementById("user-name");
    const roleEl = document.getElementById("user-role");
    const phoneEl = document.getElementById("user-phone");
    const emailEl = document.getElementById("user-email");
    const githubLinkEl = document.getElementById("github-link");
    if (nameEl)
        nameEl.textContent = profile.name;
    if (roleEl)
        roleEl.textContent = profile.role;
    if (phoneEl)
        phoneEl.textContent = profile.phone;
    if (emailEl)
        emailEl.textContent = profile.email;
    if (githubLinkEl) {
        githubLinkEl.href = profile.github;
        githubLinkEl.textContent = "View GitHub Profile";
    }
};
const setupContactForm = () => {
    const form = document.getElementById("contact-form");
    const responseEl = document.getElementById("form-response");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");
            console.log("Form Submitted:", {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            });
            if (responseEl) {
                responseEl.textContent = `Thank you, ${nameInput.value}! Your message has been sent.`;
                responseEl.style.color = "#059669";
                form.reset();
            }
        });
    }
};
const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};
document.addEventListener("DOMContentLoaded", () => {
    displayProfile(userProfile);
    setupContactForm();
    setupSmoothScroll();
});
//# sourceMappingURL=app.js.map