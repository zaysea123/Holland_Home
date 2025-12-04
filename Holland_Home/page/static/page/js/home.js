document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Ready — JS is running.");

    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    // Add Announcement
    const addAnnouncementBtn = document.querySelector(".add-announcement-btn");
    const announcementsContainer = document.querySelector(".announcement-items"); // changed container

    if (addAnnouncementBtn && announcementsContainer) {
        addAnnouncementBtn.addEventListener("click", () => {
            const text = prompt("Enter new announcement:");
            if (text && text.trim() !== "") {
                const newItem = document.createElement("div");
                newItem.classList.add("announcement-item");
                newItem.textContent = text;
                announcementsContainer.appendChild(newItem); // append to announcement-items
            }
        });
    }

    // Add To-Do
    const addTodoBtn = document.querySelector(".add-todo-btn");
    const todoContainer = document.querySelector(".todo-items"); // changed container

    if (addTodoBtn && todoContainer) {
        addTodoBtn.addEventListener("click", () => {
            const text = prompt("Enter new to-do item:");
            if (text && text.trim() !== "") {
                const newItem = document.createElement("div");
                newItem.classList.add("todo-item");
                newItem.textContent = text;
                todoContainer.appendChild(newItem); // append to todo-items
            }
        });
    }
});