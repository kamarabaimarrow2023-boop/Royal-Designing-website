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