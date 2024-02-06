const exce = document.querySelectorAll('.excercies');
exce.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('checked')
    })
})