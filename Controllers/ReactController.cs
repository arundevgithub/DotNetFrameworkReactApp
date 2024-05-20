using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text.Json;
using DotNetReact.Models;
using Microsoft.Ajax.Utilities;
using Microsoft.ClearScript;

namespace DotNetReact.Controllers
{
    public class ReactController : Controller
    {
        // GET: React
        public ActionResult Index()
        {
            return View();
        }

    }

}