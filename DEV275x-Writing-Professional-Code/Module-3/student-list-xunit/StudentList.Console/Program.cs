using System;
using System.IO;
using System.Linq;
using StudentList.Services;

namespace dev275x.studentlist
{
    class Program
    {
        static void Main(string[] args)
        {
            /* Check argument count */
            if (args == null || args.Length != 1)
            {
                ShowUsage();
                return; // Exit early.
            }

            var studentManager = new StudentManager();

            // TODO: Handle case when studentList is empty
            if (args[0] == Constants.ShowAll) 
            {
                foreach(var student in studentManager.Students) 
                {
                    Console.WriteLine(student);
                }
            }
            else if (args[0]== Constants.ShowRandom)
            {
                Console.WriteLine(studentManager.PickRandomStudent());
            }
            else if (args[0].StartsWith(Constants.AddEntry)) 
            {
                var newEntry = args[0].Substring(1);
                studentManager.AddStudent(newEntry);
            }
            else if (args[0].StartsWith(Constants.FindEntry))
            {
                
                var searchTerm = args[0].Substring(1);

                if (studentManager.StudentExists(searchTerm))
                {
                     Console.WriteLine($"Entry '{searchTerm}' found.");
                }
                else
                {
                     Console.WriteLine($"Entry '{searchTerm}' does not exist.");
                }
            }
            else if (args[0] == Constants.ShowCount)
            {
                Console.WriteLine(String.Format("{0} students found", studentManager.Students.Count()));
            }
            else
            {
                // Arguments were supplied, but they are invalid. We'll handle
                // this case gracefully by listing valid arguments to the user.
                ShowUsage();
            }
        }

        static void ShowUsage()
        {
            Console.WriteLine($"Usage: dotnet dev275x.rollcall.dll (-a | -r | -c | +WORD | ?WORD)");
        }
    }
}