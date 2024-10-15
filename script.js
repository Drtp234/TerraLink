// Mostrar la sección seleccionada
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Cerrar el popup de bienvenida
function closePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
}

// Función para mostrar/ocultar el menú de navegación
function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}

// Función para activar/desactivar el riego
function toggleIrrigation(zone) {
    alert(`Riego de ${zone} activado/desactivado.`);
}

// Función para programar el riego
function programIrrigation(zone) {
    const time = document.getElementById(`timeIrrigation${zone.charAt(0).toUpperCase() + zone.slice(1)}`).value;
    alert(`Riego de ${zone} programado para las ${time}.`);
}

// Función para activar/desactivar las luces
function toggleLights(zone) {
    alert(`Luces de ${zone} activadas/desactivadas.`);
}

// Función para programar las luces
function programLights(zone) {
    const time = document.getElementById(`timeLights${zone.charAt(0).toUpperCase() + zone.slice(1)}`).value;
    alert(`Luces de ${zone} programadas para las ${time}.`);
}

// Crear gráfico de consumo
function createConsumptionChart() {
    const ctx = document.getElementById('consumptionChart').getContext('2d');
    const consumptionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [{
                label: 'Consumo de Agua',
                data: [10, 15, 8, 20, 5, 12, 14],
                backgroundColor: 'rgba(52, 152, 219, 0.6)', // Azul
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            },
            {
                label: 'Consumo de Energía',
                data: [100, 200, 150, 300, 250, 100, 120],
                backgroundColor: 'rgba(241, 196, 15, 0.6)', // Amarillo pollito
                borderColor: 'rgba(241, 196, 15, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Mostrar el gráfico al cargar la sección de estadísticas
document.getElementById('stats').addEventListener('click', createConsumptionChart);

// Mostrar el popup al cargar la página
window.onload = function() {
    document.getElementById('welcomePopup').style.display = 'flex';
}
