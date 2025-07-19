function convertTemp() {
  const input = document.getElementById('tempInput').value;
  const from = document.getElementById('unitFrom').value;
  const to = document.getElementById('unitTo').value;
  const resultDiv = document.getElementById('result');

  if (input === '' || isNaN(input)) {
    resultDiv.innerText = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(input);
  let converted;

  if (from === to) {
    converted = temp;
  } else if (from === 'C' && to === 'F') {
    converted = (temp * 9/5) + 32;
  } else if (from === 'C' && to === 'K') {
    converted = temp + 273.15;
  } else if (from === 'F' && to === 'C') {
    converted = (temp - 32) * 5/9;
  } else if (from === 'F' && to === 'K') {
    converted = (temp - 32) * 5/9 + 273.15;
  } else if (from === 'K' && to === 'C') {
    converted = temp - 273.15;
  } else if (from === 'K' && to === 'F') {
    converted = (temp - 273.15) * 9/5 + 32;
  }

  resultDiv.innerText = `Result: ${converted.toFixed(2)} °${to}`;
}
