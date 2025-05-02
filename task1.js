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
fetchData(false)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function getData() {
  try {
    const result = await fetchData(true);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getData();


/*

PROMISE
Promise adalah tipe objek di JavaScript yang merepresentasikan hasil dari operasi asynchronous 
yang nantinya akan diteruskan ke proses eksekusi berikutnya.
promise itu seperti janji di JavaScript, yang nunggu hasil asynchronous, 
lalu setelah selesai, baru lanjut prosesnya.
ada beberapa state di dalam PROMISE:
- pending = menunggu
- fullfield = Berhasil
- rejected = Gagal

THEN - CATCH

 .then() akan jalan kalau Promise-nya berhasil (resolve), dan .catch() akan jalan kalau Promise-nya gagal (reject).
Keduanya ngebantu banget buat ngatur alur program asynchronous supaya lebih rapi 
dan gampang di-handle tanpa harus ribet pakai callback bertumpuk.

ASYNC - AWAIT dan TRY-CATCH

Async-await adalah cara dalam JavaScript untuk menulis kode asynchronous yang terlihat lebih rapi 
dan mudah dibaca seperti kode synchronous (berurutan). Dengan async, sebuah fungsi otomatis mengembalikan promise, 
dan await digunakan untuk menunggu hasil promise tersebut sebelum melanjutkan ke baris kode berikutnya.

Sedangkan try-catch adalah cara untuk menangkap dan menangani error yang mungkin terjadi saat kode dijalankan. 
Kode yang error dapat dimasukkan ke dalam blok catch.
*/

