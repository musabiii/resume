const tabResume = document.querySelector(".tab-resume");
const tabPortfolio = document.querySelector(".tab-portfolio");
const resume = document.querySelector(".resume");
const portfolio = document.querySelector(".portfolio");
const container = document.querySelector('.container');


tabResume.addEventListener('click',()=>{
    tabResume.classList.add('active-tab');
    tabPortfolio.classList.remove('active-tab');

    resume.classList.add('active');
    portfolio.classList.remove('active');
    container.scrollTo(0,0);
})

tabPortfolio.addEventListener('click',()=>{
    tabPortfolio.classList.add('active-tab');
    tabResume.classList.remove('active-tab');

    portfolio.classList.add('active');
    resume.classList.remove('active');
    container.scrollTo(0,0);

})