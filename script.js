const panels= document.querySelectorAll(".panel");
// panels is an array containing all the panels
// console.log(panels);
// to get a specific panel
// console.log(panels[0]);

// panels.forEach((panel)=>
//     console.log(panel)
// )


panels.forEach((panel)=> {
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>
        panel.classList.remove('active')
    )}