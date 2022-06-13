const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //buttons parent
const sectBtn = document.querySelectorAll('.control'); //the actual buttons
const allSections = document.querySelector('.main-content'); //selects the body

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){ //add event listener to every button
            let currentBtn = document.querySelectorAll('.active-btn');  //get the current button
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn','');  //remove it as the active button
            this.className += ' active-btn'; //activate the button that was clicked
        })
    }

    //Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id){ //if id exists
            //remove active from the other button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();