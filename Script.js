function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


const questions = document.querySelectorAll('.question')

questions.forEach(question => {
    question.addEventListener('click', e => {

        document.querySelectorAll('.answer').forEach(answer => {
            answer.classList.remove('.open')
        })

        document.querySelectorAll('.answer').forEach(answer => {
            answer.classList.remove('open')
        })





        const parent = question.parentElement
        const answer = parent.querySelector('.answer')
        answer.classList.add ('open')
    })
})



const ValidationSwitch = (input) => {
    switch(input.type) {
        case 'email': return validateEmail(input)
    }
}



const validateEmail = (input) => {

    if(input.value.trim().lenght <= 0){
        setError(input, 'You need to enter a valid email address')
        return false
    }
}