const anc = document.querySelectorAll('a[href*="#"]')

for (let ancc of anc){
    ancc.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = ancc.getAttribute('href')
        document.querySelector(''+ blockID).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}
