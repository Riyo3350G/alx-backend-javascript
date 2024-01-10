export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface ClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements ClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}
