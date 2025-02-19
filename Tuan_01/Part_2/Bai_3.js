// hàm tính BMI
function tinhBMI(mass, heigh) {
    return mass / (heigh**2)
}

// tọa đối tượng Mark
const mark = {
    fullName : "Mark Miller",
    mass: 78, //kg
    height: 1.69, // chiều cao
    calcBMI: function(){
        return tinhBMI(this.mass, this.height);
    }
};

// tạo đối tượng John
const john = {
    fullName : "John Smith",
    mass: 92, //kg
    height: 1.95, // chiều cao
    calcBMI: function(){
        return tinhBMI(this.mass, this.height);
    }
};

// tính BMU của cả 2
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// so sánh
if(markBMI > johnBMI) {
    console.log(`${mark.fullName}: BMI(${markBMI}) cao hơn ${john.fullName}: BMI${johnBMI}`);
} else if (mark.calcBMI < john.calcBMI) {
    console.log(`${john.fullName}: BMI(${johnBMI}) cao hơn ${mark.fullName}: BMI${markBMI}`);
} else {
    console.log(`Cả 2 bằng nhau BMI: ${johnBMI}`);
}
