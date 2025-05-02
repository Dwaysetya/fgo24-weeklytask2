const divideAndSort = (value) => {
  if (typeof value === "number") {
    const separator = value
      .toString()
      .split("0")
      .map((item) =>
        item
          .split("")
          .sort((a, b) => a - b)
          .join("")
      )
      .join("");
    console.log(Number(separator));
  } else {
    console.log("Inputan harus berupa integer/number");
  }
};

divideAndSort(5956560159466056);
