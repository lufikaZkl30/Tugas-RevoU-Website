document.getElementById("enterBtn").addEventListener("click", function() {
  let name = document.getElementById("usernameInput").value.trim();

  if (name === "") {
    alert("Masukkan nama dulu ya 😊");
    return;
  }

  // Tampilkan nama di hero
  document.getElementById("username").textContent = name;

  // Transition keluar welcome
  let welcome = document.getElementById("welcomeScreen");
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    let main = document.getElementById("mainContent");
    main.classList.add("show");
  }, 1000);
});

// Update waktu realtime
function updateTime() {
  document.getElementById("currentTime").textContent = new Date().toString();
}
setInterval(updateTime, 1000);
updateTime();

// Form submit
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector("input[name='gender']:checked").value;
  let message = document.getElementById("message").value;

  document.getElementById("output").innerHTML = `
    <p><b>Current Time:</b> ${new Date().toString()}</p>
    <p><b>Name:</b> ${name}</p>
    <p><b>Tanggal Lahir:</b> ${dob}</p>
    <p><b>Jenis Kelamin:</b> ${gender}</p>
    <p><b>Pesan:</b> ${message}</p>
  `;
});
