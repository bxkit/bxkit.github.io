window.matchMedia('(prefers-color-scheme: bxdark)')
.addEventListener('change', event => {
    if (event.matches) {
        jtd.setTheme('bxdark');
    } else {
        jtd.setTheme('bitrix');
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: bxdark)').matches) {
    jtd.setTheme('bxdark');
}
