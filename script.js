const acc=document.querySelectorAll('.accordian')
acc.forEach(accordian=>{
    const icon=accordian.querySelector('icon')
    const answer=accordian.querySelector('.answer')
    accordian.addEventListener('click',()=>{
        answer.classList.toggle('active');
        icon.classList.toggle('active')
    })
})
