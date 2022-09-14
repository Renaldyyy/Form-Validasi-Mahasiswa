 // Peringatan //
function masuk() {
    var nama = document.getElementById("nama").value;
    var semester = document.getElementById("smt").value;
    swal.setActionValue(semester);
    if (nama == '') {
        swal("Maaf", "Tolong isi Nama Anda", "warning");
        return false;
    } else if (semester== '') {
        swal("Maaf", "“isikan semester!!", "warning");
        return false;
    } else if (semester >= 1 && semester <= 2) {
        swal("Anda mahasiswa tahun pertama", "Mahasiswa Baru!", "success");
        return false;
    } else if (semester >= 3 && semester <= 4) {
        swal("Anda mahasiswa tahun kedua", "Semangat!", "success");
        return false;
    } else if (semester >= 5 && semester <= 6) {
        swal("Anda mahasiswa tahun ketiga", "Tetap Semangat!", "success");
        return false;
    } else if (semester >= 7 && semester <= 8) {
        swal("Anda mahasiswa tahun keempat", "Lulus Tahun Ini!", "success");
        return false;
    } else if (semester <=0 ) {
        swal("Maaf!", "Anda Bukan Mahasiswa di Universitas ini!", "warning");
        return false;
    } else if (semester >=9 ) {
        swal("Maaf!", "Anda Bukan Mahasiswa di Universitas ini!", "warning");
        return false;
    }

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault()
    });
}
