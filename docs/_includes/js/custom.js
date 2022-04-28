window.matchMedia('(prefers-color-scheme: bx-dark)')
.addEventListener('change', event => {
    if (event.matches) {
        jtd.setTheme('bx-dark');
    } else {
        jtd.setTheme('bx-light');
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: bx-dark)').matches) {
    jtd.setTheme('bx-dark');
}
