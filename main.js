function getValue() {
    let value = +document.getElementById('inputNumber').value
    countDown(value)
}

function countDown(value) {
    let promise = new Promise((resolve,reject) => {
        if (value >=0 ) {
            setTimeout(() => {
                document.getElementById('time-countdown').innerHTML = value
                value--
                countDown(value)
            },1000)        
        }
        else {
            document.getElementById('time-countdown').innerHTML = 'Finished countdown'         
        }
    })
}