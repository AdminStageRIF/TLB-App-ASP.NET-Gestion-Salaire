using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pam_metier_simule.metier.entites
{
    public class PamException : Exception
    {
        public int Code { get; set; }
        public PamException()
        {
        }
        public PamException(int Code) : base()
        {
            this.Code = Code;
        }
        public PamException(string message, int Code) : base(message)
        {
            this.Code = Code;
        }
        public PamException(string message, Exception ex, int Code) : base(message, ex)
        {
            this.Code = Code;
        }
    }
}
