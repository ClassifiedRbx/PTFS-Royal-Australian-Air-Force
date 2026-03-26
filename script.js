// Enhanced Aircraft Data
// This includes a more detailed structure for the aircraft information.

const aircraftData = [
    {
        id: 1,
        name: 'F-35 Lightning II',
        type: 'Stealth Multirole Fighter',
        service: 'Royal Australian Air Force',
        functions: ['Air dominance', 'Intelligence', 'Reconnaissance']
    },
    {
        id: 2,
        name: 'Boeing P-8 Poseidon',
        type: 'Maritime Patrol Aircraft',
        service: 'Royal Australian Air Force',
        functions: ['Maritime surveillance', 'Anti-submarine warfare']
    }
];

// Career Path Linking
// Linking career paths to respective aircraft types.
const careerPaths = {
    'Pilot': ['F-35 Lightning II', 'Boeing P-8 Poseidon'],
    'Engineer': ['F-35 Lightning II'],
    'Analyst': ['Boeing P-8 Poseidon']
};

// Interactive Elements with Event Listeners
// Implementing hover effects.
document.querySelectorAll('.aircraft-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
});

// Form Navigation
// Example function for form navigation.
function navigateToForm(formId) {
    const currentForm = document.querySelector('.form.active');
    if (currentForm) {
        currentForm.classList.remove('active');
    }
    document.getElementById(formId).classList.add('active');
}