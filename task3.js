const url = "https://jsonplaceholder.typicode.com/users";

const fetchApi = async () => {
  try {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    filterData(data);
  } catch (error) {
    console.log("Data tidak ditemukan");
  }
};

fetchApi();

const filterData = (data) => {
  if (data) {
    const filter = data.map((item) => ({
      name: item.name,
      address: item.address.city,
    }));
    const sort = filter.sort((a, b) => a.address.localeCompare(b.address));
    console.log(sort);
  }
};
filterData();
