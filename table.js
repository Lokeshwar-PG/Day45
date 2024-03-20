let employeePayrollList;

window.addEventListener('DOMContentLoaded', (event) => {
    createMainPage();
});

const getLocalStorage = () => {
    let employeePayrollLocalStorage = [];
    var keys = Object.keys(localStorage);
    for(let i=0; i<keys.length; i++) {
        var key = keys[i];
        var value = JSON.parse(localStorage.getItem(key));
        employeePayrollLocalStorage.push(value);
    }
    return employeePayrollLocalStorage;
}

const createMainPage = () => {
    employeePayrollList = getLocalStorage();
    const tableHeader = `<tr><th></th><th>Name</th><th>Gender</th><th>Departments</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>`;
    let tableData = ` ${tableHeader} `
    for(const employeePayrollData of employeePayrollList) {
        tableData = `${tableData}
            <tr>
                <td> <img src="./${employeePayrollData.profile}" alt=""> </td>
                <td>${employeePayrollData.name}</td>
                <td>${employeePayrollData.gender}</td>
                <td>${getDeparmentsHtml(employeePayrollData.departments)}</td>
                <td> <i class="fa fa-inr" aria-hidden="true"></i> ${employeePayrollData.salary} </td>
                <td>${employeePayrollData.startDate}</td>
                <td> <i class="fa fa-trash icon" aria-hidden="true" onclick="onTrashIconClick('${employeePayrollData.name}')"></i>  
                     <i class="fa fa-pencil icon" aria-hidden="true" onclick="onEditIconClick('${employeePayrollData.name}')"></i> 
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = tableData;
}

const getDeparmentsHtml = (departmentList) => {
    let departmentsHtml = '';
    for(const department of departmentList) {
        departmentsHtml = `${departmentsHtml} <div class="dept-label">${department}</div>`
    }
    return departmentsHtml; 
}


const onTrashIconClick = (employeeName) => {
    localStorage.removeItem(employeeName);
    createMainPage();
}

const onEditIconClick = (employeeName) => {
    loadData(employeeName);
    window.location.href = './employeepayrolldesign.html';


    // var name = employeeName;
    // var userDetails = localStorage.getItem(name);
    // var userDetails = JSON.parse(userDetails);

    // var profiles = document.querySelectorAll('input[name="profile"]');
    // profiles.forEach(profile => {
    //     if(profile.value == userDetails.profile) {
    //         profile.checked = true;
    //     }
    // })

    // var genders = document.querySelectorAll('input[name="gender"]');
    // genders.forEach(gender => {
    //     if(gender.value == userDetails.gender) {
    //         gender.checked = true;
    //     }
    // })

    // var departments = document.querySelectorAll('input[name="department"]');
    // departments.forEach(department => {
    //     if(userDetails.departments.includes(department.value)) {
    //         department.checked = true;
    //     }
    // })

    // document.getElementById("name").value = userDetails.name;
    // document.getElementById("salary").value = userDetails.salary;
    // var date = userDetails.startDate.split(' ');
    // document.getElementById("day").value = date[0];
    // document.getElementById("month").value = date[1];
    // document.getElementById("year").value = date[2];
    // document.getElementById("notes").value = userDetails.notes;
    
    // window.location.href = './employeepayrolldesign.html';
}