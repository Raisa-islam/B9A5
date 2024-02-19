
let t = 0;
let m = 0;
let total_free_seat=40;
let Price_t = 550;


document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('click', () => selectCell(cell));
    cell.addEventListener('mouseover', () => highlightCell(cell));
    cell.addEventListener('mouseout', () => unhighlightCell(cell));
    cell.style.backgroundColor = '#F7F8F8'
});

function goToTicket() {
    //console.log("btn clicked!");
    const targetSection = document.getElementById('ticket-section');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}


function selectCell(cell) {
    const supertext = document.getElementById("sup")
    const freeS = document.getElementById("freeSeat")
   // console.log(supertext)
    // Check if the cell is selected or not
    if (cell.classList.contains('selected')) {
        // Decrease the value of t
        t--;
        m = 0;
        total_free_seat = 40-t;
        
        supertext.textContent = t;
        freeS.textContent = total_free_seat;
        
        // Remove the 'selected' class
        cell.classList.remove('selected');
        //console.log(t);
        cell.style.backgroundColor = '#F7F8F8';


    } else {
        // Increase the value of t
        if(t< 4){
            t++;
        // Add the 'selected' class
            cell.classList.add('selected');
            
            supertext.textContent = t;
            total_free_seat = 40-t;
            
            //console.log(cell.textContent);
            // modifyGrid(cell.textContent);
            addRow(cell.textContent, 'Economy', '550');
            calculateTotal();
            grandT(0);
            m=1;
            freeS.textContent = total_free_seat;
            cell.style.backgroundColor = 'blue';
        }
        else{
            //alert("You can not select more than 4 seats!");
           alert_btn();
        }
        
    }

    

}

const inputFields = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"]');

inputFields.forEach(field => {
  field.style.border = '1px solid #ccc';
  field.style.borderRadius = '12px';
  field.style.width = '430px';
  field.style.height = '60px';
  field.style.padding = '10px';
});

const links = document.querySelectorAll('.links a');

links.forEach(link => {
  link.style.textDecoration = 'underline';
});


// next button enable

const inputField1 = document.getElementById('name');
const inputField2 = document.getElementById('number');
const submitButton = document.getElementById('submit-button');

// Add event listeners to input fields
inputField1.addEventListener('input', checkInputs);
inputField2.addEventListener('input', checkInputs);

// Function to check inputs and enable/disable the button
function checkInputs() {
    // Get the values of the input fields
    const value1 = inputField1.value.trim();
    const value2 = inputField2.value.trim();

    // Enable the button if both fields are filled, otherwise disable it
    if(t>0){
        submitButton.disabled = !(value1 && value2);
    }
    
}




function addRow(value1, value2, value3) {
    const tableBody = document.querySelector('#table tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Add three cells to the row with the provided values
    for (const value of [value1, value2, value3]) {
        const newCell = document.createElement('td');
        newCell.textContent = value;
        newRow.appendChild(newCell);
    }

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}

function calculateTotal(){
    const total = document.getElementById('total');
    t_now = t * Price_t;
    total.textContent = t_now;
}

function grandT(x) {
    const gt = document.getElementById('grandTotal');
    let t_now = t * Price_t;
    let gtotal = 0;
  
    if (x === 0) {
      gt.textContent = t_now;
    }
    if (x === 1) {
      gtotal = fifteen(t_now);
      gt.textContent = gtotal;
    }
    if (x === 2) {
      gtotal = twenty(t_now);
      gt.textContent = gtotal;
    }
  
    return gtotal;
  }

const button = document.getElementById('applyC');
const input = document.getElementById('cupon')



const discLabel = document.getElementById('disc');
const dscAm = document.getElementById('discAmount');

button.addEventListener('click', function() {
    const coupon = input.value.trim().toUpperCase();
    let discount = 0;
  
    if (coupon === 'NEW15') {
      discount = grandT(1);
    } else if (coupon === 'COUPLE20') {
      discount = grandT(2);
    } else {
      alert('Invalid Coupon');
    }
    let x;
    x = t*Price_t-discount;
    discLabel.textContent = 'Discount';
    dscAm.textContent = `BDT ${x}`;
   // resultDiv.textContent = `Discount: ${x}%`;
  });