// ========================================
// Recipe Data
// ========================================
const recipes = {
  'james-hoffmann': {
    id: 'james-hoffmann',
    name: 'James Hoffmann Method',
    description: 'The ultimate V60 technique for clarity and balance',
    difficulty: 'Intermediate',
    coffeeWeight: 30,
    ratio: 16.67,
    totalWater: 500,
    totalTime: 210,
    temperature: 95,
    grindSize: 'Medium-fine',
    phases: [
      {
        name: 'Bloom',
        duration: 45,
        waterAmount: 60,
        instruction: 'Pour water in circular motion, ensure all grounds are wet'
      },
      {
        name: 'Pour 1',
        duration: 30,
        waterAmount: 120,
        instruction: 'Pour to 180g total, gentle spiral from center'
      },
      {
        name: 'Pour 2',
        duration: 30,
        waterAmount: 120,
        instruction: 'Pour to 300g total, maintain steady flow'
      },
      {
        name: 'Pour 3',
        duration: 30,
        waterAmount: 100,
        instruction: 'Pour to 400g total, focus on center'
      },
      {
        name: 'Final Pour',
        duration: 30,
        waterAmount: 100,
        instruction: 'Pour to 500g total, gentle finish'
      },
      {
        name: 'Drawdown',
        duration: 45,
        waterAmount: 0,
        instruction: 'Let coffee drain, target 3:30 total time'
      }
    ]
  },
  'four-six': {
    id: 'four-six',
    name: '4:6 Method',
    description: "Tetsu Kasuya's award-winning approach",
    difficulty: 'Intermediate',
    coffeeWeight: 20,
    ratio: 15,
    totalWater: 300,
    totalTime: 210,
    temperature: 92,
    grindSize: 'Medium',
    phases: [
      {
        name: 'Pour 1 (40%)',
        duration: 45,
        waterAmount: 50,
        instruction: 'First 40% pour - controls sweetness'
      },
      {
        name: 'Pour 2 (40%)',
        duration: 45,
        waterAmount: 70,
        instruction: 'Second 40% pour - adds body'
      },
      {
        name: 'Pour 3 (60%)',
        duration: 30,
        waterAmount: 60,
        instruction: 'First 60% pour - builds strength'
      },
      {
        name: 'Pour 4 (60%)',
        duration: 30,
        waterAmount: 60,
        instruction: 'Second 60% pour'
      },
      {
        name: 'Pour 5 (60%)',
        duration: 30,
        waterAmount: 60,
        instruction: 'Final 60% pour'
      },
      {
        name: 'Drawdown',
        duration: 30,
        waterAmount: 0,
        instruction: 'Let coffee drain completely'
      }
    ]
  },
  'scott-rao': {
    id: 'scott-rao',
    name: 'Scott Rao Method',
    description: 'Precision brewing for experts',
    difficulty: 'Advanced',
    coffeeWeight: 22,
    ratio: 16.5,
    totalWater: 363,
    totalTime: 180,
    temperature: 96,
    grindSize: 'Medium-fine',
    phases: [
      {
        name: 'Bloom',
        duration: 30,
        waterAmount: 66,
        instruction: 'Pour 3x coffee weight, gentle swirl'
      },
      {
        name: 'Main Pour',
        duration: 30,
        waterAmount: 297,
        instruction: 'Aggressive center pour to 363g'
      },
      {
        name: 'Swirl',
        duration: 10,
        waterAmount: 0,
        instruction: 'Gentle swirl to flatten bed'
      },
      {
        name: 'Drawdown',
        duration: 110,
        waterAmount: 0,
        instruction: 'Drain to target 3:00 total time'
      }
    ]
  },
  // Hario Switch Recipes
  'kasuya-switch-hybrid': {
    id: 'kasuya-switch-hybrid',
    name: 'Tetsu Kasuya Hybrid',
    brewer: 'Hario Switch',
    description: 'Smooth and sweet with clean aftertaste',
    difficulty: 'Beginner',
    coffeeWeight: 15,
    ratio: 16,
    totalWater: 240,
    totalTime: 240,
    temperature: 90,
    grindSize: 'Medium',
    phases: [
      {
        name: 'Preparation',
        duration: 0,
        waterAmount: 0,
        instruction: 'Close switch, rinse filter, add coffee',
        switchClosed: true
      },
      {
        name: 'Immersion Brew',
        duration: 120,
        waterAmount: 150,
        instruction: 'Pour 150g of 90°C water with switch closed, let steep',
        switchClosed: true
      },
      {
        name: 'Stir',
        duration: 60,
        waterAmount: 0,
        instruction: 'At 2:00, gently stir with spoon to knock grounds off sides',
        switchClosed: true
      },
      {
        name: 'Drain',
        duration: 60,
        waterAmount: 0,
        instruction: 'At 3:00, open switch and let drain (should finish around 4:00)',
        switchClosed: false
      }
    ]
  },
  'switch-immersion': {
    id: 'switch-immersion',
    name: 'Simple Immersion',
    brewer: 'Hario Switch',
    description: 'Easy, forgiving method perfect for consistent results',
    difficulty: 'Beginner',
    coffeeWeight: 15,
    ratio: 16,
    totalWater: 240,
    totalTime: 255,
    temperature: 95,
    grindSize: 'Medium-coarse',
    phases: [
      {
        name: 'Setup',
        duration: 0,
        waterAmount: 0,
        instruction: 'Close switch, rinse filter, add coffee and shake to level',
        switchClosed: true
      },
      {
        name: 'Full Pour',
        duration: 15,
        waterAmount: 240,
        instruction: 'Pour all 240g water quickly (within 15 seconds)',
        switchClosed: true
      },
      {
        name: 'Steep',
        duration: 105,
        waterAmount: 0,
        instruction: 'Let steep for 2 minutes total from start',
        switchClosed: true
      },
      {
        name: 'Stir & Wait',
        duration: 15,
        waterAmount: 0,
        instruction: 'At 2:00, stir gently (2x counter-clockwise, 2x clockwise)',
        switchClosed: true
      },
      {
        name: 'Release',
        duration: 120,
        waterAmount: 0,
        instruction: 'At 2:15, open switch and let drain completely',
        switchClosed: false
      }
    ]
  }
};

