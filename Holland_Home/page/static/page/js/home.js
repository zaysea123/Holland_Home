document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Ready — JS is running.");

    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
        });
    }

    // Announcements
    const announcementInput = document.querySelector(".announcement-input");
    const announcementSendBtn = document.querySelector(".announcement-send-btn");
    const announcementContainer = document.querySelector(".announcement-items");

    if (announcementInput && announcementSendBtn && announcementContainer) {
        announcementSendBtn.addEventListener("click", () => {
            const text = announcementInput.value.trim();
            if (text !== "") {
                const newItem = document.createElement("div");
                newItem.classList.add("announcement-item");
                newItem.textContent = text;
                // Insert at top
                announcementContainer.insertBefore(newItem, announcementContainer.firstChild);
                announcementInput.value = ""; // clear input
            }
        });
    }

    // To-Do
    const todoInput = document.querySelector(".todo-input");
    const todoSendBtn = document.querySelector(".todo-send-btn");
    const todoContainer = document.querySelector(".todo-items");

    if (todoInput && todoSendBtn && todoContainer) {
        todoSendBtn.addEventListener("click", () => {
            const text = todoInput.value.trim();
            if (text !== "") {
                const newItem = document.createElement("div");
                newItem.classList.add("todo-item");
                newItem.textContent = text;
                // Insert at top
                todoContainer.insertBefore(newItem, todoContainer.firstChild);
                todoInput.value = ""; // clear input
            }
        });
    }
});