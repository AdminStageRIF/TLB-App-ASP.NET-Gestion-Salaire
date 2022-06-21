using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace pam_web_01.Controllers
{
    public class PamController : Controller
    {
        [HttpGet]
        public ViewResult Index()
        {
            return View();
        }
        [HttpPost]
        public PartialViewResult FaireSimulation()
        {
            return PartialView("Simulation");
        }
        [HttpPost]
        public PartialViewResult EnregistrerSimulation()
        {
            return PartialView("Simulations");
        }
        [HttpPost]
        public PartialViewResult VoirSimulation()
        {
            return PartialView("Simulations");
        }
        [HttpPost]
        public PartialViewResult RetourFormulaire()
        {
            return PartialView("Formulaire");
        }
        public PartialViewResult TerminerSession()
        {
            return PartialView("Formulaire");
        }
    }
}