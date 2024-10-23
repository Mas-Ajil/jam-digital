function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  const schedule = document.getElementById('schedule');
  if (hours >= 6 && hours < 12) {
    schedule.textContent = "Schedule: Morning Routine ☕";
  } else if (hours >= 12 && hours < 18) {
    schedule.textContent = "Schedule: Work or Study 📚";
  } else if (hours >= 18 && hours < 22) {
    schedule.textContent = "Schedule: Relaxing or Entertainment 🎬";
  } else {
    schedule.textContent = "Schedule: Sleeping Time 💤";
  }
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);
updateClock();
