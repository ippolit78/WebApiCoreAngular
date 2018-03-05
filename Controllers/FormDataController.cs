using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using coreAngApp.Models;

namespace coreAngApp.Controllers
{
    [Route("api/[controller]")]
    public class FormDataController : Controller
    {        
        [HttpPost]
        public JsonResult Insert([FromForm]TestEntitty testEntitty)
        {
            return Json(testEntitty.ToString());
        }
    }
}