function recursiveCounter(num) {
    console.log(num);
    if (num <= 0) {
        return;
    } else {
        recursiveCounter(num - 1);
    }
}
recursiveCounter(5);