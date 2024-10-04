function DateHeure() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    return (
        <div>
            <p>Date: {date}, Heure: {time}</p>
        </div>
    );
}

export default DateHeure;