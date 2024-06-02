let count = 0;
let deadline = new Date('2024-06-02T14:24:00'); // Tetapkan tanggal deadline awal di sini

// Daftar tugas yang akan ditampilkan setelah setiap deadline
const tasks = [
    ["Mengikuti briefing pagi untuk memberikan laporan terkait kinerja dan apa yang harus mereka lakukan pada hari itu", 
    "Melakukan perencanaan terkait target harian dan strategi pemasaran dengan anggota tim marketing yang lainnya", 
    "Mencari dan juga menghubungi prospek klien potensial melalui telephone ataupun email", 
    "Melakukan presentasi produk kepada klien ataupun prospek klien", 
    "Melakukan follow-up pada klien yang sebelumnya sudah dihubungi"],
    ["Melakukan demonstrasi produk kepada klien", 
    "Melakukan negosiasi kepada klien untuk mencapai kesepakatan kerja", 
    "Memperbarui database klien dengan informasi yang terbaru", 
    "Mengikuti briefing pagi untuk memberikan laporan terkait kinerja dan apa yang harus mereka lakukan pada hari itu", 
    "Melakukan perencanaan terkait target harian dan strategi pemasaran dengan anggota tim marketing yang lainnya"],
    ["Task Set 3: Research topic", "Task Set 3: Draft outline", "Task Set 3: Write paper", "Task Set 3: Edit content", "Task Set 3: Submit paper"]
];
let currentTaskSetIndex = 0;

function updateTasks() {
    // Ubah semua tugas menjadi tugas baru dari daftar
    const newTasks = tasks[currentTaskSetIndex];
    document.getElementById("task1").innerHTML = newTasks[0];
    document.getElementById("task2").innerHTML = newTasks[1];
    document.getElementById("task3").innerHTML = newTasks[2];
    document.getElementById("task4").innerHTML = newTasks[3];
    document.getElementById("task5").innerHTML = newTasks[4];

    // Perbarui indeks set tugas untuk set berikutnya
    currentTaskSetIndex = (currentTaskSetIndex + 1) % tasks.length;
}

function updateDeadline() {
    const now = new Date();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
        // Tetapkan tanggal deadline baru (misalnya, satu minggu dari sekarang)
        deadline = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        alert("Deadline baru telah ditetapkan: " + deadline);
        updateTasks(); // Ubah tugas hanya saat deadline berubah
        enableAllButtons(); // Mengaktifkan kembali semua tombol setelah deadline baru ditetapkan
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("time-left").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = true;
}

function enableAllButtons() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`button${i}`).disabled = false;
    }
}

function handleClick(buttonId) {
    checkDeadlineAndChangeTasks();
    count++;
    document.getElementById("count").innerHTML = count;
    var email = "m.raffa.febrian17@gmail.com";
    var mailto_link = 'mailto:' + email;
    window.open(mailto_link, 'emailWindow');
    disableButton(buttonId); // Menonaktifkan tombol yang diklik
}

document.getElementById("button1").onclick = function() {
    handleClick("button1");
}

document.getElementById("button2").onclick = function() {
    handleClick("button2");
}

document.getElementById("button3").onclick = function() {
    handleClick("button3");
}

document.getElementById("button4").onclick = function() {
    handleClick("button4");
}

document.getElementById("button5").onclick = function() {
    handleClick("button5");
}

// Jalankan fungsi checkDeadlineAndChangeTasks saat halaman dimuat untuk memastikan tugas sesuai dengan deadline saat ini
window.onload = function() {
    setInterval(updateDeadline, 1000); // Perbarui sisa waktu setiap detik
    updateTasks(); // Ubah tugas pada pemuatan halaman pertama
};

function checkDeadlineAndChangeTasks() {
    updateDeadline(); // Perbarui deadline dan ubah tugas jika deadline telah berlalu
}
