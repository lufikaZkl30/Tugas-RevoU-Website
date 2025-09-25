document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const msg = document.getElementById("msg").value;

  // Validasi sederhana
  if(name && email && phone && msg) {
    document.getElementById("result").innerHTML = `
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Nomor HP:</strong> ${phone}</p>
      <p><strong>Pesan:</strong> ${msg}</p>
    `;
  } else {
    alert("Harap isi semua field!");
  }
});
