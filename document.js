document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const text = this.textContent;

      if (text.includes('Prendre rendez-vous') || text.includes('Réserver un appel')) {
        handleBooking();
      } else if (text.includes('Découvrir')) {
        handleDiscover();
      }
    });

    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.section-title, .offering-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

function handleBooking() {
  alert('Merci d\'votre intérêt!\nRedirection vers la plateforme de réservation...');
}

function handleDiscover() {
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const dynamics = [
    {
        emoji: '🔴',
        color: 'Rouge',
        title: 'Action & décision',
        subtitle: 'L\'énergie du changement',
        description: 'Le rouge représente l\'énergie de l\'action et de la décision. Ces profils aiment relever les défis, prendre des initiatives et faire avancer les projets vers des résultats concrets.',
        accentClass: 'red'
    },
    {
        emoji: '🔵',
        color: 'Bleu',
        title: 'Analyse & structure',
        subtitle: 'La rigueur de la pensée',
        description: 'Le bleu incarne la réflexion, l\'analyse et la précision. Les personnes dominantes dans cette dynamique apportent rigueur, logique et profondeur dans la prise de décision.',
        accentClass: 'blue'
    },
    {
        emoji: '🟢',
        color: 'Vert',
        title: 'Relation & coopération',
        subtitle: 'L\'harmonie collective',
        description: 'Le vert est associé à l\'écoute, à l\'harmonie et à la collaboration. Ces profils favorisent la confiance, la stabilité et la qualité des relations au sein des équipes.',
        accentClass: 'green'
    },
    {
        emoji: '🟡',
        color: 'Jaune',
        title: 'Vision & créativité',
        subtitle: 'L\'inspiration nouvelle',
        description: 'Le jaune représente l\'enthousiasme, la créativité et la vision. Ces personnes stimulent les idées, ouvrent de nouvelles perspectives et inspirent les autres.',
        accentClass: 'yellow'
    }
];

function createCard(dynamic) {
    return `
        <div class="card">
            <div class="card-accent ${dynamic.accentClass}"></div>
            <div class="card-content">
                <div class="card-emoji">${dynamic.emoji}</div>
                <p class="card-color">${dynamic.color}</p>
                <h3 class="card-title">${dynamic.title}</h3>
                <p class="card-subtitle">${dynamic.subtitle}</p>
                <p class="card-description">${dynamic.description}</p>
            </div>
        </div>
    `;
}

const cardsContainer = document.getElementById('cardsContainer');
cardsContainer.innerHTML = dynamics.map(createCard).join('');
