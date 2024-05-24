import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    
    const delayValue = form.delay.value;
    const stateValue = form.state.value;

    const delayPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateValue === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delayValue}ms`);
            } else if (stateValue === 'rejected') {
                reject(`❌ Rejected promise in ${delayValue}ms`);
            }
        }, delayValue);
    });

    delayPromise
        .then(value => {
            iziToast.show({
                message: value,
                color: 'green',
                position: 'topRight',
            });
        })
        .catch(error => {
            iziToast.show({
                message: error,
                color: 'red',
                position: 'topRight',
            });
        });
    form.reset();
}