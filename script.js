// LOGIN SEDERHANA
function login() {
    let email = document.getElementById("email")?.value;
    let password = document.getElementById("password")?.value;
    let role = document.getElementById("role")?.value;
    let msg = document.getElementById("msg");

    if(email === "" || password === "") {
        if(msg) {
            msg.textContent = "Email dan password harus diisi!";
            msg.style.color = "red";
        }
        return;
    }

    // simulasi login
    if(role === "siswa") {
        window.location.href = "dashboard-siswa.html";
    } else {
        window.location.href = "dashboard-guru.html";
    }
}

// LOGOUT
function logout() {
    alert("Anda telah logout.");
    window.location.href = "login.html";
}

/* ============================
   MATERI : SIMPAN KE LOCALSTORAGE
   ============================ */
function uploadMateri() {
    let judul = document.getElementById("judul").value;
    let kelas = document.getElementById("kelas").value;

    if(!judul || !kelas) {
        alert("Judul dan kelas harus diisi!");
        return;
    }

    let materi = JSON.parse(localStorage.getItem("materi")) || [];

    materi.push({
        judul: judul,
        kelas: kelas,
        waktu: new Date().toLocaleString()
    });

    localStorage.setItem("materi", JSON.stringify(materi));
    alert("Materi berhasil diupload!");
}

/* ============================
   MENAMPILKAN MATERI
   ============================ */
function tampilMateri() {
    let materi = JSON.parse(localStorage.getItem("materi")) || [];
    let list = document.getElementById("materi-list");

    if(!list) return;

    list.innerHTML = "";
    materi.forEach(m => {
        list.innerHTML += `
            <div class="card">
                <div class="card-title">${m.judul}</div>
                <p>Kelas: ${m.kelas}</p>
                <small>Diunggah: ${m.waktu}</small>
            </div>
        `;
    });
}

/* ============================
   TUGAS GURU : SIMPAN
   ============================ */
function buatTugas() {
    let judul = document.getElementById("judul").value;
    let deadline = document.getElementById("deadline").value;

    if(!judul || !deadline) {
        alert("Judul dan deadline harus diisi!");
        return;
    }

    let tugas = JSON.parse(localStorage.getItem("tugas")) || [];

    tugas.push({
        judul: judul,
        deadline: deadline
    });

    localStorage.setItem("tugas", JSON.stringify(tugas));
    alert("Tugas dibuat!");
}

/* ============================
   TAMPILKAN TUGAS UNTUK SISWA
   ============================ */
function tampilTugas() {
    let tugas = JSON.parse(localStorage.getItem("tugas")) || [];
    let list = document.getElementById("tugas-list");

    if(!list) return;

    list.innerHTML = "";
    tugas.forEach(t => {
        list.innerHTML += `
            <div class="card">
                <div class="card-title">${t.judul}</div>
                <p>Deadline: ${t.deadline}</p>
                <a href="kumpulkan-tugas.html" class="btn">Kumpulkan</a>
            </div>
        `;
    });
}

/* ============================
   KUMPULKAN TUGAS
   ============================ */
function kumpulkan() {
    let nama = document.getElementById("nama").value;
    let link = document.getElementById("link").value;

    if(!nama || !link) {
        alert("Nama dan link harus diisi!");
        return;
    }

    let kumpul = JSON.parse(localStorage.getItem("kumpul")) || [];

    kumpul.push({
        nama: nama,
        link: link,
        waktu: new Date().toLocaleString()
    });

    localStorage.setItem("kumpul", JSON.stringify(kumpul));
    alert("Tugas berhasil dikumpulkan!");
}
