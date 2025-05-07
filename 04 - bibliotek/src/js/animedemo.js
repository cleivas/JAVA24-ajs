import { animate, stagger } from "animejs";

animate('.animate', {
    translateX: '300px', //css transform
    rotate: 360, //css transform
    backgroundColor: 'hsl(276, 100.00%, 23.70%)', //css-egenskap
    borderRadius: '50%', //css-egenskap
    duration: 5000, //Animationen ska ta 5 sekunder
    alternate: true, //Animationen ska gå fram och tillbaka
    easing: 'easeInOutQuad', //hur snabb animationen är vid olika punkter
    loop: true, //Animationen loopar
    delay: stagger(300)
})