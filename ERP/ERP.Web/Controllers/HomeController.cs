using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ERP.Web.Models;
using ERP.Web.Models.Database;
using System.Net;
using System.IO;

namespace ERP.Web.Controllers
{

    
    public class HomeController : Controller

    {
        ERP_DATABASEEntities db = new ERP_DATABASEEntities();
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }


        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            POST pOST = db.POSTS.Find(id);
            if (pOST == null)
            {
                return HttpNotFound();
            }
            return View(pOST);
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(String username, String password)
        {
            var user = db.HT_NGUOI_DUNG.SingleOrDefault(x => x.USERNAME == username && x.PASSWORD == password && x.ALLOWED == true);
            if (user != null)
            {


                
                Session["USERNAME"] = user.USERNAME;
                Session["PASSWORD"] = user.PASSWORD;
                Session["MA_PHONG_BAN"] = user.CCTC_NHAN_VIEN.MA_PHONG_BAN;
                Session["HO_VA_TEN"] = user.HO_VA_TEN;
                Session["ALLOWED"] = user.ALLOWED;
                Session["IS_AMIN"] = user.IS_ADMIN;
                Session["AVATAR"] = user.AVATAR;
                Session["MA_CONG_TY"] = user.MA_CONG_TY;
                Session["LOAI_USER"] = user.CCTC_CONG_TY.CAP_TO_CHUC;
                
                    return RedirectToAction("Index","Home");
               
                


            }
            ViewBag.error = "Wrong username or password";
            return View();
        }

        public ActionResult Logout()
        {
            
            Session["USERNAME"] = null;
            Session["HO_VA_TEN"] = null;
            Session["IS_AMIN"] = null;
            Session["AVATAR"] = null;
            Session["MA_CONG_TY"] = null;
            Session["LOAI_USER"] = null;
            return RedirectToAction("Login");
        }
        public ActionResult NotificationAuthorize()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public void FileUpload(IEnumerable<HttpPostedFileBase> files)
        {
            if (files != null)
            {
                foreach (var file in files)
                {
                    // Verify that the user selected a file
                    if (file != null && file.ContentLength > 0)
                    {
                        // extract only the fielname
                        var fileName = Path.GetFileName(file.FileName);
                        // TODO: need to define destination
                        var path = Path.Combine(Server.MapPath("~/Content/BaiViet"), fileName);
                        file.SaveAs(path);
                    }
                }
            }
        }

        public ActionResult FileUpload()
        {
            return View();
        }
    }
}
