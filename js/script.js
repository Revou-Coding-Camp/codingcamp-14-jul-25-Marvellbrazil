window.addEventListener("DOMContentLoaded", () => {
    let input = window.prompt("Siapa nama anda?");
    if (input) {
        let username = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById("user-greet").innerHTML =
            "Hi " + username + ", Welcome To Website";
    }
});

function execute() {
  const nama = document.getElementById("nama").value;
  const tl = document.getElementById("tgl_lahir").value;
  const jk = document.getElementById("jk").value;
  const pesan = document.getElementById("pesan").value;

  const time = document.getElementById("currtime");
  const namaout = document.getElementById("namaout");
  const tlout = document.getElementById("tlout");
  const jkout = document.getElementById("jkout");
  const pesanout = document.getElementById("msgout");

  const now = new Date();

  if (!nama || !tl || !pesan) {
    window.alert("Mohon untuk melengkapi semua input pada form!");
  } else if (!/^[A-Za-z\s]+$/.test(nama)) {
    window.alert("Mohon hanya menginput huruf dan spasi pada kolom nama.");
  } else if (pesan.length > 100) {
    window.alert("Mohon untuk tidak menulis pesan lebih dari 100 karakter.");
  } else {
    time.innerHTML = now
      .toString()
      .substring(0, now.toString().indexOf("(") - 1);
    namaout.innerHTML = nama;
    tlout.innerHTML = tl;
    jkout.innerHTML = jk;
    pesanout.innerHTML = pesan;
  }
}
