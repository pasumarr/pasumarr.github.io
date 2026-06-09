// DOM Elements
const commandButtons = document.querySelectorAll('.term-cmd');
const terminalOutput = document.getElementById('terminal-output');
const secretBtn = document.getElementById('secret-btn');

// Object containing data matching commands
const responses = {
    skills: `> Loading Sai's stack...\n[■■■■■■■■■□] JavaScript / HTML / CSS\n[■■■■■■■■□□] UI Architecture\n[■■■■■■■□□□] Git & Deployments`,
    projects: `> Fetching live repositories...\n• Project Alpha - High speed deployment hub\n• Grid System - Beautiful web layouts\n• Terminal Widget - Currently running live here!`,
    clear: ""
};

// Handle Terminal Command Clicks
commandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const command = button.getAttribute('data-cmd');
        
        if (command === 'clear') {
            terminalOutput.textContent = '';
        } else {
            // Display chosen text instantly or clear previous first
            terminalOutput.textContent = responses[command];
        }
    });
});

// Fun Easter Egg Button Click
secretBtn.addEventListener('click', () => {
    alert("🌌 Matrix Easter Egg: You found Sai's secret repository configuration! Keep exploring.");
});