// ========================================
// Application State
// ========================================
const state = {
  currentScreen: 'home',
  currentRecipe: null,
  selectedRecipeId: null, // Track which recipe was selected
  currentPhaseIndex: 0,
  brewStartTime: null,
  timerInterval: null,
  isPaused: false,
  pausedTime: 0,
  elapsedTime: 0,
  currentBrew: {
    coffeeWeight: 30,
    waterRatio: 16.67,
    totalWater: 500,
    rating: 0,
    notes: ''
  },
  settings: {
    defaultCoffeeWeight: 30,
    defaultRatio: 16.67,
    defaultTemp: 95,
    soundAlerts: true,
    phaseAlerts: true
  }
};

// ========================================
// Local Storage Functions
// ========================================
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
}

function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error reading from localStorage:', e);
    return null;
  }
}

function saveBrewHistory(brew) {
  const history = getFromLocalStorage('brewHistory') || [];
  history.unshift(brew);
  // Keep only last 50 brews
  if (history.length > 50) {
    history.length = 50;
  }
  saveToLocalStorage('brewHistory', history);
}

function getBrewHistory() {
  return getFromLocalStorage('brewHistory') || [];
}

function clearBrewHistory() {
  saveToLocalStorage('brewHistory', []);
}

function saveSettings() {
  saveToLocalStorage('settings', state.settings);
}

function loadSettings() {
  const saved = getFromLocalStorage('settings');
  if (saved) {
    state.settings = { ...state.settings, ...saved };
  }
}

