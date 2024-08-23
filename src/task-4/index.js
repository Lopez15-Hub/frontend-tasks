const captureValues = () => {
  const name = document.getElementById("name");
  const lastName = document.getElementById("lastName");
  const dropdownCountry = document.getElementById("dropdown-country");
  const comments = document.getElementById("comments");
  if (
    name.value.length &&
    lastName.value.length &&
    dropdownCountry.value.length &&
    comments.value.length
  ) {
    console.log({
      name: name.value,
      lastName: lastName.value,
      dropdownCountry: dropdownCountry.value,
      comments: comments.value,
    });
  } else {
    window.alert("Rellene los campos para continuar");
  }
};
