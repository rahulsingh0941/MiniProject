const YOUR_SERVICE_ID = "service_ooif9kc";
const YOUR_TEMPLATE_ID = "template_29s1yfh";

document.getElementById('loadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      bottle: form.bottle.value,
      quantity: form.quantity.value,
      address: form.address.value
    };

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, data)
      .then(() => {
        alert("Your request has been sent successfully! We will contact you soon.");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("There was an error sending your message.");
      });
});