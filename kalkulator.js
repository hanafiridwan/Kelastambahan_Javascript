let tombol = document.querySelector(".kalkulator-tombol");
let kalkulator = document.querySelector("#kalkulator");//agar saat klik tombolnya, hasilnya akan muncul di inputan

//bedanya querySelector dengan getElemenby... adalah querySelector harus memanggil parameternya seperti memanggil di css seperti kalau class harus menggunakan titik , kalau id harus menggunakan pagar 
// console.log(tombol); hasilnya akan muncul codingan HTML nya
tombol.addEventListener("click", function(e){
    let tombolClick = e.target;
    let nilaiTombol = tombolClick.innerText;

    if(nilaiTombol === "C"){
        kalkulator.value = ""; //cara bacanya "kalkulator isinya bersih"
    } else if(nilaiTombol == "<"){
        kalkulator.value = kalkulator.value.slice(0, -1); //"kalkulator isinya adalah kalkulator akan nge slice atau saat meng klik < di kalkulatornya maka akan terhapus. dan maksud dari (0, -1) adalah isi dari inputan misal 6666 angkanya dihitung dari belakang dan dimulai dari 0, -1 maksudnya dikurangi atau dihapus 1"
    }else if(nilaiTombol == "="){
        kalkulator.value = eval(kalkulator.value); //maksud dari eval adalah saat meng-klik tanda =, maka hasil hitungannya akan muncul.
    }else {
        kalkulator.value = kalkulator.value + nilaiTombol;
    }
});
//alert(nilaiTombol); hasilnya kita bisa membuat setiap tombol yg ditekan muncul sebagai Alert, yg berarti kita berhasil membuatnya menjadi dinamis
//alert("test");
 //cara bacanya "tolong ubah div tombol menjadi fungsi yang bisa di klik, lalu jalankan fungsinya(ketika meng-klik tombol yang ada di kalkulator-tombol maka akan muncul tulisan alert test.)". addEventListener bisa mengubah yang tadinya bukan fungsi menjadi fungsi