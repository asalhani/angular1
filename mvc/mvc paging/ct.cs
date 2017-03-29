using System.Collections.Generic;
using System.Web.Mvc;
using X.PagedList;  


  public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
	
	 List<Student> students = PrepareStudents();

        public ActionResult Index(int? page = 1, int? pageSize = 10)
        {
            var students = PrepareStudents(); //returns IQueryable<Product> representing an unknown number of products. a thousand maybe?

            var pageNumber = page ?? 1; // if no page was specified in the querystring, default to the first page (1)
            var onePageOfStudents = students.ToPagedList(pageNumber, 5); // will only contain 25 products max because of the pageSize

            ViewBag.OnePageOfStudents = onePageOfStudents;
            return View();
        }