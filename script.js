const text = document.getElementById('textvalue');
const button = document.getElementById('enterbutton');

function primeFactors(n) {
  var factors = [];
  var divisor = 2;

  while (divisor <= n) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

button.addEventListener('click', function() {
  const value = text.value;

  const prime = primeFactors(value);
  const result = value + " prime factors: " + prime.join(", ");
  alert(result);
});
