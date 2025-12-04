document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Ready — JS is running.");

    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInput = document.getElementById("modal-input");
    const modalCancel = document.getElementById("modal-cancel");
    const modalConfirm = document.getElementById("modal-confirm");

    let activeContainer = null;

    function openModal(title, container) {
        modalTitle.textContent = title;
        modalInput.value = "";
        activeContainer = container;
        modal.style.display = "flex";
        modalInput.focus();
    }

    function closeModal() {
        modal.style.display = "none";
        activeContainer = null;
    }

    modalCancel.addEventListener("click", closeModal);

    modalConfirm.addEventListener("click", () => {
        const text = modalInput.value.trim();
        if (text && activeContainer) {
            const newItem = document.createElement("div");
            if (activeContainer.classList.contains("announcement-items")) {
                newItem.classList.add("announcement-item");
            } else if (activeContainer.classList.contains("todo-items")) {
                newItem.classList.add("todo-item");
            }
            newItem.textContent = text;
            activeContainer.appendChild(newItem);
            closeModal();
        }
    });

    // Add Announcement
    const addAnnouncementBtn = document.querySelector(".add-announcement-btn");
    const announcementsContainer = document.querySelector(".announcement-items");

    if (addAnnouncementBtn && announcementsContainer) {
        addAnnouncementBtn.addEventListener("click", () => {
            openModal("Add Announcement", announcementsContainer);
        });
    }

    // Add To-Do
    const addTodoBtn = document.querySelector(".add-todo-btn");
    const todoContainer = document.querySelector(".todo-items");

    if (addTodoBtn && todoContainer) {
        addTodoBtn.addEventListener("click", () => {
            openModal("Add To-Do", todoContainer);
        });
    }
});