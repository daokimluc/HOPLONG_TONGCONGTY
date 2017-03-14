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

namespace ERP.Web.Api.HeThong
{
    public class Api_BangChamCongController : ApiController
    {
        private ERP_DATABASEEntities db = new ERP_DATABASEEntities();

        // GET: api/Api_BangChamCong
        public List<CCTC_BANG_CHAM_CONG> GetCCTC_BANG_CHAM_CONG(string id)
        {
            var vData = db.CCTC_BANG_CHAM_CONG.Where(x => x.USERNAME == id);
            var result = vData.ToList().Select(x => new CCTC_BANG_CHAM_CONG()
            {
                THANG_CHAM_CONG = x.THANG_CHAM_CONG,
                NGAY_CHUAN = x.NGAY_CHUAN,
                USERNAME = x.USERNAME,
                GIO_DI_MUON = x.GIO_VE_SOM,
                GIO_VE_SOM = x.GIO_VE_SOM,
                TANG_CA_NGAY_THUONG = x.TANG_CA_NGAY_THUONG,
                TANG_CA_NGAY_LE = x.TANG_CA_NGAY_LE,
                SO_LAN_QUEN_CHAM = x.SO_LAN_QUEN_CHAM,
                SO_NGAY_NGHI = x.SO_NGAY_NGHI,
                CONG_THUC_TE = x.CONG_THUC_TE,
                VAY_TIN_DUNG = x.VAY_TIN_DUNG,
                UNG_LUONG = x.UNG_LUONG,
                GHI_CHU = x.GHI_CHU,
            }).ToList();
            return result;
        }

        // GET: api/Api_BangChamCong/5
        [ResponseType(typeof(CCTC_BANG_CHAM_CONG))]
        public IHttpActionResult GetCCTC_BANG_CHAM_CONG()
        {
            CCTC_BANG_CHAM_CONG cCTC_BANG_CHAM_CONG = db.CCTC_BANG_CHAM_CONG.Find();
            if (cCTC_BANG_CHAM_CONG == null)
            {
                return NotFound();
            }

            return Ok(cCTC_BANG_CHAM_CONG);
        }

        // PUT: api/Api_BangChamCong/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCCTC_BANG_CHAM_CONG(string id, CCTC_BANG_CHAM_CONG cCTC_BANG_CHAM_CONG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cCTC_BANG_CHAM_CONG.THANG_CHAM_CONG)
            {
                return BadRequest();
            }

            db.Entry(cCTC_BANG_CHAM_CONG).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CCTC_BANG_CHAM_CONGExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Api_BangChamCong
        [ResponseType(typeof(CCTC_BANG_CHAM_CONG))]
        public IHttpActionResult PostCCTC_BANG_CHAM_CONG(CCTC_BANG_CHAM_CONG cCTC_BANG_CHAM_CONG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CCTC_BANG_CHAM_CONG.Add(cCTC_BANG_CHAM_CONG);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CCTC_BANG_CHAM_CONGExists(cCTC_BANG_CHAM_CONG.THANG_CHAM_CONG))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = cCTC_BANG_CHAM_CONG.THANG_CHAM_CONG }, cCTC_BANG_CHAM_CONG);
        }

        // DELETE: api/Api_BangChamCong/5
        [ResponseType(typeof(CCTC_BANG_CHAM_CONG))]
        public IHttpActionResult DeleteCCTC_BANG_CHAM_CONG(string id)
        {
            CCTC_BANG_CHAM_CONG cCTC_BANG_CHAM_CONG = db.CCTC_BANG_CHAM_CONG.Find(id);
            if (cCTC_BANG_CHAM_CONG == null)
            {
                return NotFound();
            }

            db.CCTC_BANG_CHAM_CONG.Remove(cCTC_BANG_CHAM_CONG);
            db.SaveChanges();

            return Ok(cCTC_BANG_CHAM_CONG);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CCTC_BANG_CHAM_CONGExists(string id)
        {
            return db.CCTC_BANG_CHAM_CONG.Count(e => e.THANG_CHAM_CONG == id) > 0;
        }
    }
}