using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pam_metier_simule.metier.entites
{
    public class ElementsSalaire
    {
        public double SalaireBase { get; set; }
        public double CotisationsSociales { get; set; }
        public double IndemnitesEntretien { get; set; }
        public double IndemnitesRepas { get; set; }
        public double SalaireNet { get; set; }
        public override string ToString()
        {
            return string.Format("[{0} : {1} : {2} : {3} : {4} ]", SalaireBase, CotisationsSociales, IndemnitesEntretien, IndemnitesRepas, SalaireNet);
        }
    }
}
