let price;


window.onload = function() {
    price = document.querySelectorAll ('.price-item');

    sumPrices();

    function sumPrices () {
        let i = 0;
        let sum = 0;
        sum1 ();
        function sum1 () {
            if (i < price.length) {
                let priceItem = +price[i].innerText;
                sum += priceItem;
                i++;
                sum1();
            }
        }
        let total = document.querySelector ('.total');
        total.textContent = sum;
    }
    
}

let p = 0;
function sale () {
    if (p < 1) {
        let i = 0;
        let sum = 0;
        sum2 ();
        p++;
        function sum2 () {
            if (i < price.length) {
                let priceItem = +price[i].innerText*0.8;
                price[i].innerText = priceItem.toFixed(2);
                sum += priceItem;
                i++;
                sum2();
            }
        }
    let total = document.querySelector ('.total');
    total.textContent = sum.toFixed(2);
    document.querySelector('button').innerText = 'Отменить скидку';
    }
    else if (p = 1) {
        location.reload();
        }
    }



