
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


function alert_btn() {


    const alertContainer = document.createElement("div");
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "50%";
    alertContainer.style.left = "50%";
    alertContainer.style.transform = "translate(-50%, -50%)";
    alertContainer.style.backgroundColor = "#fff";
    alertContainer.style.padding = "20px";
    alertContainer.style.border = "1px solid #1DD100";
    alertContainer.style.borderRadius = "5px";
    alertContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";

    // const heading = document.createElement("h2");
    // heading.textContent = "Custom Alert Heading";
    // heading.style.margin = "0";

    const message = document.createElement("p");
    message.textContent = "You can not select more than 4 seats!";
    message.style.margin = "10px 0";

    const closeButton = document.createElement("Close");
    closeButton.textContent = "Close";
    closeButton.style.padding = "5px 10px";
    closeButton.style.backgroundColor = "#1DD100";
    closeButton.style.color = '#ffff';
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("click", () => {
        alertContainer.remove();
    });

    // alertContainer.appendChild(heading);
    alertContainer.appendChild(message);
    alertContainer.appendChild(closeButton);

    document.body.appendChild(alertContainer);
}

function twenty(value){
    value = value - 0.20*value;
    return value;
}

function fifteen(value){
    value = value - 0.15*value;
    return value;
}