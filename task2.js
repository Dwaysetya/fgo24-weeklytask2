const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = ["Product 1", "Product 2", "Product 3"];
      callback(products, null);
    }, 3000);
    return;
  } else {
    const err = new Error("Failed to fetch data");
    callback(null, err);
  }
};

const processData = async (products, err) => {
  try {
    if (products) {
      products.forEach((element) => {
        console.log(element);
      });
    } else {
      throw err;
    }
  } catch (error) {
    console.log("data error :", error.message);
  }
};

getDataFromServer(true, processData);
