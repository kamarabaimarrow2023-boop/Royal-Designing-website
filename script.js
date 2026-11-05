const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

console.log("Royal Designing Multi Centre website loaded successfully!");

const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName =
            document.getElementById("customerName").value.trim();

        const service =
            document.getElementById("service").value;

        const orderDetails =
            document.getElementById("orderDetails").value.trim();

        if (!customerName || !service || !orderDetails) {
            alert("Please complete all the fields.");
            return;
        }

        const message =
            "Hello Royal Designing Multi Centre!\n\n" +
            "My name is: " + customerName + "\n" +
            "Service: " + service + "\n" +
            "Order details: " + orderDetails;

        const whatsappNumber = "23277615936";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });
}
// CUSTOMER ORDER FORM - WHATSAPP
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const service = document.getElementById("serviceType").value;
    const details = document.getElementById("orderDetails").value;

    const message = `NEW CUSTOMER ORDER

Name: ${name}
Phone: ${phone}
Service: ${service}
Order Details: ${details}`;

    const whatsappURL = "https://wa.me/23278900530?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});