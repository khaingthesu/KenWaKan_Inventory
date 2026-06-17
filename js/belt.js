// ====================================
// BELT INVENTORY
// ====================================

const beltInventory = [

    {color: "White/Yellow", sizes: ["1","2"]},
    {color: "White/Orange", sizes: ["1","2"]},
    {color: "White/Green", sizes: ["1","2"]},
    {color: "White/Brown", sizes: ["1","2"]},
    {color: "White/Double Yellow", sizes: ["1","2"]},
    {color: "White/Double Orange", sizes: ["1","2"]},
    {color: "White/Double Green", sizes: ["1","2"]},
    {color: "White/Double Brown", sizes: ["1","2"]},
    
    {color:"White/Blue", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Blue", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Blue/Yellow", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Yellow", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Yellow/Orange", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Orange", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Orange/Green", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Green", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Green/Brown", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Brown", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Brown/Black", sizes: ["2", "3","4", "5", "6", "7"]},
    {color: "Black", sizes: ["2", "3","4", "5", "6", "7"]}
];

const beltTable =

    document.getElementById("beltTable");

// ====================================

// CREATE BELT ROWS

// ====================================

beltInventory.forEach(belt => {

    belt.sizes.forEach(size => {

        const row =

            document.createElement("tr");

        row.innerHTML = `

            <td>${belt.color}</td>

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

        beltTable.appendChild(row);

    });

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

                    const row =

                        input.closest("tr");

                    calculateOrder(row);

                }

            );

        });

}

attachEvents();
