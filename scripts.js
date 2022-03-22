//         1. False : var có phạm vi là global /
//                    function scope và có hỗ trợ hoisting
//         2. True | const và let có phạm vi trong block
//         3. True |      và không hỗ trợ hoisting 
//         4. (3).{ foo: 1, bar:2}
//         5. (4).'The quick brown fox jumps over the lazy dog.
//         6.  undefined
//         7. error
//         8. [1, 23, 4]
//         9. 3
//         10. a = 3, b = 12
//         11. {name: “MindX”}
//         12. [2, 2, 6, 4, 10]
//         13. 16
// thực hành
// bai  1
let reverseString = (string) => {
    return string.split('').reverse().join('');
}

//bai  2
const array = [0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
let uniqueArray = (arr) => {
    let uniqueSet = new Set(arr);
    return [...uniqueSet];
}
console.log(uniqueArray(array))

//bai 3
let foo = (arr) => {
    let value = [],
        count = [],
        pre;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== pre) {
            value.push(arr[i]);
            count.push(1);
        } else {
            count[count.length - 1]++
        }
        pre = arr[i]
    }
    return [value, count]
}

//bai 4