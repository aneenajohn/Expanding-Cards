const panels= document.querySelectorAll(".panel");
// panels is an array containing all the panels
// console.log(panels);
// to get a specific panel
// console.log(panels[0]);

// panels.forEach((panel)=>
//     console.log(panel)
// )

// to add active class on currently clicked panel
panels.forEach((panel)=> {
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

// remove whichever active on previous click
function removeActiveClasses(){
    panels.forEach(panel =>
        panel.classList.remove('active')
    )}