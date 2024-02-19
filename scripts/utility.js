function toggleCellCol(event){
    event.target.classList.toggle('bg-blue-500');
    event.target.classList.toggle('text-white');
}
function highlightCell(cell) {
    if (!cell.classList.contains('selected')) {
        cell.style.backgroundColor = 'green';
    }
}

function unhighlightCell(cell) {
    if (!cell.classList.contains('selected')) {
        cell.style.backgroundColor = '#F7F8F8';
    }
}
function addSeat(){

}

function removeSeat(){

}