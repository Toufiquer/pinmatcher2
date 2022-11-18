function dqs(id) {
  return document.querySelector(id);
}
function createPin() {
  let pin = Math.round(Math.random() * 10000);
  if (pin > 999) {
    return pin;
  } else {
    return createPin();
  }
}
function showPin(id, value) {
  dqs(id).value = value;
}
function getPin(id) {
  return dqs(id).value;
}
dqs("#generatePin").addEventListener("click", function () {
  const pin = createPin();
  showPin("#generateText", pin);
});
dqs("#calBody").addEventListener("click", function (e) {
  const calValue = e.target.innerText;
  if (isNaN(calValue)) {
    // button
    if (calValue === "C") {
      dqs("#showPin").value = "";
    } else if (calValue === "Submit") {
      const generatePin = getPin("#generateText");
      const calPin = getPin("#showPin");
      if (generatePin === calPin) {
        dqs("#didNot").style.display = "none";
        dqs("#match").style.display = "block";
      } else {
        dqs("#didNot").style.display = "block";
        dqs("#match").style.display = "none";
        console.log("none", " => Line No: 37");
      }
    }
  } else {
    let value = dqs("#showPin").value;
    if (value.length > 3) {
      alert("Max 4 length");
    } else {
      value = value + calValue;
      dqs("#showPin").value = value;
    }
  }
});
