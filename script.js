function showSection(id) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    document.getElementById(id).style.display = "block";
}

// Show booking section by default
document.getElementById("booking").style.display = "block";

// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Room booked successfully!");
});