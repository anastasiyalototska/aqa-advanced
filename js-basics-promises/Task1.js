function saySmth(phrase, time) {
    setTimeout(() => {
        console.log(phrase);
    }, time);
}

saySmth('Hello world!', 5000);
