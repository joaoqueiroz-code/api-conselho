function adviceGenerator() {
    
    let btnAdvice = document.getElementById('btnAdvice');

    fetch('https://api.adviceslip.com/advice').then((data) => {
        data.json().then((resp) => {
            resp = resp.slip;
            
            let campoConselho = document.getElementById('campoConselho');
            campoConselho.innerHTML = `${resp.advice}`;
        })
    })
    
}