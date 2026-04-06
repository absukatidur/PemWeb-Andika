const contactForm = document.querySelector('.contact-form');

// Menambahkan event listener saat form disubmit
contactForm.addEventListener('submit', function(event) {
    // Mencegah halaman reload otomatis
    event.preventDefault();

    // Menampilkan notifikasi berhasil
    alert('Message sent successfully!');

    // Membersihkan isi form setelah dikirim
    contactForm.reset();
});