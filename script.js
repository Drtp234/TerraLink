// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

// Establecer la página de inicio al cargar
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');  // Mostrar la sección de inicio al cargar
});

// Función para encender/apagar luces
function toggleLight(zone) {
    const lightStatus = document.getElementById(`lightStatus${zone}`);
    if (lightStatus.textContent === "Apagadas") {
        lightStatus.textContent = "Encendidas";
    } else {
        lightStatus.textContent = "Apagadas";
    }
}

// Función para encender/apagar el sistema de riego
function toggleWater(zone) {
    const waterStatus = document.getElementById(`waterStatus${zone}`);
    if (waterStatus.textContent === "Apagado") {
        waterStatus.textContent = "Encendido";
    } else {
        waterStatus.textContent = "Apagado";
    }
}

// Función para establecer la programación
function setSchedule(zone) {
    const lightTime = document.getElementById(`lightTime${zone}`).value;
    const waterTime = document.getElementById(`waterTime${zone}`).value;

    if (lightTime) {
        console.log(`Luces de la zona ${zone} programadas para encenderse a las ${lightTime}`);
    }

    if (waterTime) {
        console.log(`Riego de la zona ${zone} programado para las ${waterTime}`);
    }

    alert(`Programación para la zona ${zone} establecida.`);
}
