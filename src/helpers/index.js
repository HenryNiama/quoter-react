
const formatearDinero = (value) => {

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

}


const calculeTotal = (amount, term) => {

        let totalAmount;

        // Mientras mayor es la cantidad, menor es el interes.
        if (amount < 5000) {
            totalAmount = amount*(1.5);

        }else if(amount >= 5000 && amount < 10000){
            totalAmount = amount*(1.4);

        }else if(amount >= 10000 && amount <= 15000){
            totalAmount = amount*(1.3);

        }else{
            totalAmount = amount*(1.2);
        }

        // Mas plazo, mayor interes
    if (term === 6) {
        totalAmount *= 1.1;

    } else if(term === 12) {
        totalAmount *= 1.2;

    } else{
        totalAmount *= 1.3;
    }

    return totalAmount;
}


export  {
    formatearDinero,
    calculeTotal
}