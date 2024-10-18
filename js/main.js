const AppState = {
    currentScreen: 'welcome',
    assessmentCompleted: false,
    userProgress: {}
};

function navigateTo(screen) {
    AppState.currentScreen = screen;
    updateUI();
}

function updateUI() {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    
    // Mostrar la pantalla actual
    document.querySelector(`#${AppState.currentScreen}Screen`).classList.remove('hidden');
}