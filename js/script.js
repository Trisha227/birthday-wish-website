// ==================== GLOBAL STATE ====================
let musicEnabled = false;
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const birthdayDate = new Date('2003-06-09').getTime();

// ==================== MUSIC TOGGLE ====================
if (musicBtn) {
    musicBtn.addEventListener('click', function() {
        musicEnabled = !musicEnabled;
        if (musicEnabled) {
            bgMusic.play();
            musicBtn.classList.add('playing');
        } else {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
        }
    });
}

// ==================== PAGE 1: COUNTDOWN TIMER ====================
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

if (document.getElementById('days')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== PAGE 1: UNLOCK BUTTON ====================
const unlockBtn = document.getElementById('unlockBtn');
if (unlockBtn) {
    unlockBtn.addEventListener('click', function() {
        createConfetti();
        unlockBtn.style.opacity = '0.5';
        unlockBtn.disabled = true;
        setTimeout(() => {
            document.getElementById('navigation').style.display = 'block';
            unlockBtn.textContent = '🔓 Unlocked! Click Next →';
            unlockBtn.style.opacity = '1';
        }, 500);
    });
}

// ==================== CONFETTI ANIMATION ====================
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;

    const confettiCount = 50;
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF88DC'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.delay = Math.random() * 0.5 + 's';
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// ==================== PAGE 2: GIFT BOX ====================
const giftBox = document.getElementById('giftBox');
const giftModal = document.getElementById('giftModal');
const closeModal = document.getElementById('closeModal');
const giftMessage = document.getElementById('giftMessage');

const specialMessage = `
    <h3>🎉 Your Special Gift Message 🎉</h3>
    <p>You are an incredible person, and today is your day to shine!</p>
    <p>Thank you for filling the lives of those around you with joy, kindness, and unforgettable moments.</p>
    <p>This year, may you:</p>
    <ul style="text-align: left; display: inline-block;">
        <li>✨ Achieve your biggest dreams</li>
        <li>💪 Overcome every challenge</li>
        <li>❤️ Spread love and happiness</li>
        <li>🌟 Shine brighter than ever</li>
    </ul>
    <p>You deserve all the best. Happy Birthday! 🎂💕</p>
`;

if (giftBox) {
    giftBox.addEventListener('click', function() {
        giftBox.classList.add('opened');
        createConfetti();
        setTimeout(() => {
            if (giftModal) {
                giftModal.style.display = 'flex';
                if (giftMessage) {
                    giftMessage.innerHTML = specialMessage;
                }
            }
        }, 800);
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        if (giftModal) {
            giftModal.style.display = 'none';
        }
    });
}

if (giftModal) {
    giftModal.addEventListener('click', function(e) {
        if (e.target === giftModal) {
            giftModal.style.display = 'none';
        }
    });
}

// ==================== PAGE 3: FALLING CONFETTI ON LOAD ====================
window.addEventListener('load', function() {
    if (document.body.classList.contains('page-3')) {
        setTimeout(() => {
            createConfetti();
        }, 500);
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== RESPONSIVE ADJUSTMENTS ====================
window.addEventListener('resize', function() {
    // Add any responsive adjustments here if needed
});
