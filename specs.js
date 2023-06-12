document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "Escape") {
        hideModalWindow()
    }
});

const openModalButton = document.getElementById("buy")
const modalWindowOverlay = document.getElementById("modal-overlay")
const showModalWindow = () => {
    modalWindowOverlay.style.display = 'flex'
    modalWindowOverlay.classList.toggle("show")
}
openModalButton.addEventListener("click", showModalWindow)

const closeModalButton = document.getElementById("close-modal")
const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none'
    modalWindowOverlay.classList.toggle("show")
}
closeModalButton.addEventListener("click", hideModalWindow)
const hideModalWindowOnBlur = (e) => {
    if (e.target === e.currentTarget) {
        hideModalWindow()
    }
}
modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)
