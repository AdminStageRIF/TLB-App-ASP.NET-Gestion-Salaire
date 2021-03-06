using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pam_metier_simule.metier.entites
{
    public class FeuilleSalaire
    {
        public Employe Employe { get; set; }
        public Cotisations Cotisations { get; set; }
        public ElementsSalaire ElementsSalaire { get; set; }
        public override string ToString()
        {
            return string.Format("[{0},{1},{2}]", Employe, Cotisations, ElementsSalaire);
        }
    }
}
