// hàm tình điểm trung bình
// function tinhDTB(d1,d2,d3) {
//     return (d1 + d2 + d3) /3;
// }

// Hàm tính điểm trung bình dưới dạng arrow function
const tinhDTB = (d1,d2,d3) => (d1 + d2 + d3)/3;

// check win
function checkWin(dolphinDiem, koaloasDiem) {
    const dolphinTB = tinhDTB(...dolphinDiem);
    const koalasTB = tinhDTB(...koaloasDiem);

    if(dolphinTB >= koalasTB*2) {
        console.log("Dolphins thắng");
    } else if(koalasTB >= dolphinTB * 2) {
        console.log("Koalas thắng");
    } else {
        console.log("Không đội nào thắng");
    }
}

// bộ dữ liệu mẫu
const dolphinDiem_1 = [44,23,71];
const koalasDiem_1 = [65,54,49];

const dolphinDiem_2 = [85,54,41];
const koalasDiem_2 = [23,34,27];

//
console.log("Test dữ liệu 1: ");
checkWin(dolphinDiem_1, koalasDiem_1);

console.log("Test dữ liệu 2: ");
checkWin(dolphinDiem_2, koalasDiem_2);

