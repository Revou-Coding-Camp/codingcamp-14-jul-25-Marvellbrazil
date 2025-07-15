function execute() {
    const nama = document.getElementById('nama').value;
    const tl = document.getElementById('tgl_lahir').value;
    const jk = document.getElementById('jk').value;
    const pesan = document.getElementById('pesan').value;

    const time = document.getElementById('currtime');
    const namaout = document.getElementById('namaout');
    const tlout = document.getElementById('tlout');
    const jkout = document.getElementById('jkout');
    const pesanout = document.getElementById('msgout');

    const now = new Date();

    time.innerHTML = now.toString().substring(0, now.toString().indexOf('(') - 1);
    namaout.innerHTML = nama;
    tlout.innerHTML = tl;
    jkout.innerHTML = jk;
    pesanout.innerHTML = pesan;
}