const convertTemp = () => {
  const numTemp = document.getElementById("temp").value;
  // console.log(numTemp); // output verified
  const SelectedType = document.getElementById("temp_diff").value;
  // console.log(SelectedType); // output verified
  let output;
  if (SelectedType === "celsuis") {
    output = numTemp * (9 / 5) + 32;
    document.getElementById("output_result").innerHTML = `${output} Fahrenheit`;
  } else {
    output = (5/9)*numTemp-32;
    document.getElementById("output_result").innerHTML = `${output} Celsuis`;
  }
};
