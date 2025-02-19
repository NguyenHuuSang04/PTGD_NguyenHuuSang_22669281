function calcTip (bill) {
    // if(bill >= 50 && bill <=300) {
    //     return bill*0.15;
    // } else {
    //     return bill * 0.2;
    // }
    return bill>=50 && bill<=300? bill*0.15 : bill*0.2;
}

function calcTB(arr) {
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

const bills = [100,200,300,200,250,120,100,200,400,550];
const tips = [];
const totals = [];

for(let i =0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log("Mảng hóa đơn", bills);
console.log("Mảng tip: ", tips);
console.log("Mảng total: ", totals);
console.log("Trung bình cộng của cả mảng bills: ", calcTB(totals));
