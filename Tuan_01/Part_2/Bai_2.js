// function TienTip(soTien) {
//     if(soTien >=50 && soTien <=300) {
//         return 0.15*soTien;
//     } else {
//         return 0.2*soTien;
//     }
// }

const TienTip = (soTien) => (soTien) >=50 && soTien <=300 ?soTien *0.15 : soTien *0.2;


const bills = [125,555,44];
const tips = bills.map(TienTip);
const total = bills.map((bill, i) => bill + tips[i]);
//array.map((element, index, array) => {...})
//element (bill): giá trị của từng phần tử trong mảng bills
//index (i): vị trí của phần tử trong mảng bills
//array: chính là bills, nhưng chúng ta không cần dùng trong trường hợp này

// for (let i =0; i < bills.length; i++ ){
//     tips[i] = TienTip(bills[i])
//     total[i] = tips[i] + bills[i];
// }

console.log("Các giá trị của bills: " + bills);
console.log("Các giá trị của tips: " + tips);
console.log("Các giá trị của total: " + total);