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
    public class Api_BangLuongController : ApiController
    {
        private ERP_DATABASEEntities db = new ERP_DATABASEEntities();

        // GET: api/Api_BangLuong
        public List<CCTC_BANG_LUONG> GetCCTC_BANG_LUONG(string id)
        {
            var vData = db.CCTC_BANG_LUONG.Where(x => x.USERNAME == id);
            var result = vData.ToList().Select(x => new CCTC_BANG_LUONG()
            {
                THANG_LUONG = x.THANG_LUONG,
                USERNAME = x.USERNAME,
                LUONG_CO_BAN = x.LUONG_CO_BAN,
                LUONG_BAO_HIEM = x.LUONG_BAO_HIEM,
                PHU_CAP_AN_TRUA = x.PHU_CAP_AN_TRUA,
                PHU_CAP_DI_LAI_DIEN_THOAI = x.PHU_CAP_DI_LAI_DIEN_THOAI,
                PHU_CAP_THUONG_DOANH_SO = x.PHU_CAP_THUONG_DOANH_SO,
                PHU_CAP_TRACH_NHIEM = x.PHU_CAP_TRACH_NHIEM,
                CONG_CO_BAN = x.CONG_CO_BAN,
                LUONG_CO_BAN_NGAY = x.LUONG_CO_BAN_NGAY,
                LUONG_CO_BAN_GIO = x.LUONG_CO_BAN_GIO,
                BAO_HIEM_CONG_TY_DONG = x.BAO_HIEM_CONG_TY_DONG,
                BAO_HIEM_NHAN_VIEN_DONG = x.BAO_HIEM_NHAN_VIEN_DONG,
                LUONG_THUC_TE_CONG_LAM_THUC = x.LUONG_THUC_TE_CONG_LAM_THUC,
                LUONG_THUC_TE_SO_TIEN = x.LUONG_THUC_TE_SO_TIEN,
                LUONG_LAM_THEM_CONG_NGAY_THUONG = x.LUONG_LAM_THEM_CONG_NGAY_THUONG,
                LUONG_LAM_THEM_TIEN_CONG_NGAY_THUONG = x.LUONG_LAM_THEM_TIEN_CONG_NGAY_THUONG,
                LUONG_LAM_THEM_CONG_NGAY_NGHI = x.LUONG_LAM_THEM_CONG_NGAY_NGHI,
                LUONG_LAM_THEM_TIEN_CONG_NGAY_NGHI = x.LUONG_LAM_THEM_TIEN_CONG_NGAY_NGHI,
                LUONG_LAM_THEM_CONG_NGAY_LE = x.LUONG_LAM_THEM_CONG_NGAY_LE,
                LUONG_LAM_THEM_TIEN_CONG_NGAY_LE = x.LUONG_LAM_THEM_TIEN_CONG_NGAY_LE,
                TONG_THU_NHAP = x.TONG_THU_NHAP,
                TAM_UNG = x.TAM_UNG,
                VAY_TIN_DUNG = x.VAY_TIN_DUNG,
                GIO_DI_TRE = x.GIO_DI_TRE,
                PHAT_DI_TRE = x.PHAT_DI_TRE,
                CONG_DOAN = x.CONG_DOAN,
                LUONG_LAO_CONG = x.LUONG_LAO_CONG,
                THUC_LINH = x.THUC_LINH,
            }).ToList();
            return result;
        }

        // GET: api/Api_BangLuong/5
        [ResponseType(typeof(CCTC_BANG_LUONG))]
        public IHttpActionResult GetCCTC_BANG_LUONG()
        {
            CCTC_BANG_LUONG cCTC_BANG_LUONG = db.CCTC_BANG_LUONG.Find();
            if (cCTC_BANG_LUONG == null)
            {
                return NotFound();
            }

            return Ok(cCTC_BANG_LUONG);
        }

        // PUT: api/Api_BangLuong/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCCTC_BANG_LUONG(string id, CCTC_BANG_LUONG cCTC_BANG_LUONG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cCTC_BANG_LUONG.THANG_LUONG)
            {
                return BadRequest();
            }

            db.Entry(cCTC_BANG_LUONG).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CCTC_BANG_LUONGExists(id))
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

        // POST: api/Api_BangLuong
        [ResponseType(typeof(CCTC_BANG_LUONG))]
        public IHttpActionResult PostCCTC_BANG_LUONG(CCTC_BANG_LUONG cCTC_BANG_LUONG)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CCTC_BANG_LUONG.Add(cCTC_BANG_LUONG);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CCTC_BANG_LUONGExists(cCTC_BANG_LUONG.THANG_LUONG))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = cCTC_BANG_LUONG.THANG_LUONG }, cCTC_BANG_LUONG);
        }

        // DELETE: api/Api_BangLuong/5
        [ResponseType(typeof(CCTC_BANG_LUONG))]
        public IHttpActionResult DeleteCCTC_BANG_LUONG(string id)
        {
            CCTC_BANG_LUONG cCTC_BANG_LUONG = db.CCTC_BANG_LUONG.Find(id);
            if (cCTC_BANG_LUONG == null)
            {
                return NotFound();
            }

            db.CCTC_BANG_LUONG.Remove(cCTC_BANG_LUONG);
            db.SaveChanges();

            return Ok(cCTC_BANG_LUONG);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CCTC_BANG_LUONGExists(string id)
        {
            return db.CCTC_BANG_LUONG.Count(e => e.THANG_LUONG == id) > 0;
        }
    }
}