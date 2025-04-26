const divideAndSort = (value) => {
  if (typeof value === "number") {
    const separator = value.toString().split("0");
    const array1 = separator
      .slice(0, 1)
      .map(Number)
      .toString()
      .split("")
      .sort();
    const array2 = separator
      .slice(1, 2)
      .map(Number)
      .toString()
      .split("")
      .sort();
    const array3 = separator.slice(-1).map(Number).toString().split("").sort();
    const gabungan = [...array1, ...array2, ...array3];
    const result = gabungan.join("");
    console.log(Number(result));
  } else {
    console.log("Inputan harus berupa integer/number");
  }
};

divideAndSort(5956560159466056);

// simple

// const divideAndSort = (value) => {
//   if (typeof value === "number") {
//     const separator = value
//       .toString()
//       .split("0")
//       .map((item) =>
//         item
//           .split("")
//           .sort((a, b) => a - b)
//           .join("")
//       )
//       .join("");
//     console.log(Number(separator));
//   } else {
//     console.log("Inputan harus berupa integer/number");
//   }
// };

// divideAndSort(5956560159466056);
