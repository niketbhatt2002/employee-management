document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#employee-table tbody");

    // Fetch employee data from the backend
    fetch("http://localhost:5000/api/employees")  // Adjust URL if needed
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check if data is empty or malformed
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(employee => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.salary}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.department}</td>
                        <td>${new Date(employee.dateOfJoining).toLocaleDateString()}</td>
                        <td>${employee.dateOfLeaving ? new Date(employee.dateOfLeaving).toLocaleDateString() : "N/A"}</td>
                    `;
                    
                    tableBody.appendChild(row);
                });
            } else {
                console.error("Invalid data format or empty list.");
            }
        })
        .catch(error => {
            console.error("Error fetching employee data:", error);
            // Display error message on frontend
            const errorMessage = document.createElement("tr");
            errorMessage.innerHTML = `<td colspan="7">Error fetching employee data. Please check the backend connection.</td>`;
            tableBody.appendChild(errorMessage);
        });
});
