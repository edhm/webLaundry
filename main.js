const app=document.getElementById('typewriter');
const typewriter =new typewriter(app,{
    loop:true,
    delay:75
});

typewriter
.typestring('El distrito del sol')
.pauseFor(200)
.start();