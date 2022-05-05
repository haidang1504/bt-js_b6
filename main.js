// Bai 1
document.getElementById("bntBang").onclick = function () {
    var number_3 = document.getElementById("txtNumber").value;
     

    var count = ""
    var n 

  for (i = 1; count < n; i++) {
      if (condition) {
          const element = array[index];
      }
    
  }
  document.getElementById("footerCard").innerHTML=number_3;
}


//Bai 2
document.getElementById("bntTong").onclick = function () {

    var number_1 = document.getElementById("txtNumberN").value;
    var number_2 = document.getElementById("txtNumberX").value;

    var tong = number_1 + number_2 
    var kQua = "Tong la " + tong
    console.log(kQua);

    document.getElementById("footerCards").innerHTML=kQua;
}



//Bài 3

document.getElementById("bntGiaiThua").onclick = function () {
    var number = document.getElementById("txtNumber").value;


    var number = 5;
    var cont = 1;
    var i = 1;

    for (i = 1; i <= number; i++) {
        cont = cont * i;
        console.log(cont);
    }

    var ketQuaGiaThua = ("Giai thừa của " + number + " là: " + cont);

    document.getElementById("footerCard_1").innerHTML = ketQuaGiaThua;
}




//Bài 4
document.getElementById("bntTaoThe").onclick = function () {
    var number1 = document.getElementById("tntNumber").value

    var soChan = "";
    var soLe = "";
    var tongChan = 0;
    var tongLe = 0;

    for (var i = 0; i < number1; i++) {
        if (i % 2 === 0) {
            soChan += i + " ";
            tongChan += i;

        } else {
            soLe += i + " ";
            tongLe += i;
            
        }
    }

    var ketQua = "Div chẵn là : " + soChan +"</br>" + "Div lẻ là : " + soLe ;
    

    document.getElementById("btnFooter").innerHTML = ketQua;
}
