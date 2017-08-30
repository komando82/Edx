using System;
using System.Linq;

namespace StudentList.Services
{
    public class StudentManager
    {
        private const char StudentEntryDelimiter = ',';
        private StudentStorage _storage;
        private Random _rand;
        private string _studentList;

        public StudentManager()
        {
            _storage = new StudentStorage();
            _rand = new Random();
            _studentList = _storage.LoadStudentList();
        }

        /// <summary>
        /// Initializes a new instance of the StudentManager class.
        /// </summary>
        /// <param name="storage">The backing student storage.</param>
        public StudentManager(StudentStorage storage)
        {
            _storage = storage;
            _rand = new Random();
            _studentList = _storage.LoadStudentList();
        }

        /// <summary>
        /// Returns the list of students
        /// </summary>
        /// <returns>An array of student names.</returns>
        public string[] Students
        {
            get
            {
                return _studentList.Split(StudentEntryDelimiter);
            }
        }

        /// <summary>
        /// Returns a student randonly chosen from the student list.
        /// </summary>
        /// <returns>The random student.</returns>
        public string PickRandomStudent()
        {
            var randomIndex = _rand.Next(0,this.Students.Length);
            return this.Students[randomIndex];
        }

        /// <summary>
        /// Adds the student with the given student name to the list of students.
        /// </summary>
        /// <param name="newStudent">The name of the new student.</param>
        public void AddStudent(string newStudent)
        {
            _studentList += StudentEntryDelimiter + newStudent;
            _storage.UpdateStudentList(_studentList);
        }

        /// <summary>
        /// Determines whether a student exists in the student list.
        /// </summary>
        /// <param name="student">The student to check.</param>
        /// <returns>true if the student exists in the list;otherwise, false.</returns>
        public bool StudentExists(string student)
        {
            // Using the 'Any'  LINQ method to return whether or not 
            // any item  matches the given predicate.
            return this.Students.Any(s => s.Trim() == student);
        }

    }
}