const add = (a, b) => a + b;
console.log(add(2, 3)); // 5



const complicated = arr => {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i], i);
    }
};

complicated([1, 2, 3]);


[1, 2, 3].forEach(number => console.log(number));
