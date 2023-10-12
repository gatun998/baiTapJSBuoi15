


// Model 
function xuLyLogicBaiTap1(Diem1, Diem2, Diem3, diemChuan,diemTong){
    if(diemTong >= diemChuan && Diem1 != 0 && Diem2 != 0 && Diem3 != 0 ){
        return "Bạn đậu rồi!!!!";
    }
    return "Bạn rớt rồiI!!!!!";
}

function logicDiemKhuVuc(khuVuc){
    // let areaValue = "";
    // if(khuVuc == "A"){
    //     areaValue = 2;
    // } else if(khuVuc == "B"){
    //     areaValue = 1;
    // } else if(khuVuc == "C"){
    //     areaValue = 0.5;
    // } else{
    //     return "Lỗi";
    // }
    // return areaValue;

    let areaValue = "";
    switch (khuVuc){
        case "A":{
            areaValue = 2;
            break;
        } case "B":{
            areaValue = 1;
            break;
        } case "C":{
            areaValue = 0.5;
            break;
        } default: {
            break;
        }
    }
    return areaValue;
}


function logicDiemDoiTuong(doiTuong){
    // let object = "";
    // if(doiTuong == 1){
    //     object = 2.5;
    // } else if(doiTuong == 2) {
    //     object = 1.5;
    // } else if (doiTuong == 3){
    //     object = 1;
    // } else {
    //     return "Lỗi";
    // }
    // return object;

    let objectValue = "";
    switch (doiTuong){
        case 1: {
            objectValue = 2.5;
            break;
        } case 2: {
            objectValue = 1.5;
            break;
        } case 3: {
            objectValue = 1;
            break;
        } default: {
            break;
        }
    }
    return objectValue;
}

function logicDiem3Mon(Diem1,Diem2,Diem3){
    return Diem1 + Diem2 + Diem3;
}
function logicDiemUuTien(khuVuc,doiTuong){
    return khuVuc + doiTuong;
}

function logicDiemTong(diem3Mon,diemUuTien){
    return parseFloat(diem3Mon + diemUuTien);
}
// console.log(logicDiemTong(2,3));




// Controller 
function layThongTinQuanLyTuyenSinh(){


    // Nhập liệu 
    var diemChuan = document.getElementById("diemChuan").value;
    var Diem1 = parseFloat(document.getElementById("Diem1").value);
    var Diem2 = parseFloat(document.getElementById("Diem2").value);
    var Diem3 = parseFloat(document.getElementById("Diem3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = parseFloat(document.getElementById("doiTuong").value);


    // Truyền tham số 
    var diemKhuVuc = logicDiemKhuVuc(khuVuc);
    var diemDoiTuong = logicDiemDoiTuong(doiTuong);
    var diem3Mon = logicDiem3Mon(Diem1,Diem2,Diem3);
    var diemUuTien = logicDiemUuTien(diemKhuVuc,diemDoiTuong);
    var diemTong = logicDiemTong(diem3Mon,diemUuTien);
    var ketQuaBaiTap1 = xuLyLogicBaiTap1(Diem1,Diem2,Diem3,diemChuan,diemTong);


    // In ra màn hình

    // In ra khu vực 
    var Area = document.getElementById("khuVucBaiTap1");
    Area.innerHTML = `Khu Vực của thí sinh là: ${diemKhuVuc}`;

    // In ra diện đối tượng 
    var Object = document.getElementById("doiTuongBaiTap1");
    Object.innerHTML = `Thí sinh thuộc diện đối tượng là: ${diemDoiTuong}`;

    // In ra tổng điểm ưu tiên bài tập 
    var priorityScore = document.getElementById("tongDiemUuTienBaiTap1");
    priorityScore.innerHTML = `Tổng điểm ưu tiên của thí sinh là: ${diemUuTien}`;

    // In ra tổng điểm 3 môn 
    var Total3subjects = document.getElementById("tongDiem3Mon");
    Total3subjects.innerHTML = `Tổng điểm 3 môn của thí sinh là: ${diem3Mon}`;

    // In ra điểm tổng kỳ thì của thí sinh 
    var TotalScore = document.getElementById("diemTongKyThi");
    TotalScore.innerHTML = `Điểm tổng kỳ thi của thí sinh là: ${diemTong}`;

    // In ra kết quả đậu hay rớt 
    var ketQuaQuanLyTuyenSinh = document.getElementById("ketQuaQuanLyTuyenSinh");
    ketQuaQuanLyTuyenSinh.innerHTML = `Kết quả là: ${ketQuaBaiTap1}`;
}