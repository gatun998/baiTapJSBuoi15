// model 
function xuLyLogic (sumIncome,numberOfDependants) {
    return sumIncome - 4000000 - (numberOfDependants * 1600000);

}
// controller 
function tinhTienThue(){
    // Input 
    let name = document.getElementById("hoTen").value;
    let sumIncome = document.getElementById("tongThuNhap").value
    let numberOfDependants = document.getElementById("soNguoiPhuThuoc").value;

    // Pass Parameters
    let xuLyLoGic = xuLyLogic(sumIncome,numberOfDependants);

    //Render UI
    let ketQua = document.getElementById("ketQua");
    ketQua.innerHTML = `Tổng thu nhập trừ thuế của ${name} là: ${xuLyLoGic}`;
}