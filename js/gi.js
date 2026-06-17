// ====================================
// GI INVENTORY
// ====================================

const sizes = [
    "0000",
    "000",
    "00",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
];



// Create default Gi size rows

sizes.forEach(size => {

    const row = document.createElement("tr");

    row.innerHTML = `

        <td>${size}</td>

        <td>
            <input
                type="number"
                class="stock"
                value=""
                min="0">
        </td>

        <td>
            <input
                type="number"
                class="needed"
                value=""
                min="0">
        </td>

        <td class="order">
            0
        </td>

    `;

    giTable.appendChild(row);

});

// ====================================
// CALCULATE ORDER
// ====================================

function calculateOrder(row){

    const stock =
        parseInt(
            row.querySelector(".stock").value
        ) || 0;

    const needed =
        parseInt(
            row.querySelector(".needed").value
        ) || 0;

    const order =
        Math.max(0, needed - stock);

    row.querySelector(".order").textContent =
        order;
}

// ====================================
// ATTACH EVENTS
// ====================================

function attachEvents(){

    document
        .querySelectorAll(".stock, .needed")
        .forEach(input => {

            input.addEventListener(
                "input",
                () => {

                    const row =input.closest("tr");

                    calculateOrder(row);

                }
            );

        });

}

attachEvents();

// ====================================
// ASSIGNED UNIFORMS
// ====================================

const assignedTable =
    document.getElementById("assignedTable");

const addAssignedBtn =
    document.getElementById("addAssignedRow");

addAssignedBtn.addEventListener("click", () => {

    const row =
        document.createElement("tr");

    row.innerHTML = `

        <td>
            <input
                type="text"
                placeholder="Student Name">
        </td>

        <td>

            <select>

                <option>Tiny Tiger</option>
                <option>Ninja Skill</option>
                <option>Junior Basic</option>
                <option>Junior BBC</option>
                <option>Adult Basic</option>
                <option>Adult BBC</option>

            </select>

        </td>

        <td>

            <select>

                <option>000</option>
                <option>00</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>

            </select>

        </td>

        <td>

            <input
                type="date">

        </td>
        <td>

        <button class="deleteRow">

            Delete

        </button>

    </td>

    `;

    assignedTable.appendChild(row);

attachDeleteEvent(row);

});

// ====================================
// DELETE ROW
// ====================================

function attachDeleteEvent(row){

    const deleteBtn =row.querySelector(".deleteRow");

deleteBtn.addEventListener(
    "click",
    () => {

        row.remove();

    }
);
}
