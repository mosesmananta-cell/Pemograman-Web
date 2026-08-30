let umur = 19;
let Minimal_Umur_Pembuatan_KTP = 17;

let bisaBuatKTP = umur >= Minimal_Umur_Pembuatan_KTP;

if (bisaBuatKTP) {
    console.log("Bagus kamu memenuhi syarat untuk membuat KTP");
} else {
    console.log('maaf, kamu belum bisa memenuhi syarat');
}
