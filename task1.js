const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("Data berhasil disimpan");
      }, 3000);
    } else {
      reject("Gagal mengambil data");
    }
  });
};

fetchData(true)
  .then(() => {
    console.log("Data berhasil diambil");
  })
  .catch(() => {
    console.log("Gagal mengambil data");
  });

// async - await

async function getData() {
  try {
    await fetchData(true).then(function () {
      console.log("Data berhasil diambil");
    });
  } catch (error) {
    console.log("Gagal mengambil data");
  }
}
getData();

// try - catch
const ambilData = async () => {
  try {
    const process = await fetchData(true);
    console.log(process);
  } catch (error) {
    console.log("Gagal mengambil data");
  }
};

ambilData();

/*promise adalah tipe data dalam javascript yang mempresentasikan hasil dari Asyncronous
yang akan di teruskan proses pengeksekusiannya
*/

/* then - catch
 dan then- catch adalah metode yang akan menangani berhasil atau gagalnya proses promise di atas(Asyncronous)
yang mengembalikan prommise . keduanya memungkinkan untuk manangani proses async
*/
