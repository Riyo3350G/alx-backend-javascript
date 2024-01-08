export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((item) => item.location === city)
    .map((item) => {
      const grade = newGrades.filter((grade) => grade.studentId === item.id);
      const gradeValue = grade.length > 0 ? grade[0].grade : 'N/A';
      return { ...item, grade: gradeValue };
    });
}
