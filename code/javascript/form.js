// PRICE CALCULATOR
const bottleSize = document.getElementById("bottleSize");
const quantity = document.getElementById("quantity");
const priceBox = document.getElementById("totalPrice");

function calculatePrice() {
  let size = bottleSize.value;
  let qty = quantity.value;
  let price = 0;

  if (size == "500") price = 4;
  if (size == "750") price = 6;
  if (size == "1000") price = 8;

  priceBox.innerHTML = (qty > 0 && size)
    ? "Total Price: ₹" + (price * qty)
    : "Total Price: ₹0";
}

bottleSize.addEventListener("change", calculatePrice);
quantity.addEventListener("input", calculatePrice);


// EMAILJS SEND ORDER
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = bottleSize.value;
  const qty = quantity.value;

  let unitPrice = size == "500" ? 4 : size == "750" ? 6 : 8;
  let total = unitPrice * qty;

  const data = {
    name: this.name.value,
    phone: this.phone.value,
    bottle: size + " ml",
    quantity: qty,
    totalPrice: "₹" + total,
    address: this.address.value
  };

  emailjs.send("service_ooif9kc", "template_29s1yfh", data)
    .then(() => {
      alert("Order sent successfully!");
      this.reset();
      priceBox.innerHTML = "Total Price: ₹0";
    })
    .catch(error => {
      console.error("EmailJS Error:", error);
      alert("Failed to send order. Check console for details.");
    });
});
