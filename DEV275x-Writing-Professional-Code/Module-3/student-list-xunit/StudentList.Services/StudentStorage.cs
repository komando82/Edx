using System;
using System.IO;

namespace StudentList.Services
{
    public class StudentStorage
    {
        /// Name of file containing list of students. 
        private const string StudentList = "students.txt"; 
        
        /// <summary>
        /// Replaces the contents of the student storage with the given string of content.
        /// The method will also update the timestamp in the student storage.
        /// </summary>
        /// <param name="content">The new content for the student storage </param> 
        public virtual void UpdateStudentList(string content)
        {
            var timestamp = String.Format("List last updated on {0}", DateTime.Now);

            // The 'using' construct does the heavy lifting of flushing a stream
            // and releasing system resources the stream was using.
            using (var fileStream = new FileStream(StudentList,FileMode.Open))
            using (var writer = new StreamWriter(fileStream))
            {
                writer.WriteLine(content);
                writer.WriteLine(timestamp);
            }
        }

        /// <summary>
        /// Reads student data from student storage.
        /// </summary>
        /// <returns>A string of student names.</returns>
        public virtual string LoadStudentList()
        {
            // The 'using' construct does the heavy lifting of flushing a stream
            // and releasing system resources the stream was using.
            using (var fileStream = new FileStream(StudentList,FileMode.Open))
            using (var reader = new StreamReader(fileStream))
            {

                // The format of our student list is that it is two lines.
                // The first line is a comma-separated list of student names. 
                // The second line is a timestamp. 
                // Let's just retrieve the first line, which is the student names. 
                return reader.ReadLine();
            }
        }
    }
}
