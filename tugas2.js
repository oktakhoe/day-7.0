/* Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9. */

// Note: hanya boleh menggunakan looping (for), percabangan, dan operator javascript

function hapusSimbol(str) {
  let result = ""; //string kosong untuk menyimpan karakter yang telah difilter

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i); //ambil karakter pada indeks ke-i

    // periksa apakah karakter adalah huruf kecil (a-z) atau angka (0-9)
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      result += char; //tambahkan karakter yang valid ke hasil
    }
  }

  return result;
}

// TEST CASE
console.log(hapusSimbol("test%$4aa")); //test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); //devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); //makan
console.log(hapusSimbol("coding")); //coding
console.log(hapusSimbol("1+3-5*2=100")); //1352100
