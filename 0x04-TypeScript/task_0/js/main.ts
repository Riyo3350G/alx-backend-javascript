interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ali',
    lastName: 'Baba',
    age: 24,
    location: 'Merrakech'
};

const student2: Student = {
    firstName: 'Saad',
    lastName: 'Lamjarred',
    age: 24,
    location: 'Casablanca'
};

const studentsList: Array<Student> = [student1, student2];

export const tableRendering = (studentsList: Array<Student>): void => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headerRow);

    headerRow.insertAdjacentHTML('beforeend', '<th>First Name</th>');
    headerRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

    for (const student of studentsList) {
        const row = document.createElement('tr');
        table.insertAdjacentElement('beforeend', row);

        row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

tableRendering(studentsList);