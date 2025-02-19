const arr_1=[17,21,23];
const arr_2=[12,5,-5,0,4];

function printForecast(arr) {
    for (let i =0; i< arr.length; i++) {
        console.log(`${arr[i]}°C in ${i+1} days`);
    }
}
console.log("Dữ liệu 1: ")
printForecast(arr_1);

console.log("Dữ liệu 2: ")
printForecast(arr_2);