const qaboxes = document.querySelectorAll(".qabox");
qaboxes.forEach(qabox => {
    qabox.addEventListener("click", () => {
        qabox.classList.toggle("active");
    })
})