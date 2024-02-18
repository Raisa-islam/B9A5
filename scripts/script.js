let seatCount = 0;
const gridCells = document.querySelectorAll('#gridContainer ');

function goToTicket() {
    //console.log("btn clicked!");
    const targetSection = document.getElementById('ticket-section');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

const cells = document.querySelectorAll('.grid-cell');
cells.forEach(cell => {
    cell.addEventListener('click', () => selectCell(cell.id));
});