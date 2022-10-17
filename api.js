function adviceGenerator() {
    
    let btnAdvice = document.getElementById('btnAdvice');
    btnAdvice.innerHTML = `<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_20lywwls.json"  background="transparent"  speed="1"  style="width: 3em; height: 3em;"  loop  autoplay></lottie-player>`

    fetch('https://api.adviceslip.com/advice').then((data) => {
        data.json().then((resp) => {
            resp = resp.slip;
            
            btnAdvice.innerHTML = `New advice`;
            let campoConselho = document.getElementById('campoConselho');
            campoConselho.innerHTML = `${resp.advice}`;
        })
    })
    
}