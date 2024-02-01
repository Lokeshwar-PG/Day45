window.addEventListener('DOMContentLoaded', (event) => {
    createMainPage();
});

const createMainPage = () => {
    const tableHeader = `<tr><th></th><th>Name</th><th>Gender</th><th>Departments</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>`;
    const tableData = ` ${tableHeader}
    <tr>
        <td> <img src="Ellipse -1.png" alt=""> </td>
        <td>Lokesh</td>
        <td>Male</td>
        <td>
            <div class="dept-label">Finance</div>
            <div class="dept-label">Engineering</div>
        </td>
        <td>30000</td>
        <td>10 Feb 2024</td>
        <td> <i class="fa fa-trash icon" aria-hidden="true" onclick="onTrashIconClick()"></i>  
                <i class="fa fa-pencil icon" aria-hidden="true" onclick="onEditIconClick()"></i> 
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = tableData;
}