export function createModal(type, title, message) {
    // Chiudi eventuali modal aperti
    const existingOverlay = document.querySelector(".modalOverlay");
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement("div");
    overlay.className = "modalOverlay";

    const modal = document.createElement("div");
    modal.className = `modal modal--${type}`;

    modal.innerHTML = `
        <div class="modal__left">
            <div class="modal__text-container">
                <h2 class="modal__title">${title}</h2>
                <p class="modal__message">${message}</p>
            </div>
            <div class="modal__controls">
                <button class="modal__button modal__button--${type}">
                    ${type === "error" ? "Chiudi" : "OK"}
                </button>
            </div>
        </div>

        <div class="modal__right">
            <img src="/img/gufo-removebg-preview.png" alt="Gufo" class="modal__icon">
        </div>
    `;

    overlay.appendChild(modal);

    overlay.querySelector(".modal__button").addEventListener("click", () => {
        overlay.remove();
    });

    // Chiudi con ESC
    const closeOnEsc = (e) => {
        if (e.key === "Escape") {
            overlay.remove();
            document.removeEventListener("keydown", closeOnEsc);
        }
    };
    document.addEventListener("keydown", closeOnEsc);

    return overlay;
}