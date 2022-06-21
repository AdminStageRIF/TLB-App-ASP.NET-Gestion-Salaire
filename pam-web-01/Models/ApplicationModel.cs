using pam_metier_simule.metier.entites;
using pam_metier_simule.metier.service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace pam_web_01.Models
{
    public class ApplicationModel
    {
        public Employe[] Employes { get; set; }
        public IPamMetier PamMetier { get; set; }
        public SelectListItem[] EmployesItems { get; set; }
    }
}