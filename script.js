const title = document.getElementById("myTitle")

title.addEventListener("click", event => {
    title.classList.add("colour")
    console.log(event)
})