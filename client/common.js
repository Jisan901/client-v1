function dangerAlert(massage,time) {
    const danger = document.createElement('div');
    danger.classList.add('alert-danger');
    danger.innerText=massage;
    const timeout = setTimeout(function() {
        danger.classList.add('danger-hide');
        const tm3 = setTimeout(()=>{
            document.removeChild(danger);
        },1000);
    }, time);
}