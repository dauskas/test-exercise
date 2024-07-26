document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();

    let exampleModal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    if (exampleModal) {
      exampleModal.hide();
    }
    let secondModal = new bootstrap.Modal(
      document.getElementById("secondModal")
    );
    secondModal.show();
  });
});
