const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        themeToggle.setAttribute("title", theme === "dark" ? "Light Mode aktivieren" : "Dark Mode aktivieren");
    }
}

function getPreferredTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

applyTheme(getPreferredTheme());

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem("theme", nextTheme);
        applyTheme(nextTheme);
    });
}
