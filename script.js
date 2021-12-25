function rain() {
    let N = 500;
    let body = document.querySelector('body');
    let i = 0;
    while(i<N){
        let drop = document.createElement('i');
        let size = Math.random() * 3;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        drop.style.width = size+'px';
        drop.style.height = '25px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay+'s';
        drop.style.animationDuration = 5 + duration + 's';
        body.appendChild(drop);
        i++;
    }
}

rain();