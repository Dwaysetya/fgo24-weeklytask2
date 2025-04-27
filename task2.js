const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = ["product 1", "product 2", "product 3"];
      callback(products, null);
    }, 3000);
    return;
  } else {
    const err = new Error("Failed to fatch data");
    callback(null, err);
  }
};

const procesData = (prod, err) => {
  try {
    if (prod) {
      prod.map((item) => {
        console.log(item);
      });
    } else {
      throw Error;
    }
  } catch (error) {
    console.log("data error");
  }
};

getDataFromServer(true, procesData);
