using DotNetReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DotNetReact.APIControllers
{
    [RoutePrefix("api/{controller}/{action}")]
    public class APIController : ApiController
    {
        public IHttpActionResult GetPerson()
        {
            Person p = new Person { firstname = "Johnny", lastname = "Doe" };
            return Ok(p);
        }

        public IHttpActionResult  PostPerson(Person p) 
        {
            var fnameArray = p.firstname.ToCharArray();
            Array.Reverse(fnameArray);
            p.firstname = new String(fnameArray);

            return Ok(p);
        }
    }
}
