((d)=>{
    const menuBtn = d.getElementById("open");
    const panelMenu = d.getElementById("enlaces");
    
    menuBtn.addEventListener("click",e=>{
        panelMenu.classList.toggle("is-active");
    })

    d.addEventListener("click",e =>{
        if(!e.target.matches("enlaces a"))return false;

        panelMenu.classList.remove("is-active");
    })
})(document);