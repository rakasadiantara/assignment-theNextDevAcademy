function onSubmit(){
    let nama = document.getElementById("nama").value;
    let role = document.getElementById("role").value;
    let availability = document.getElementById("availability").value;
    let age = document.getElementById("age").value;
    let lokasi = document.getElementById("lokasi").value;
    let years = document.getElementById("years-experience").value;
    let email = document.getElementById("email").value;
    console.log(nama)

    document.getElementById('bio-nama').innerHTML = nama;
    document.getElementById('bio-role').innerHTML = role;
    document.getElementById('bio-availability').innerHTML = availability;
    document.getElementById('bio-age').innerHTML = age;
    document.getElementById('bio-lokasi').innerHTML = lokasi;
    document.getElementById('bio-years-experience').innerHTML = years;
    document.getElementById('bio-email').innerHTML = email;

    console.log("berhasil")
}