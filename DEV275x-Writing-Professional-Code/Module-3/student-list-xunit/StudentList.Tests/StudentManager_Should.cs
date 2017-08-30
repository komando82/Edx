using System;
using Xunit;
using Moq;
using StudentList.Services;

namespace StudentList.Tests
{
    public class StudentManager_Should
    {
        Mock<StudentStorage> mockStorage;

        public StudentManager_Should()
        {
            mockStorage = new Mock<StudentStorage>();
            mockStorage.Setup(sm => sm.LoadStudentList())
                .Returns("student1,student2,student3");
        }

        [Fact]
        public void ReturnListOfStudents()
        {
            // Arrange
            var sut = new StudentManager(mockStorage.Object);

            // Act
            var actual = sut.Students;

            // Assert
            Assert.IsType(typeof(string[]), actual);
            Assert.True(actual.Length == 3);
            Assert.Contains("student2", actual);
        }

        [Fact]
        public void ReturnCorrectStudentCount()
        {
            // Arrange
            var sut = new StudentManager(mockStorage.Object);

            // Act
            var actual = sut.Students.Length;

            // Assert 
            Assert.Equal(actual, 3);
        }

        [Fact]
        public void ReturnRandomStudent()
        {
            // Arrange 
            var sut = new StudentManager(mockStorage.Object);
            var actualString = mockStorage.Object.LoadStudentList();

            // Act
            var expectedSubString = sut.PickRandomStudent();

            // Assert
            Assert.Contains(expectedSubString,actualString);
        }

        [Fact]
        public void ReturnTrue_When_SearchForExistingStudent()
        {
            // Arrange 
            var sut = new StudentManager(mockStorage.Object);
            var existingStudent = "student1"; // This student is setup in mock StudentStorage object.

            // Act
            var actual = sut.StudentExists(existingStudent);

            // Assert
            Assert.True(actual);
        }

        [Fact]
        public void ReturnFalse_When_SearchForNonExistentStudent()
        {
            // Arrange 
            var sut = new StudentManager(mockStorage.Object);
            var fakeStudent = "notARealStudent"; 

            // Act
            var actual = sut.StudentExists(fakeStudent);

            // Assert
            Assert.False(actual);
        }

        [Fact]
        public void Call_UpdateStudentList_When_StudentAdded()
        {
            // Arrange 
            var sut = new StudentManager(mockStorage.Object);
            var originalList = mockStorage.Object.LoadStudentList();
            var newStudent = "testStudent";
            var updatedList = originalList + "," + newStudent;
            
            // Act
            sut.AddStudent(newStudent);
            
            // Assert
            mockStorage.Verify(x => x.UpdateStudentList(updatedList));
        }
    }
}
