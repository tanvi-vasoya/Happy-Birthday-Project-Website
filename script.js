window.onload = function() {
    confetti({
        particleCount: 400,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0', '#f0f', '#0ff', '#f00']
    });
    document.getElementById('name').innerText='NAME'
};

document.addEventListener('DOMContentLoaded', () => {
    const arcTextElement = document.getElementById('arcText');
    const text = 'HHappy Birthday';
    const radius = 300; // Adjust radius for the arc
    const centerX = window.innerWidth / 40;
    const centerY = window.innerHeight / 25;
    let currentIndex = 1;

    function addLetter() {
        if (currentIndex < text.length) {
            const angle = (currentIndex - (text.length / 2)) * (Math.PI / text.length) - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle) - 20; // Adjust for centering
            const y = centerY + radius * Math.sin(angle) - 20; // Adjust for centering

            const letterElement = document.createElement('span');
            letterElement.textContent = text[currentIndex];
            letterElement.style.position = 'absolute';
            letterElement.style.left = `${x}px`;
            letterElement.style.top = `${y}px`;
            letterElement.style.transform = `rotate(${angle + Math.PI / 2}rad)`;
            letterElement.style.opacity = 0;
            arcTextElement.appendChild(letterElement);

            // Animate letter appearance
            setTimeout(() => {
                letterElement.style.transition = 'opacity 0.5s';
                letterElement.style.opacity = 1;
            }, 10);

            currentIndex++;
            setTimeout(addLetter, 300);
        } else {
            setTimeout(triggerConfetti, 500); // Delay before starting confetti
        }
    }

    function triggerConfetti() {
        const confettiSettings = { target: 'confettiCanvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }

    addLetter();
});

