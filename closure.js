function counter() {
    let i = 0;
    return {
        increment: function () {
            i++;
            console.log(i);

        },
        decrement: function () {
            i--;
            console.log(i);
        },
        getcount: function () {
            console.log(i);
        }
    }
}

const count = counter();
setInterval(() => {
    count.increment();
    count.getcount();
    // count.decrement();
}, 1000

)

/*
- data privacy
- state presistence
- functional programing


clouser in javascript allow to access inner function through outer function
*/
