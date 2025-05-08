document.getElementById('contactBtn').addEventListener('click', function () {
    let modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
  });
  document.getElementById("ambulanceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const contact = document.getElementById("contact").value;
    document.getElementById("ambulanceResponse").innerText =
      "Ambulance requested at " + address + ", Pincode: " + pincode + ", Contact: " + contact;
  });