// Տրված է օբյեկտներից բաղկացած զանգված, 
// որտեղ ամեն օբյեկտ պարունակում է մեկ ուսանողի տվյալներ․
// անուն(Name), ազգանուն(LastName), խմբի համար (GroupNumber), 5 առարկայից գնահատականներ (grades[]):
// Բոլոր ուսանողների համար կատարել հետևյալը․ եթե ուսանողը անունը և ազգանունը չեն սկսվում ՛Ա՛ տառով,
// ապա ավելացնել նոր տվյալ՝ միջին գնահատական (AverageGrade)՝ ուսանողի գնահատականների միջին թվաբանականով: Արտածել ստացված զանգվածը։

let students = [
    { Name: "Աննա", LastName: "Հովհաննիսյան", GroupNumber: "201", grades: [9, 8, 7, 10, 8] },
    { Name: "Միքայել", LastName: "Կարապետյան", GroupNumber: "202", grades: [8, 9, 10, 7, 9] },
    { Name: "Էրիկ", LastName: "Աբրահամյան", GroupNumber: "203", grades: [10, 9, 9, 8, 7] },
    { Name: "Աբրահամ", LastName: "Սահակյան", GroupNumber: "204", grades: [8, 8, 9, 10, 9] }
]

students.forEach(student => {
    if (!student.Name.startsWith("Ա") && !student.LastName.startsWith("Ա")) {
        let averageGrade = student.grades.reduce((a, b) => a + b, 0) / student.grades.length
        student.AverageGrade = averageGrade
    }
})

alert(students)

