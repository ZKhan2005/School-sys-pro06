#! /usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(tchrObj) {
        this.teachers.push(tchrObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
// School
let school1 = new School("Karachi Grammar School");
let school2 = new School("Karachi Public School");
let school3 = new School("St.Paul's English High School");
// student
let s1 = new Student("Ayat Khan", 5, school1.name);
let s2 = new Student("Insha Khan", 8, school2.name);
let s3 = new Student("Azmara Khan", 10, school3.name);
// Teacher
let t1 = new Teacher("Daniyal Nagori", 29, school1.name);
let t2 = new Teacher("Hina Naseer", 30, school2.name);
let t3 = new Teacher("Zia Khan", 35, school3.name);
//Student
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
// Teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
//school
console.log(school1);
console.log(school2);
console.log(school3);
export {};
