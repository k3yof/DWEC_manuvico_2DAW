function getWeekDay(date) {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

const today = new Date(2012,0,3);
console.log(today);
console.log(getWeekDay(today)); // Esto mostrará el día de la semana actual en formato corto

    
