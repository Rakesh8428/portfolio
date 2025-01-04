const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);


const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(link => {
    link.addEventListener('click', function () {
        navLink.forEach(n => n.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});

// Initialize EmailJS
emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

// Handle form submission
document.querySelector('.contact__form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.querySelector('.contact__input[placeholder="Name"]').value;
    const email = document.querySelector('.contact__input[placeholder="Email"]').value;
    const message = document.querySelector('textarea.contact__input[placeholder="Message"]').value;

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        user_name: name,
        user_email: email,
        user_message: message,
    })
    .then(() => {
        alert('Email sent successfully!');
        // Clear form inputs
        document.querySelector('.contact__form').reset();
    })
    .catch((error) => {
        alert('Failed to send email. Please try again.');
        console.error('Error:', error);
    });
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 