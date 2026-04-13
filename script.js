let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (!id || !name || !marks) {
        alert("Please fill all fields!");
        return;
    }

    students.push({ id: Number(id), name, marks: Number(marks) });
    saveData();
    document.getElementById("output").innerText = "Student Added!";
}

function displayStudents() {
    let output = "--- Student List ---\n";
    students.forEach(s => {
        output += `ID: ${s.id} | Name: ${s.name} | Marks: ${s.marks}\n`;
    });
    document.getElementById("output").innerText = output;
}

function searchStudent() {
    let id = document.getElementById("id").value;
    let found = students.find(s => s.id == id);

    if (found) {
        document.getElementById("output").innerText =
            `Found: ID: ${found.id} | Name: ${found.name} | Marks: ${found.marks}`;
    } else {
        document.getElementById("output").innerText = "Student not found!";
    }
}

function deleteStudent() {
    let id = document.getElementById("id").value;
    let initialLength = students.length;

    students = students.filter(s => s.id != id);
    saveData();

    if (students.length < initialLength) {
        document.getElementById("output").innerText = "Student Deleted!";
    } else {
        document.getElementById("output").innerText = "Student not found!";
    }
}

function updateStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    let found = students.find(s => s.id == id);

    if (found) {
        found.name = name;
        found.marks = Number(marks);
        saveData();
        document.getElementById("output").innerText = "Student Updated!";
    } else {
        document.getElementById("output").innerText = "Student not found!";
    }
}
