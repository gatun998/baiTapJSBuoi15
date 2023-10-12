//Model 
function xuLyLoGic(soKW){
    var giaTien = 0;
    switch(true) {
        case (soKW <= 50):{
            giaTien = soKW * 500;
            break;
        }
        case (soKW <= 100):{
            giaTien = 50 * 500 + (soKW - 50) * 650 ;
            break;
        }
        case (soKW <=200) :{
            giaTien = 50 * 500 + 50 * 650 + (soKW - 100) * 850 ;
            break;
        }
        case (soKW <=350) :{
            giaTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
            break;
        } default :{
            giaTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ((soKW - 350) * 1300);
            break;
        }
    }
    return giaTien;
}

xuLyLoGic(100000)

// controller 
function tinhTienDien(){
    // Input 
    let inputKWName;

    // var userName = document.getElementById("nhapTen").value;
    // var kW = document.getElementById("nhapKW").value;


    // const inputName = document.getElementById("inputName");
    // // check exist
    // if(inputName){
    //     var userName = inputName.querySelector("userName");
    // }
    
    const inputKW = document.getElementById("inputKW");
    if (inputKW){

        
        let soKW = inputKW.querySelector('input[name = "nameKW"]');
     inputKWName = soKW.value * 1;

// Pass Parameters 

        let tinhTienDien = xuLyLoGic(soKW);

    // Output 
    const result = document.getElementById("ketQua");
    result.textContent = `Tổng số tiền điện của  phải trả là: ${tinhTienDien}`;
        
    }

    // inputUserName= userName.value;


    
}

