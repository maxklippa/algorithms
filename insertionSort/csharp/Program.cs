using System;
using System.Linq;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var a = new[] { 1, 4, 3, 5, 2 };

            Console.WriteLine($"Input: {string.Join(", ", a)}");

            for (var j = 1; j < a.Length; j++)
            {
                var key = a[j];
                // добавить a[j] к отсортированной части a[1..j-1]
                var i = j - 1;
                while (i > 0 && a[i] > key)
                {
                    a[i + 1] = a[i];
                    i--;
                }
                a[i + 1] = key;
            }

            Console.WriteLine($"Input: {string.Join(", ", a)}");
        }
    }
}
