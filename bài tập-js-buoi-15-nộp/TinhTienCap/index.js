function toggleType () {
    var customerType = document.getElementById("customerType").value;
    var numOfConnections = document.getElementById("numOfConnections");
    if (customerType === "nhaDan"){
        numOfConnections.style.display = "none";
    } else if (customerType === "doanhNghiep"){
        numOfConnections.style.display = "block";
    }

}

// Model

var phiXuLyHoaDon ;
var phiDichVuCoBan;
var phiThueKenhCaoCap;

function xuLyLogic (customerType,soConnection,numOfChannels) {
    var tong = 0;
    switch (customerType) {
        case "nhaDan":{
            phiXuLyHoaDon = 4.5;
            phiDichVuCoBan = 20.5;
            phiThueKenhCaoCap = 7.5 * numOfChannels;
            break;
        }
        case "doanhNghiep": {
            phiXuLyHoaDon = 15;
            phiDichVuCoBan = 75 + (soConnection > 10) ? (soConnection - 10) * 5 : 0;
            phiThueKenhCaoCap = 50 * numOfChannels;
            break;
        }
    }
    return tong += phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

}


// Controller 
function tinhTienCap(){
    // Input 
    let customerCode = document.getElementById("customerCode").value;
    let customerType = document.getElementById("customerType").value;
    let soConnection = document.getElementById("soConnection").value * 1;
    let numOfChannels = parseFloat(document.getElementById("numOfChannels").value);
    

    // Pass Parameters 
    var result = xuLyLogic(customerType,soConnection,numOfChannels);

    // Output 
    const ketQua = document.getElementById("ketQua");
    ketQua.innerHTML = `Phiếu Tính Tiền là: <br>
    Mã Khách Hàng:  ${customerCode}, <br>
    Loại Khách hàng: ${customerType}, <br>
    Số Kết Nối: ${soConnection}, <br>
    Phí Dịch Vụ Cơ Bản: ${phiDichVuCoBan}, <br>
    Số Kênh Cao Cấp: ${numOfChannels}, <br>
    Phí Thuê Kênh Cao Cấp: ${phiThueKenhCaoCap}, <br>
    Tổng chi phí hoá đơn là: ${result} <br>
    `
}



