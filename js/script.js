// Tampilkan jam realtime
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toString();
}
setInterval(updateTime, 1000);

// Handle form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("messageText").value;

  document.getElementById("outName").textContent = name;
  document.getElementById("outDob").textContent = dob;
  document.getElementById("outGender").textContent = gender;
  document.getElementById("outMessage").textContent = message;
});
