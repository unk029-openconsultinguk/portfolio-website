interface UserProfile {
    name: string;
    role: string;
    phone: string;
    email: string;
    github: string;
}

const userProfile: UserProfile = {
    name: "Nithya Kumar",
    role: "Senior Full Stack Engineer",
    phone: "01234567890",
    email: "nk@example.com",
    github: "http://github.com/username"
};

const displayProfile = (profile: UserProfile): void => {
    const nameEl = document.getElementById("user-name-hero");
    const roleEl = document.getElementById("user-role-hero");
    const phoneEl = document.getElementById("user-phone");
    const emailEl = document.getElementById("user-email");
    const githubLinkEl = document.getElementById("github-link") as HTMLAnchorElement;

    if (nameEl) nameEl.textContent = profile.name;
    if (roleEl) roleEl.textContent = profile.role;
    if (phoneEl) phoneEl.textContent = profile.phone;
    if (emailEl) emailEl.textContent = profile.email;
    if (githubLinkEl) {
        githubLinkEl.href = profile.github;
        githubLinkEl.textContent = "View GitHub Profile";
    }
};

const setupContactForm = (): void => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const responseEl = document.getElementById("form-response");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const nameInput = document.getElementById("name") as HTMLInputElement;
            const emailInput = document.getElementById("email") as HTMLInputElement;
            const messageInput = document.getElementById("message") as HTMLTextAreaElement;

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

const setupSmoothScroll = (): void => {
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
