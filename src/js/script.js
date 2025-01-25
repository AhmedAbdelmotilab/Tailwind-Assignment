document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    if (localStorage.currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        toggle.checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        toggle.checked = false;
    }
    toggle.addEventListener('change', function () {
        if (this.checked) {
            localStorage.currentTheme = 'dark';
            document.documentElement.classList.add('dark');
        } else {
            localStorage.currentTheme = 'light';
            document.documentElement.classList.remove('dark');
        }
    });
});
