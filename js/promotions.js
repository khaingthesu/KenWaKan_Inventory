// ====================================
// ADD STUDENT
// ====================================

const promotionTable =
document.getElementById(“promotionTable”);

const addPromotionBtn =
document.getElementById(“addPromotionRow”);

addPromotionBtn.addEventListener(“click”, () => {
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

            <option>White/Yellow</option>
            <option>White/Orange</option>
            <option>White/Green</option>
            <option>White/Brown</option>

            <option>White/Double Yellow</option>
            <option>White/Double Orange</option>
            <option>White/Double Green</option>
            <option>White/Double Brown</option>

            <option>White/Blue</option>

            <option>Blue</option>
            <option>Blue/Yellow</option>

            <option>Yellow</option>
            <option>Yellow/Orange</option>

            <option>Orange</option>
            <option>Orange/Green</option>

            <option>Green</option>
            <option>Green/Brown</option>

            <option>Brown</option>
            <option>Brown/Black</option>

            <option>Black</option>

        </select>

    </td>

    <td>

        <select>

            <option>White/Yellow</option>
            <option>White/Orange</option>
            <option>White/Green</option>
            <option>White/Brown</option>

            <option>White/Double Yellow</option>
            <option>White/Double Orange</option>
            <option>White/Double Green</option>
            <option>White/Double Brown</option>

            <option>White/Blue</option>

            <option>Blue</option>
            <option>Blue/Yellow</option>

            <option>Yellow</option>
            <option>Yellow/Orange</option>

            <option>Orange</option>
            <option>Orange/Green</option>

            <option>Green</option>
            <option>Green/Brown</option>

            <option>Brown</option>
            <option>Brown/Black</option>

            <option>Black</option>

        </select>

    </td>

    <td>
        <input
            type="number"
            min="0"
            placeholder="Current">
    </td>

    <td>
        <input
            type="number"
            min="0"
            placeholder="Required">
    </td>

    <td>
        <input
            type="checkbox"
            class="shihanApproval">
    </td>

    <td>
        <input
            type="date">
    </td>

    <td>
        <input
            type="checkbox"
            class="emailSent">
    </td>

    <td>
        <button class="deleteRow">
            Delete
        </button>
    </td>

`;

promotionTable.appendChild(row);

attachDeleteEvent(row);
