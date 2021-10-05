((d)=>{
    window.addEventListener("scroll",()=>{
        const $header = d.getElementById("nav");
        $header.classList.toggle("nav2",window.scrollY > 0); 
    })
})(document);