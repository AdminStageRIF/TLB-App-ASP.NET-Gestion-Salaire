using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using pam_metier_simule.metier.entites;

namespace pam_metier_simule.metier.service
{
    public interface IPamMetier
    {
        Employe[] GetAllIdentitesEmployes();
        FeuilleSalaire GetSalaire(string ss, double heuresTravaillées, int joursTravaillés);
    }
}