// ========================================
// Navigation
// ========================================
function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target screen
  const targetScreen = document.getElementById(`${screenId}-screen`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNavItem = document.querySelector(`[data-screen="${screenId}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }

  state.currentScreen = screenId;

  // Screen-specific actions
  if (screenId === 'history') {
    renderBrewHistory();
  }
}

// Back button handlers
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Clear selected recipe when going back to home
    state.selectedRecipeId = null;
    state.currentRecipe = null;
    showScreen('home');
  });
});

// Bottom nav handlers
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const screen = e.currentTarget.getAttribute('data-screen');
    if (screen === 'recipes') {
      showScreen('home');
    } else {
      showScreen(screen);
    }
  });
});

// ========================================
// Home Screen Functions
// ========================================
function updateWaterCalculation() {
  const coffeeWeight = parseFloat(document.getElementById('coffee-weight-input').value);
  const ratio = parseFloat(document.getElementById('ratio-select').value);
  const waterAmount = Math.round(coffeeWeight * ratio);
  document.getElementById('water-amount').textContent = `${waterAmount}g`;

  state.currentBrew.coffeeWeight = coffeeWeight;
  state.currentBrew.waterRatio = ratio;
  state.currentBrew.totalWater = waterAmount;
}

// Event listeners for home screen
document.getElementById('coffee-weight-input').addEventListener('input', updateWaterCalculation);
document.getElementById('ratio-select').addEventListener('change', updateWaterCalculation);

document.getElementById('start-brew-btn').addEventListener('click', () => {
  // Use manual values from Quick Start instead of forcing a recipe
  startManualBrew();
});

function startManualBrew() {
  // Get user's custom input values from Quick Start
  const coffeeWeight = parseFloat(document.getElementById('coffee-weight-input').value);
  const ratio = parseFloat(document.getElementById('ratio-select').value);
  const totalWater = Math.round(coffeeWeight * ratio);
  const temperature = parseFloat(document.getElementById('temp-input').value);
  const grindSize = document.getElementById('grind-select').value;

  // Check if a recipe was selected
  if (state.selectedRecipeId && recipes[state.selectedRecipeId]) {
    // Use the selected recipe's phases, but with custom parameters
    const selectedRecipe = recipes[state.selectedRecipeId];

    state.currentRecipe = {
      ...selectedRecipe,
      coffeeWeight: coffeeWeight,
      ratio: ratio,
      totalWater: totalWater,
      temperature: temperature,
      grindSize: grindSize
    };
  } else {
    // No recipe selected - create a simple manual recipe
    state.currentRecipe = {
      id: 'manual',
      name: 'Manual Brew',
      description: 'Custom brew with your settings',
      difficulty: 'Custom',
      coffeeWeight: coffeeWeight,
      ratio: ratio,
      totalWater: totalWater,
      totalTime: 210,
      temperature: temperature,
      grindSize: grindSize,
      phases: [
        {
          name: 'Bloom',
          duration: 45,
          waterAmount: Math.round(coffeeWeight * 2),
          instruction: 'Pour water in circular motion, ensure all grounds are wet'
        },
        {
          name: 'Main Pour',
          duration: 120,
          waterAmount: totalWater - Math.round(coffeeWeight * 2),
          instruction: 'Pour remaining water in steady circular motion'
        },
        {
          name: 'Drawdown',
          duration: 45,
          waterAmount: 0,
          instruction: 'Let coffee drain completely'
        }
      ]
    };
  }

  state.currentPhaseIndex = 0;
  state.isPaused = false;
  state.pausedTime = 0;
  state.elapsedTime = 0;

  // Update current brew data
  state.currentBrew.coffeeWeight = coffeeWeight;
  state.currentBrew.waterRatio = ratio;
  state.currentBrew.totalWater = totalWater;

  showPrepScreen();
}

function startBrewProcess(recipeId) {
  state.currentRecipe = recipes[recipeId];
  state.currentPhaseIndex = 0;
  state.isPaused = false;
  state.pausedTime = 0;
  state.elapsedTime = 0;

  // Update current brew data with recipe
  if (state.currentRecipe) {
    state.currentBrew.coffeeWeight = state.currentRecipe.coffeeWeight;
    state.currentBrew.waterRatio = state.currentRecipe.ratio;
    state.currentBrew.totalWater = state.currentRecipe.totalWater;
  }

  showPrepScreen();
}

// Recent brews
function renderRecentBrews() {
  const container = document.getElementById('recent-brews-list');
  const history = getBrewHistory().slice(0, 3);

  if (history.length === 0) {
    container.innerHTML = '<p class="empty-state">No brews yet. Start your first brew!</p>';
    return;
  }

  container.innerHTML = history.map(brew => `
    <div class="history-item card">
      <div class="history-header">
        <span class="history-date">${new Date(brew.timestamp).toLocaleDateString()}</span>
        <span class="history-rating">${'★'.repeat(brew.rating)}${'☆'.repeat(5 - brew.rating)}</span>
      </div>
      <div class="history-recipe">${brew.recipe}</div>
      <div class="history-details">${brew.coffeeWeight}g : ${brew.waterWeight}g | ${formatTime(brew.brewTime)}</div>
    </div>
  `).join('');
}

document.getElementById('view-all-history').addEventListener('click', (e) => {
  e.preventDefault();
  showScreen('history');
});

// ========================================
// Preparation Screen Functions
// ========================================
function showPrepScreen() {
  showScreen('prep');

  // Populate recipe information
  const recipeName = state.currentRecipe?.name || 'Manual Brew';
  const recipeDescription = state.currentRecipe?.description || 'Custom brew with your settings';
  const brewer = state.currentRecipe?.brewer;

  document.getElementById('prep-recipe-name').textContent = recipeName;
  document.getElementById('prep-recipe-description').textContent = recipeDescription;

  // Show brewer badge if it's not a standard V60
  const brewerBadge = document.getElementById('prep-brewer-badge');
  if (brewer && brewer !== 'V60') {
    brewerBadge.textContent = brewer;
    brewerBadge.style.display = 'inline-block';
  } else {
    brewerBadge.style.display = 'none';
  }

  // Ensure we're using the current recipe's values
  const coffeeWeight = state.currentRecipe?.coffeeWeight || state.currentBrew.coffeeWeight;
  const totalWater = state.currentRecipe?.totalWater || state.currentBrew.totalWater;
  const temperature = state.currentRecipe?.temperature || 95;
  const grindSize = state.currentRecipe?.grindSize || 'Medium-fine';

  document.getElementById('prep-coffee-weight').textContent = `${coffeeWeight}g`;
  document.getElementById('prep-water-weight').textContent = `${totalWater}g`;
  document.getElementById('prep-temp').textContent = `${temperature}°C`;
  document.getElementById('prep-grind-size').textContent = grindSize;

  // Reset checkboxes
  document.querySelectorAll('.checklist-checkbox').forEach(cb => {
    cb.checked = false;
  });
}

document.getElementById('ready-btn').addEventListener('click', () => {
  startBrewing();
});

// ========================================
// Brew Screen Functions
// ========================================
function startBrewing() {
  showScreen('brew');

  // Populate recipe information on brew screen
  const recipeName = state.currentRecipe?.name || 'Manual Brew';
  const recipeDescription = state.currentRecipe?.description || 'Custom brew with your settings';

  document.getElementById('brew-recipe-name').textContent = recipeName;
  document.getElementById('brew-recipe-description').textContent = recipeDescription;

  state.brewStartTime = Date.now();
  state.currentPhaseIndex = 0;
  state.isPaused = false;
  updateBrewScreen();
  startTimer();
}

function startTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
  }

  state.timerInterval = setInterval(() => {
    if (!state.isPaused) {
      state.elapsedTime = Math.floor((Date.now() - state.brewStartTime - state.pausedTime) / 1000);
      updateTimerDisplay();
      checkPhaseTransition();
    }
  }, 100);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateBrewScreen() {
  const phase = getCurrentPhase();
  if (!phase) return;

  document.getElementById('brew-phase-title').textContent = phase.name;
  document.getElementById('phase-label').textContent = phase.name;
  document.getElementById('pour-number').textContent = `Phase ${state.currentPhaseIndex + 1}`;
  document.getElementById('pour-instruction').textContent = phase.instruction;
  document.getElementById('target-weight').textContent = phase.waterAmount;
  document.getElementById('pour-timer').textContent = `0:00 / ${formatTime(phase.duration)}`;

  // Calculate total water poured up to current phase
  let totalPoured = 0;
  for (let i = 0; i <= state.currentPhaseIndex; i++) {
    totalPoured += state.currentRecipe.phases[i].waterAmount;
  }

  // Update total water display
  document.getElementById('total-water-poured').textContent = `${totalPoured}g`;
  document.getElementById('total-water-target').textContent = `${state.currentRecipe.totalWater}g`;

  // Update switch status for Hario Switch recipes
  const switchStatus = document.getElementById('switch-status');
  const switchText = document.getElementById('switch-text');
  const switchIcon = document.querySelector('.switch-icon');

  if (state.currentRecipe?.brewer === 'Hario Switch' && phase.hasOwnProperty('switchClosed')) {
    switchStatus.style.display = 'flex';

    if (phase.switchClosed) {
      switchText.textContent = 'Valve Closed';
      switchIcon.textContent = '🔒';
      switchStatus.className = 'switch-status valve-closed';
    } else {
      switchText.textContent = 'Valve Open';
      switchIcon.textContent = '🔓';
      switchStatus.className = 'switch-status valve-open';
    }
  } else {
    switchStatus.style.display = 'none';
  }
}

function getCurrentPhase() {
  if (!state.currentRecipe) return null;
  return state.currentRecipe.phases[state.currentPhaseIndex];
}

function getNextPhase() {
  if (!state.currentRecipe) return null;
  if (state.currentPhaseIndex + 1 < state.currentRecipe.phases.length) {
    return state.currentRecipe.phases[state.currentPhaseIndex + 1];
  }
  return null;
}

function updateTimerDisplay() {
  document.getElementById('timer-display').textContent = formatTime(state.elapsedTime);

  const phase = getCurrentPhase();
  if (phase) {
    const phaseElapsed = getPhaseElapsedTime();
    const phaseProgress = phaseElapsed / phase.duration;

    // Update phase timer with elapsed/duration format
    document.getElementById('pour-timer').textContent =
      `${formatTime(phaseElapsed)} / ${formatTime(phase.duration)}`;

    // Update circular progress
    updateCircularProgress(Math.min(phaseProgress, 1));
  }
}

function getPhaseElapsedTime() {
  if (!state.currentRecipe) return 0;

  let phaseStartTime = 0;
  for (let i = 0; i < state.currentPhaseIndex; i++) {
    phaseStartTime += state.currentRecipe.phases[i].duration;
  }

  return state.elapsedTime - phaseStartTime;
}

function checkPhaseTransition() {
  const phase = getCurrentPhase();
  if (!phase) return;

  const phaseElapsed = getPhaseElapsedTime();

  if (phaseElapsed >= phase.duration) {
    moveToNextPhase();
  }
}

function moveToNextPhase() {
  if (state.currentPhaseIndex + 1 < state.currentRecipe.phases.length) {
    state.currentPhaseIndex++;
    updateBrewScreen();
    playAlert();
  } else {
    // Brewing complete
    completeBrew();
  }
}

function updateCircularProgress(progress) {
  const circle = document.getElementById('timer-progress');
  const circumference = 2 * Math.PI * 90; // r = 90
  const offset = circumference - (progress * circumference);
  circle.style.strokeDashoffset = offset;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function playAlert() {
  if (state.settings.soundAlerts && state.settings.phaseAlerts) {
    // Simple beep using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      console.log('Audio not supported');
    }
  }
}

// Brew control buttons
document.getElementById('pause-btn').addEventListener('click', () => {
  if (state.isPaused) {
    // Resume
    state.isPaused = false;
    state.brewStartTime = Date.now() - (state.elapsedTime * 1000);
    document.getElementById('pause-btn').textContent = 'Pause';
  } else {
    // Pause
    state.isPaused = true;
    state.pausedTime = Date.now() - state.brewStartTime - (state.elapsedTime * 1000);
    document.getElementById('pause-btn').textContent = 'Resume';
  }
});

document.getElementById('next-phase-btn').addEventListener('click', () => {
  moveToNextPhase();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  showModal(
    'Reset Brew?',
    'Are you sure you want to reset the current brew? This cannot be undone.',
    () => {
      stopTimer();
      showScreen('home');
    }
  );
});

// ========================================
// Completion Screen Functions
// ========================================
function completeBrew() {
  stopTimer();
  showScreen('completion');

  document.getElementById('summary-recipe').textContent = state.currentRecipe?.name || 'Unknown';
  document.getElementById('summary-time').textContent = formatTime(state.elapsedTime);
  document.getElementById('summary-coffee').textContent = `${state.currentBrew.coffeeWeight}g`;
  document.getElementById('summary-water').textContent = `${state.currentBrew.totalWater}g`;

  // Reset rating
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  state.currentBrew.rating = 0;

  // Clear notes
  document.getElementById('tasting-notes').value = '';
}

// Star rating
document.querySelectorAll('.star-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const rating = parseInt(e.target.getAttribute('data-rating'));
    state.currentBrew.rating = rating;

    document.querySelectorAll('.star-btn').forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  });
});

document.getElementById('save-brew-btn').addEventListener('click', () => {
  const brew = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    recipe: state.currentRecipe?.name || 'Unknown',
    recipeId: state.currentRecipe?.id || 'unknown',
    coffeeWeight: state.currentBrew.coffeeWeight,
    waterWeight: state.currentBrew.totalWater,
    brewTime: state.elapsedTime,
    rating: state.currentBrew.rating,
    notes: document.getElementById('tasting-notes').value
  };

  saveBrewHistory(brew);
  renderRecentBrews();

  showScreen('home');
});

document.getElementById('brew-again-btn').addEventListener('click', () => {
  if (state.currentRecipe) {
    startBrewProcess(state.currentRecipe.id);
  } else {
    showScreen('home');
  }
});

document.getElementById('home-btn').addEventListener('click', () => {
  showScreen('home');
});

// ========================================
// History Screen Functions
// ========================================
function renderBrewHistory() {
  const container = document.getElementById('history-list');
  const history = getBrewHistory();

  if (history.length === 0) {
    container.innerHTML = '<p class="empty-state">No brew history yet</p>';
    return;
  }

  container.innerHTML = history.map(brew => `
    <div class="history-item">
      <div class="history-header">
        <span class="history-date">${new Date(brew.timestamp).toLocaleString()}</span>
        <span class="history-rating">${'★'.repeat(brew.rating)}${'☆'.repeat(5 - brew.rating)}</span>
      </div>
      <div class="history-recipe">${brew.recipe}</div>
      <div class="history-details">${brew.coffeeWeight}g coffee : ${brew.waterWeight}g water | ${formatTime(brew.brewTime)}</div>
      ${brew.notes ? `<div class="history-notes">${brew.notes}</div>` : ''}
    </div>
  `).join('');
}

document.getElementById('clear-history-btn').addEventListener('click', () => {
  showModal(
    'Clear History?',
    'Are you sure you want to clear all brew history? This cannot be undone.',
    () => {
      clearBrewHistory();
      renderBrewHistory();
      renderRecentBrews();
    }
  );
});

// ========================================
// Settings Screen Functions
// ========================================
function loadSettingsUI() {
  document.getElementById('default-coffee-weight').value = state.settings.defaultCoffeeWeight;
  document.getElementById('default-ratio').value = state.settings.defaultRatio;
  document.getElementById('default-temp').value = state.settings.defaultTemp;
  document.getElementById('sound-alerts').checked = state.settings.soundAlerts;
  document.getElementById('phase-alerts').checked = state.settings.phaseAlerts;
}

document.getElementById('default-coffee-weight').addEventListener('change', (e) => {
  state.settings.defaultCoffeeWeight = parseFloat(e.target.value);
  saveSettings();
});

document.getElementById('default-ratio').addEventListener('change', (e) => {
  state.settings.defaultRatio = parseFloat(e.target.value);
  saveSettings();
});

document.getElementById('default-temp').addEventListener('change', (e) => {
  state.settings.defaultTemp = parseFloat(e.target.value);
  saveSettings();
});

document.getElementById('sound-alerts').addEventListener('change', (e) => {
  state.settings.soundAlerts = e.target.checked;
  saveSettings();
});

document.getElementById('phase-alerts').addEventListener('change', (e) => {
  state.settings.phaseAlerts = e.target.checked;
  saveSettings();
});

document.getElementById('export-data-btn').addEventListener('click', () => {
  const data = {
    history: getBrewHistory(),
    settings: state.settings,
    exportDate: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `v60-brew-data-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('import-data-btn').addEventListener('click', () => {
  document.getElementById('import-file-input').click();
});

document.getElementById('import-file-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);

      if (data.history) {
        saveToLocalStorage('brewHistory', data.history);
      }
      if (data.settings) {
        state.settings = { ...state.settings, ...data.settings };
        saveSettings();
        loadSettingsUI();
      }

      alert('Data imported successfully!');
      renderRecentBrews();
    } catch (error) {
      alert('Error importing data. Please check the file format.');
      console.error('Import error:', error);
    }
  };
  reader.readAsText(file);

  // Reset file input
  e.target.value = '';
});

