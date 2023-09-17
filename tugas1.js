const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan tahun: ", (tahun) => {
  tahun = parseInt(tahun);

  function kabisat(tahun) {
    if ((tahun % 4 == 0 && tahun % 100 !== 0) || 0 == tahun % 400) {
      console.log(tahun + ` merupakan tahun kabisat.`);
    } else {
      console.log(tahun + ` bukan merupakan tahun kabisat.`);
    }

    rl.close();
  }

  kabisat(tahun);
});
