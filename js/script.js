 // Peringatan //
function masuk() {
    var nama = document.getElementById("nama").value;
    var semester = document.getElementById("smt").value;
    var pesan = ''
    swal.setActionValue(semester);
    if (nama == '') {
        swal("Maaf", "Tolong isi Nama Anda", "warning");
        return false;
    } else if (semester== '') {
        swal("Maaf", "“isikan semester!!", "warning");
        return false;
    } 

    else if (semester >= 1 && semester <= 2) {
        pesan = 'Anda mahasiswa tahun pertama, Mahasiswa Baru!';
        document.getElementById('pesann').innerHTML=pesan;
        return false
    }

    else if (semester >= 3 && semester <= 4) {
        pesan = 'Anda mahasiswa tahun kedua, Semangat!';
        (document.getElementById('pesann').innerHTML=pesan);
        return false
    }

    else if (semester >= 5 && semester <= 6) {
        pesan = 'Anda mahasiswa tahun ketiga, Tetap Semangat!';
        document.getElementById('pesann').innerHTML=pesan;
        return false
    }

    else if (semester >= 7 && semester <= 8) {
        pesan = 'Anda mahasiswa tahun keempat, Lulus Tahun Ini!';
        document.getElementById('pesann').innerHTML=pesan;
        return false
    }

    else if (semester <= 0) {
        pesan = 'Anda Bukan Mahasiswa di Universitas ini!';
        document.getElementById('pesann').innerHTML=pesan;
        return false
    }

    else if (semester >= 9) {
        pesan = 'Anda Bukan Mahasiswa di Universitas ini!';
        document.getElementById('pesann').innerHTML=pesan;
        return false
    }

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault()
    });
}
