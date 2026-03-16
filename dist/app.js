"use strict";
const userProfile = {
    name: "Developer Name",
    role: "Full Stack Engineer",
    phone: "+1 234 567 890",
    email: "dev@example.com",
    github: "http://github.com/username"
};
const displayProfile = (profile) => {
    const nameEl = document.getElementById("user-name");
    const roleEl = document.getElementById("user-role");
    const phoneEl = document.getElementById("user-phone");
    const emailEl = document.getElementById("user-email");
    const githubLinkEl = document.getElementById("github-link");
    // Immediately update text to remove "Loading..." if present
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
const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
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