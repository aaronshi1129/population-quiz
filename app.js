import { getCountryData } from './countryData.js';

class PopulationQuiz {
  constructor() {
    // Start page elements
    this.startPage = document.getElementById('start-page');
    this.startBtn = document.getElementById('start-btn');
    
    // Quiz page elements
    this.quizPage = document.getElementById('quiz-page');
    this.countryOptionsEl = document.getElementById('country-options');
    this.currentOrderEl = document.getElementById('current-order');
    this.checkAnswerBtn = document.getElementById('check-answer');
    this.nextRoundBtn = document.getElementById('next-round');

    // Stats elements
    this.currentRoundEl = document.getElementById('current-round');
    this.currentScoreEl = document.getElementById('current-score');
    this.timerEl = document.getElementById('timer');

    // Modal elements
    this.resultsModal = document.getElementById('results-modal');
    this.finalResultsModal = document.getElementById('final-results-modal');
    this.modalTitle = document.getElementById('modal-title');
    this.modalMessage = document.getElementById('modal-message');
    this.modalPopulationDetails = document.getElementById('modal-population-details');
    this.restartBtn = document.getElementById('restart-btn');

    // Game state variables
    this.countryOptions = [];
    this.selectedCountries = [];
    this.correctOrder = [];
    this.currentRound = 1;
    this.score = 0;
    this.startTime = 0;
    this.timer = null;

    this.initEventListeners();
  }

  initEventListeners() {
    this.startBtn.addEventListener('click', () => this.startQuiz());
    this.checkAnswerBtn.addEventListener('click', () => this.checkAnswer());
    this.nextRoundBtn.addEventListener('click', () => this.startNextRound());
    
    this.currentOrderEl.addEventListener('click', (e) => {
      const countrySpan = e.target.closest('span');
      if (countrySpan) {
        const countryName = countrySpan.dataset.name;
        const countryToRemove = this.selectedCountries.find(c => c.name === countryName);
        
        if (countryToRemove) {
          // Remove the country from selected countries
          this.selectedCountries = this.selectedCountries.filter(c => c !== countryToRemove);
          this.updateOrderDisplay();
          this.renderCountryOptions(); // Update button states
        }
      }
    });

    this.restartBtn.addEventListener('click', () => this.resetQuiz());

    // Modal close events can be added here if needed
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    document.querySelector('.close-modal').addEventListener('click', () => this.closeModal());
    this.resultsModal.addEventListener('click', (e) => {
      if (e.target === this.resultsModal) {
        this.closeModal();
      }
    });
  }

  startQuiz() {
    this.startPage.style.display = 'none';
    this.quizPage.style.display = 'block';
    this.startTime = Date.now();
    this.startTimer();
    this.startNextRound();
  }

  startTimer() {
    this.timer = setInterval(() => {
      const elapsedTime = Date.now() - this.startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      this.timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  async startNextRound() {
    // Reset round state
    this.selectedCountries = [];
    this.correctOrder = [];
    this.currentOrderEl.textContent = 'Tap countries/regions to order from most to least populated';

    // Get new country data
    const countries = await getCountryData(3);
    this.countryOptions = countries;
    this.correctOrder = [...countries].sort((a, b) => b.population - a.population);

    // Shuffle countries for display
    this.shuffleArray(this.countryOptions);
    this.renderCountryOptions();
  }

  selectCountry(country) {
    // If country is not already selected, add it
    if (!this.selectedCountries.includes(country)) {
      this.selectedCountries.push(country);
      this.updateOrderDisplay();
      this.renderCountryOptions(); // Update button states
    }
  }

  updateOrderDisplay() {
    if (this.selectedCountries.length === 0) {
      this.currentOrderEl.textContent = 'Tap countries/regions to order from most to least populated, tap again to remove';
    } else {
      this.currentOrderEl.innerHTML = this.selectedCountries
          .map(country => `<span data-name="${country.name}">${country.name}<br><small>${country.chineseName}</small></span>`)
          .join(' > ');
    }
  }

  checkAnswer() {
    if (this.selectedCountries.length !== 3) {
      this.showModal(false, 'Please select all 3 countries');
      return;
    }

    const isCorrect = this.selectedCountries.every((country, index) => 
      country === this.correctOrder[index]
    );

    if (isCorrect) {
      this.score++;
      this.currentScoreEl.textContent = this.score;
    }

    this.showModal(isCorrect);
  }

  showModal(isCorrect, customMessage = null) {
    this.resultsModal.style.display = 'flex';
    
    if (isCorrect) {
      this.modalTitle.textContent = '👍Correct!🎉';
      this.modalTitle.style.color = 'var(--success-color)';
      this.modalMessage.textContent = 'Great job ordering the countries by population!🎊';
    } else {
      this.modalTitle.textContent = '😔Incorrect😰';
      this.modalTitle.style.color = 'var(--error-color)';
      this.modalMessage.textContent = customMessage || 'The countries were not in the correct order.😟';
    }

    this.modalPopulationDetails.innerHTML = this.correctOrder.map((country, index) => 
      `<p><strong>${index + 1}. ${country.name} ${country.chineseName}</strong>: ${this.formatPopulation(country.population)}</p>`
    ).join('');

    this.currentRound++;
    this.currentRoundEl.textContent = this.currentRound;

    // If it's the last round (10), set up to show final results
    if (this.currentRound > 10) {
      // Modify the modal close button to trigger endQuiz
      this.modalCloseBtn.textContent = 'See Results';
      this.modalCloseBtn.onclick = () => this.endQuiz();
    }
  }

  closeModal() {
    this.resultsModal.style.display = 'none';
    
    // If this is the last round (10th round), show final results immediately
    if (this.currentRound > 10) {
      this.endQuiz();
      return;
    }
    
    // If the quiz is not yet complete, automatically start the next round
    if (this.currentRound <= 10) {
      this.startNextRound();
    }
  }

formatPopulation(population) {
  if (population >= 1000000000) {
    // For numbers >= 1 billion
    const billions = population / 1000000000;
    return `${billions.toFixed(2)} billion people`;
  } else {
    // For numbers < 1 billion
    const millions = population / 1000000;
    return `${millions.toFixed(2)} million people`;
  }
}

  renderCountryOptions() {
    this.countryOptionsEl.innerHTML = '';
    this.countryOptions.forEach(country => {
      const btn = document.createElement('button');
      btn.innerHTML = `${country.name}<br><small>${country.chineseName}</small>`;
      btn.classList.add('country-btn');
      // Check if this country is already selected
      if (this.selectedCountries.includes(country)) {
        btn.classList.add('selected');
        btn.disabled = true;
      }
      btn.addEventListener('click', () => this.selectCountry(country));
      this.countryOptionsEl.appendChild(btn);
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  endQuiz() {
    clearInterval(this.timer);
    const elapsedTime = this.timerEl.textContent;
    
    // Show final results modal
    this.resultsModal.style.display = 'none';
    this.finalResultsModal.style.display = 'flex';
    
    document.getElementById('final-score').textContent = this.score;
    document.getElementById('final-time').textContent = elapsedTime;
  }

  resetQuiz() {
    this.finalResultsModal.style.display = 'none';
    this.startPage.style.display = 'block';
    this.quizPage.style.display = 'none';
    
    // Reset all game state
    this.currentRound = 1;
    this.score = 0;
    this.currentRoundEl.textContent = '1';
    this.currentScoreEl.textContent = '0';
    this.timerEl.textContent = '00:00';
  }

}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => new PopulationQuiz());
