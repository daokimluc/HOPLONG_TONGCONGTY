//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ERP.Web.Models.Database
{
    using System;
    using System.Collections.Generic;
    
    public partial class HT_LICH_SU_DANG_NHAP
    {
        public int ID { get; set; }
        public string USERNAME { get; set; }
        public string THOI_GIAN_DANG_NHAP { get; set; }
        public string THOI_GIAN_DANG_XUAT { get; set; }
    
        public virtual HT_NGUOI_DUNG HT_NGUOI_DUNG { get; set; }
    }
}