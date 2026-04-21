document.addEventListener('DOMContentLoaded', function() {
    // --- 1. PENGATURAN TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- 2. VALIDASI DAN TABEL ---
    const contactForm = document.querySelector('.contact-form');
    const tableBody = document.querySelector('#messageTable tbody');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const date = document.getElementById('date');
            const message = document.getElementById('message');

            if (name.value.trim().length < 3 || message.value.trim().length < 10) {
                alert("Please check your input (Name min 3 characters, Message min 10).");
                return;
            }

            const row = document.createElement('tr');
            row.innerHTML = `<td>${name.value}</td><td>${email.value}</td><td>${date.value || '-'}</td><td>${message.value}</td>`;
            tableBody.appendChild(row);

            alert("Message sent and recorded!");
            contactForm.reset();
        });
    }
});