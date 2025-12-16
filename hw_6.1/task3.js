function checkOrder(available, ordered) {
    if (ordered === 0) {
        return 'Your order is empty';
    }

    if(available < ordered) {
        return 'Your order is too large, we don’t have enough goods.';
    } else {
        return 'Your order is accepted';
    }
}

console.log(checkOrder(5, 5));
console.log(checkOrder(5, 0));
console.log(checkOrder(5, 6));
