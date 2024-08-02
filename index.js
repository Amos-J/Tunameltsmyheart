document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const nameText = document.getElementById('name').textContent;

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(nameText).then(() => {
            copyBtn.textContent = 'Copied';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 1000);
        });
    });

    const navBar2 = document.getElementById('nav-bar2');
    setTimeout(() => {
        navBar2.style.top = '60px';
    }, 1000);

    setTimeout(() => {
        document.querySelector('.nav-buttons').style.opacity = '1';
    }, 1000);

    // Transition steps and images
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, index * 1000);
    });
});
