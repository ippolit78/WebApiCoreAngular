using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using coreAngApp.Models;

namespace coreAngApp.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {        
        [HttpGet]
        public IEnumerable<TestEntitty> GetAll()
        {
            var list = new List<TestEntitty>();
            list.Add(new TestEntitty() { Name = "Lilly", Description = "First entity", Count = 13 });
            list.Add(new TestEntitty() { Name = "Lucy", Description = "Second entity", Count = 14 });
            return list;
        }

        [HttpGet("{name}")]
        public TestEntitty Get(string name)
        {
            return new TestEntitty() { Name = name };
        }

        [HttpPost]
        public TestEntitty Insert([FromBody]TestEntitty testEntitty)
        {
            return testEntitty;
        }

        [HttpPut("{name}")]
        public TestEntitty Update(string name, [FromBody]TestEntitty testEntitty)
        {
            testEntitty.Name = name;

            return testEntitty;
        }

        [HttpDelete("{name}")]
        public void Delete(string name)
        {
        }
    }
}