using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text.Json;

namespace DotNetReact.Controllers
{
    public class ReactController : Controller
    {
        // GET: React
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetHello() 
        {
            Person p = new Person { Name = "Hero" };
            return  Json(p, JsonRequestBehavior.AllowGet);
        }
    }

    public class Person 
    { 
        public string Name { get; set; }
    }
}