// ========================================
// Modal Functions
// ========================================
function showModal(title, message, confirmCallback) {
  const modal = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;

  modal.classList.add('active');

  const confirmBtn = document.getElementById('modal-confirm');
  const cancelBtn = document.getElementById('modal-cancel');

  const handleConfirm = () => {
    confirmCallback();
    hideModal();
    cleanup();
  };

  const handleCancel = () => {
    hideModal();
    cleanup();
  };

  const cleanup = () => {
    confirmBtn.removeEventListener('click', handleConfirm);
    cancelBtn.removeEventListener('click', handleCancel);
  };

  confirmBtn.addEventListener('click', handleConfirm);
  cancelBtn.addEventListener('click', handleCancel);
}

function hideModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// Close modal on overlay click
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'modal-overlay') {
    hideModal();
  }
});

// ========================================
// Initialization
// ========================================
function setupRecipeCardListeners() {
  // Recipe card selection - navigate directly to preparation
  document.querySelectorAll('.recipe-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.recipe-card');
      const recipeId = card.getAttribute('data-recipe-id');

      if (recipeId === 'custom') {
        alert('Custom recipe creation coming soon!');
        return;
      }

      // Store the selected recipe ID and start brew process
      state.selectedRecipeId = recipeId;
      const recipe = recipes[recipeId];

      if (recipe) {
        // Set current recipe with its exact parameters
        state.currentRecipe = recipe;
        state.currentPhaseIndex = 0;
        state.isPaused = false;
        state.pausedTime = 0;
        state.elapsedTime = 0;

        // Update current brew data
        state.currentBrew.coffeeWeight = recipe.coffeeWeight;
        state.currentBrew.waterRatio = recipe.ratio;
        state.currentBrew.totalWater = recipe.totalWater;

        // Go directly to preparation screen
        showPrepScreen();
      }
    });
  });
}

