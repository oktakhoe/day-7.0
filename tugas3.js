/* MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang sering muncul (mayoritas) dari daftar nilai array. */

// Note: hanya boleh menggunakan looping (for), percabangan, dan operator javascript

// [EXAMPLE]
// INPUT : [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
// OUTPUT : [9, 3, 3, 4, 2, 5, 5, 5]

// INPUT : [22, 22, 100, 100, 100, 2000]
// OUTPUT : [22, 22, 2000]

// INPUT : [2, 2]
// OUTPUT : []

// INPUT : [4, 4, 4, 1, 1, 1, 2, 2]
// Jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
// OUTPUT : [1, 1, 1, 2, 2]

function MajoritySweeper(arr) {
  const counts = {}; //menampung angka yang akan dihitung jumlah kemunculannya
  let majority = ""; //angka yang paling sering muncul
  let maxCount = 0; //untuk menampung jumlah munculnya angka majority
  const result = []; //untuk menampung result akhir

  // Hitung kemunculan setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }

    // Temukan nilai mayoritas
    for (const num in counts) {
      if (
        counts[num] > maxCount ||
        (counts[num] === maxCount && num == arr[i] && majority == arr[i + 1])
      ) {
        majority = num;
        maxCount = counts[num];
      }
    }
  }

  // Filter elemen-elemen yang bukan mayoritas atau yang pertama kali ditemui
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== Number(majority) || counts[arr[i]] === 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

// TEST CASE
console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); //[9, 3, 3, 4, 2, 5, 5, 5]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); //[22, 22, 2000]
console.log(MajoritySweeper([2, 2])); //[]
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); //[1, 1, 1, 2, 2]
