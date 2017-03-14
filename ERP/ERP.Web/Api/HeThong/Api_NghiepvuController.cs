using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ERP.Web.Models.Database;

namespace ERP.Web.Areas.HopLong.Api.HeThong
{
    public class Api_NghiepvuController : ApiController
    {
        private ERP_DATABASEEntities db = new ERP_DATABASEEntities();

        // GET: api/Api_NghiepvuHL
        public List<CN_NGHIEP_VU> GetDS_NghiepVu()
        {
            var vData = db.CN_NGHIEP_VU.Where(x => x.TRUC_THUOC == "HOPLONG"  );
            var result = vData.ToList().Select(x => new CN_NGHIEP_VU()
            {
                ID = x.ID,
                TEN_NGHIEP_VU = x.TEN_NGHIEP_VU
            }).ToList();
            return result;
        }
        
    }
}