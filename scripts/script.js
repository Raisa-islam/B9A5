
let t = 0;
let m = 0;
let total_free_seat=40;

document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('click', () => selectCell(cell));
    cell.addEventListener('mouseover', () => highlightCell(cell));
    cell.addEventListener('mouseout', () => unhighlightCell(cell));
});

function goToTicket() {
    //console.log("btn clicked!");
    const targetSection = document.getElementById('ticket-section');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}


function selectCell(cell) {
    // Check if the cell is selected or not
    if (cell.classList.contains('selected')) {
        // Decrease the value of t
        t--;
        m = 0;
        // Remove the 'selected' class
        cell.classList.remove('selected');
        console.log(t);
    } else {
        // Increase the value of t
        t++;
        // Add the 'selected' class
        cell.classList.add('selected');
        console.log(t);
        m=1;
    }

    // Update the background color based on the value of t
    cell.style.backgroundColor = m === 1 ? 'blue' : '#F7F8F8';

}