function init() {
  loadSettings();
  loadSettingsUI();
  renderRecentBrews();
  showScreen('home');

  // Apply default settings to home screen Quick Start
  document.getElementById('coffee-weight-input').value = state.settings.defaultCoffeeWeight;
  document.getElementById('ratio-select').value = state.settings.defaultRatio;
  document.getElementById('temp-input').value = state.settings.defaultTemp;
  document.getElementById('grind-select').value = 'Medium-fine';
  updateWaterCalculation();

  // Setup recipe card event listeners
  setupRecipeCardListeners();
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Add SVG gradient for circular timer
const svg = document.querySelector('.circular-timer');
const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
gradient.setAttribute('id', 'timerGradient');
gradient.setAttribute('x1', '0%');
gradient.setAttribute('y1', '0%');
gradient.setAttribute('x2', '100%');
gradient.setAttribute('y2', '100%');

const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
stop1.setAttribute('offset', '0%');
stop1.setAttribute('style', 'stop-color:#6B3A7C;stop-opacity:1');

const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
stop2.setAttribute('offset', '100%');
stop2.setAttribute('style', 'stop-color:#8B5A9C;stop-opacity:1');

gradient.appendChild(stop1);
gradient.appendChild(stop2);
defs.appendChild(gradient);
svg.insertBefore(defs, svg.firstChild);
