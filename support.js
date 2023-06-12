const task = document.getElementById("task").addEventListener('click', newTask)
function newTask() {
    document.getElementById("task-send").style.display = 'unset'
    document.getElementById("task").classList.add("show")
}
document.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "Escape") {
        document.getElementById("task").classList.remove("show")
    }
});