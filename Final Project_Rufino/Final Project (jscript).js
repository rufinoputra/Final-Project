var kuantitasBeras = document.getElementById("kuantitasBeras");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var totalHargaBeras = document.getElementById("totalHargaBeras");

plus.addEventListener("click", function() {
  kuantitasBeras.innerText = Number(kuantitasBeras.innerText) + 1;
  console.log(kuantitasBeras.innerText);
  totalHargaBeras.innerText = Number(kuantitasBeras.innerText * hargaBeras.innerText.split('/')[0]);
 console.log(totalHargaBeras.innerText);
});

minus.addEventListener("click", function() {
  if (kuantitasBeras.innerText > 0) {
    kuantitasBeras.innerText = Number(kuantitasBeras.innerText) - 1;
    totalHargaBeras.innerText = Number(kuantitasBeras.innerText * hargaBeras.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasBeras.innerText);
});

var kuantitasGula = document.getElementById("kuantitasGula");
var plus1 = document.getElementById("plus1");
var minus1 = document.getElementById("minus1");
var totalHargaGula = document.getElementById("totalHargaGula")

plus1.addEventListener("click", function() {
  kuantitasGula.innerText = Number(kuantitasGula.innerText) + 1;
  console.log(kuantitasGula.innerText);
  totalHargaGula.innerText = Number(kuantitasGula.innerText * hargaGula.innerText.split('/')[0]);
 console.log(totalHargaGula.innerText);

});

minus1.addEventListener("click", function() {
  if (kuantitasGula.innerText > 0) {
    kuantitasGula.innerText = Number(kuantitasGula.innerText) - 1;
    totalHargaGula.innerText = Number(kuantitasGula.innerText * hargaGula.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasGula.innerText);
});


var kuantitasBawangMerah = document.getElementById("kuantitasBawangMerah");
var plus2 = document.getElementById("plus2");
var minus2 = document.getElementById("minus2");
var totalHargaBawangMerah = document.getElementById('totalHargaBawangMerah')

plus2.addEventListener("click", function() {
  kuantitasBawangMerah.innerText = Number(kuantitasBawangMerah.innerText) + 1;
  console.log(kuantitasBawangMerah.innerText);
  totalHargaBawangMerah.innerText = Number(kuantitasBawangMerah.innerText * hargaBawangMerah.innerText.split('/')[0]);
});

minus2.addEventListener("click", function() {
  if (kuantitasBawangMerah.innerText > 0) {
    kuantitasBawangMerah.innerText = Number(kuantitasBawangMerah.innerText) - 1;
    totalHargaBawangMerah.innerText = Number(kuantitasBawangMerah.innerText * hargaBawangMerah.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasBawangMerah.innerText);
});

var kuantitasBawangPutih = document.getElementById("kuantitasBawangPutih");
var plus3 = document.getElementById("plus3");
var minus3 = document.getElementById("minus3");
var totalHargaBawangPutih = document.getElementById("totalHargaBawangPutih")

plus3.addEventListener("click", function() {
  kuantitasBawangPutih.innerText = Number(kuantitasBawangPutih.innerText) + 1;
  console.log(kuantitasBawangPutih.innerText);
  totalHargaBawangPutih.innerText = Number(kuantitasBawangPutih.innerText * hargaBawangPutih.innerText.split('/')[0]);
});

minus3.addEventListener("click", function() {
  if (kuantitasBawangPutih.innerText > 0) {
    kuantitasBawangPutih.innerText = Number(kuantitasBawangPutih.innerText) - 1;
    totalHargaBawangPutih.innerText = Number(kuantitasBawangPutih.innerText * hargaBawangPutih.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasBawangPutih.innerText);
});

var kuantitasCabeMerah = document.getElementById("kuantitasCabeMerah");
var plus4 = document.getElementById("plus4");
var minus4 = document.getElementById("minus4");
var totalHargaCabeMerah
= document.getElementById("totalHargaCabeMerah")

plus4.addEventListener("click", function() {
  kuantitasCabeMerah.innerText = Number(kuantitasCabeMerah.innerText) + 1;
  console.log(kuantitasCabeMerah.innerText);
  totalHargaCabeMerah.innerText = Number(kuantitasCabeMerah.innerText * hargaCabeMerah.innerText.split('/')[0]);
});

minus4.addEventListener("click", function() {
  if (kuantitasCabeMerah.innerText > 0) {
    kuantitasCabeMerah.innerText = Number(kuantitasCabeMerah.innerText) - 1;
    totalHargaCabeMerah.innerText = Number(kuantitasCabeMerah.innerText * hargaCabeMerah.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasCabeMerah.innerText);
});

var kuantitasCabeKeriting = document.getElementById("kuantitasCabeKeriting");
var plus5 = document.getElementById("plus5");
var minus5 = document.getElementById("minus5");
var totalHargaCabeKeriting = document.getElementById("totalHargaCabeKeriting")

plus5.addEventListener("click", function() {
  kuantitasCabeKeriting.innerText = Number(kuantitasCabeKeriting.innerText) + 1;
  console.log(kuantitasCabeKeriting.innerText);
   totalHargaCabeKeriting.innerText = Number(kuantitasCabeKeriting.innerText * hargaCabeKeriting.innerText.split('/')[0]);
});

minus5.addEventListener("click", function() {
  if (kuantitasCabeKeriting.innerText > 0) {
    kuantitasCabeKeriting.innerText = Number(kuantitasCabeKeriting.innerText) - 1;
     totalHargaCabeKeriting.innerText = Number(kuantitasCabeKeriting.innerText * hargaCabeKeriting.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasCabeKeriting.innerText);
});

var kuantitasTelor = document.getElementById("kuantitasTelor");
var plus6 = document.getElementById("plus6");
var minus6 = document.getElementById("minus6");
var totalHargaTelor = document.getElementById ("totalHargaTelor")


plus6.addEventListener("click", function() {
  kuantitasTelor.innerText = Number(kuantitasTelor.innerText) + 1;
  console.log(kuantitasTelor.innerText);
   totalHargaTelor.innerText = Number(kuantitasTelor.innerText * hargaTelor.innerText.split('/')[0]);
});

minus6.addEventListener("click", function() {
  if (kuantitasTelor.innerText > 0) {
    kuantitasTelor.innerText = Number(kuantitasTelor.innerText) - 1;
     totalHargaTelor.innerText = Number(kuantitasTelor.innerText * hargaTelor.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasTelor.innerText);
});


var kuantitasPete = document.getElementById("kuantitasPete");
var plus7 = document.getElementById("plus7");
var minus7 = document.getElementById("minus7");
var totalHargaPete = document.getElementById("totalHargaPete")


plus7.addEventListener("click", function() {
  kuantitasPete.innerText = Number(kuantitasPete.innerText) + 1;
  console.log(kuantitasPete.innerText);
  totalHargaPete.innerText = Number(kuantitasPete.innerText * hargaPete.innerText.split('/')[0]);
});

minus7.addEventListener("click", function() {
  if (kuantitasPete.innerText > 0) {
    kuantitasPete.innerText = Number(kuantitasPete.innerText) - 1;
     totalHargaPete.innerText = Number(kuantitasPete.innerText * hargaPete.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasPete.innerText);
});


var kuantitasBuncis = document.getElementById("kuantitasBuncis");
var plus8 = document.getElementById("plus8");
var minus8 = document.getElementById("minus8");
var totalHargaBuncis = document.getElementById("totalHargaBuncis");

plus8.addEventListener("click", function() {
  kuantitasBuncis.innerText = Number(kuantitasBuncis.innerText) + 1;
  totalHargaBuncis.innerText = Number(kuantitasBuncis.innerText * hargaBuncis.innerText.split('/')[0]);
});

minus8.addEventListener("click", function() {
  if (kuantitasBuncis.innerText > 0) {
    kuantitasBuncis.innerText = Number(kuantitasBuncis.innerText) - 1;
    totalHargaBuncis.innerText = Number(kuantitasBuncis.innerText * hargaBuncis.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasBuncis.innerText);
});

var kuantitasWortel = document.getElementById("kuantitasWortel");
var plus9 = document.getElementById("plus9");
var minus9 = document.getElementById("minus9");
var totalHargaWortel = document.getElementById("totalHargaWortel")

plus9.addEventListener("click", function() {
  kuantitasWortel.innerText = Number(kuantitasWortel.innerText) + 1;
  console.log(kuantitasWortel.innerText);
  totalHargaWortel.innerText = Number(kuantitasWortel.innerText * hargaWortel.innerText.split('/')[0]);
});

minus9.addEventListener("click", function() {
  if (kuantitasWortel.innerText > 0) {
    kuantitasWortel.innerText = Number(kuantitasWortel.innerText) - 1;
    totalHargaWortel.innerText = Number(kuantitasWortel.innerText * hargaWortel.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasWortel.innerText);
});

var kuantitasTerong = document.getElementById("kuantitasTerong");
var plus10 = document.getElementById("plus10");
var minus10 = document.getElementById("minus10");
var totalHargaTerong = document.getElementById("totalHargaTerong")

plus10.addEventListener("click", function() {
  kuantitasTerong.innerText = Number(kuantitasTerong.innerText) + 1;
  console.log(kuantitasTerong.innerText);
  totalHargaTerong.innerText = Number(kuantitasTerong.innerText * hargaTerong.innerText.split('/')[0]);
});

minus10.addEventListener("click", function() {
  if (kuantitasTerong.innerText > 0) {
    kuantitasTerong.innerText = Number(kuantitasTerong.innerText) - 1;
    totalHargaTerong.innerText = Number(kuantitasTerong.innerText * hargaTerong.innerText.split('/')[0]);
  }
console.log("Di dalam event minus");
console.log(kuantitasTerong.innerText);
});

var totalJumlah = document.getElementById("totalJumlah")
var hitungJumlah = document.getElementById("hitungJumlah")

hitungJumlah.addEventListener("click", function(){
  totalJumlah.innerText = Number(totalHargaBeras.innerText + totalHargaGula.innerText + totalHargaBawangMerah.innerText + totalHargaBawangPutih.innerText + totalHargaCabeMerah.innerText + totalHargaCabeKeriting.innerText + totalHargaTelor.innerText + totalHargaPete.innerText + totalHargaBuncis.innerText + totalHargaWortel.innerText + totalHargaTerong.innerText);
})

console.log(totalJumlah.innerText);


