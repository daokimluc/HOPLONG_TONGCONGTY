﻿app.controller('giamdocCtrl', function (giamdocService, $scope) {
    $scope.push = function (username) {
        giamdocService.get_giamdoc(username).then(function (a) {
            $scope.listgiamdoc = a;
        });
    };
});

app.controller('hanghoaCtrl', function (hanghoaService, $scope) {
    $scope.loadHangHoa = function () {
        hanghoaService.get_hanghoa().then(function (d) {
            $scope.danhsachhanghoa = d;
        });
        hanghoaService.get_nhomhang().then(function (a) {
            $scope.danhsachnhomhang = a;
        });
    };
    $scope.loadQuanTam = function () {
        var quantam = $('#userquantam').val();
        hanghoaService.get_quantam(quantam).then(function (z) {
            $scope.danhsachquantam = z;
        });
    }
    $scope.loadQuanTam();
    $scope.loadHangHoa();
    

    $scope.add = function () {
        $("textarea[name=thongso]").val(CKEDITOR.instances.thongso.getData());
        $("textarea[name=donggoi]").val(CKEDITOR.instances.donggoi.getData());
        var thongso = $("[name=thongso]").val();
        var donggoi = $("[name=donggoi]").val();
        var data_add = {
            MA_HANG: $scope.mahang,
            TEN_HANG: $scope.tenhang,
            MA_NHOM_HANG: $scope.manhomhang,
            KHOI_LUONG: $sopce.khoiluong,
            XUAT_XU: $scope.xuatxu,
            THONG_SO_KY_THUAT: thongso,
            QUY_CACH_DONG_GOI: donggoi,
            BAO_HANH : $scope.baohanh,
            DON_VI_TINH: $scope.donvitinh,
            HINH_ANH: $scope.hinhanh,
            GHI_CHU: NoiDungTextArea,
            TK_HACH_TOAN_KHO: $scope.tkhachtoankho,
            TK_DOANH_THU: $scope.tkdoanhthu,
            TK_CHI_PHI: $scope.tkchiphi
        }
        hanghoaService.add(data_add).then(function (response) {
            $scope.loadHangHoa();
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;
        var donggoivalue = $('.' + item.MA_HANG + '-1').html();
        CKEDITOR.instances.editdonggoi.setData(donggoivalue);
        var thongsovalue = $('.' + item.MA_HANG + '-2').html();
        CKEDITOR.instances.editthongso.setData(thongsovalue);
    }

    $scope.save = function (mahang) {
        $("textarea[name=editthongso]").val(CKEDITOR.instances.editthongso.getData());
        $("textarea[name=editdonggoi]").val(CKEDITOR.instances.editdonggoi.getData());
        var thongso = $("[name=editthongso]").val();
        var donggoi = $("[name=editdonggoi]").val();
        var data_update = {
            MA_HANG: $scope.item.MA_HANG,
            TEN_HANG: $scope.item.TEN_HANG,
            MA_NHOM_HANG: $scope.item.MA_NHOM_HANG,
            KHOI_LUONG: $scope.item.KHOI_LUONG,
            XUAT_XU: $scope.item.XUAT_XU,
            THONG_SO_KY_THUAT: thongso,
            QUY_CACH_DONG_GOI: donggoi,
            BAO_HANH: $scope.item.BAO_HANH,
            DON_VI_TINH: $scope.item.DON_VI_TINH,
            HINH_ANH: $scope.item.HINH_ANH,
            GHI_CHU: $scope.item.GHI_CHU,
            TK_HACH_TOAN_KHO: $scope.item.TK_HACH_TOAN_KHO,
            TK_DOANH_THU: $scope.item.TK_DOANH_THU,
            TK_CHI_PHI: $scope.item.TK_CHI_PHI
        }
        hanghoaService.save(mahang, data_update).then(function (response) {
            $scope.loadHangHoa();
        });
    }

    $scope.delete = function (mahang) {
        var data_delete = {
            MA_HANG: mahang
        }
        hanghoaService.delete(mahang, data_delete).then(function (response) {
            $scope.loadHangHoa();
        });
    };
    $scope.get_tonkho = function (id) {
        hanghoaService.get_hangtonkho(id).then(function (a) {
            $scope.danhsachtonkho = a;
        });
    };
    $scope.get_tonkho();
    $scope.getTotal = function (type) {
        var total = 0;
        angular.forEach($scope.danhsachtonkho, function (el) {
            total += el[type];
        });
        return total;
    };
    
});



app.controller('NhomvthhCtrl', function (NhomvthhService, $scope) {
    $scope.loadHangSP = function () {
        NhomvthhService.get_hangsp().then(function (a) {
            $scope.danhsachsp = a;
        });
    };
    $scope.loadHangSP();
    $scope.add = function () {
        var data_add = {
            MA_NHOM_HANG_CHI_TIET: $scope.manhomhangchitiet,
            CHUNG_LOAI_HANG: $scope.chungloaihang,
            MA_NHOM_HANG_CHA: $scope.manhomhangcha,
            GHI_CHU: $scope.ghichu
            
        }
        NhomvthhService.add(data_add).then(function (response) {
            $scope.loadHangSP();
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;

    }
    $scope.passing = function (item) {
        $scope.item = item;
    }

    $scope.save = function (hangsp) {
        var data_update = {
            MA_NHOM_HANG_CHI_TIET: $scope.item.MA_NHOM_HANG_CHI_TIET,
            CHUNG_LOAI_HANG: $scope.item.CHUNG_LOAI_HANG,
            MA_NHOM_HANG_CHA: $scope.item.MA_NHOM_HANG_CHA,
            GHI_CHU: $scope.item.GHI_CHU
          
        }
        NhomvthhService.save(hangsp, data_update).then(function (response) {
            $scope.loadHangHoa();
        });
    }

    $scope.delete = function (hangsp) {
        var data_delete = {
            MA_NHOM_HANG_CHI_TIET: hangsp
        }
        NhomvthhService.delete(hangsp, data_delete).then(function (response) {
            $scope.loadHangSP();
        });
    };

    $scope.whatclass = function (somevalue) {
        if (somevalue != null) {
            return "text-center"
        }
    };
});

app.controller('khoCtrl', function (khoService, $scope) {
    $scope.loadKho = function () {
        khoService.get_kho().then(function (a) {
            $scope.danhsachkho = a;
        });
    };
    $scope.loadKho();

    $scope.add = function () {
        var data_add = {
            MA_KHO: $scope.ma_kho,
            TEN_KHO: $scope.ten_kho,
            DIA_CHI_KHO: $scope.dia_chi,
            MA_KHO_CHA: $scope.ma_kho_cha,
            TRUC_THUOC: "HOPLONG",
            GHI_CHU: $scope.ghi_chu,
        }
        khoService.add(data_add).then(function (response) {
            $scope.loadKho();
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;
    }

    $scope.save = function (makho) {
        var data_update = {
            MA_KHO: $scope.item.MA_KHO,
            TEN_KHO: $scope.item.TEN_KHO,
            DIA_CHI_KHO: $scope.item.DIA_CHI_KHO,
            MA_KHO_CHA: $scope.item.MA_KHO_CHA,
            TRUC_THUOC: "HOPLONG",
            GHI_CHU: $scope.item.GHI_CHU,
        }
        khoService.save(makho, data_update).then(function (response) {
            $scope.loadKho();
        });
    }

    $scope.delete = function (makho) {
        var data_delete = {
            MA_KHO: makho
        }
        khoService.delete(makho, data_delete).then(function (response) {
            $scope.loadKho();
        });
    };
});

app.controller('userCtrl', function (userService, $scope) {
    $scope.loadUser = function () {
        userService.get_user().then(function (a) {
            $scope.danhsachuser = a;
        });
    };


    $scope.loadUser();


    $scope.add = function () {
        $("textarea[name=thanhtich]").val(CKEDITOR.instances.thanhtich.getData());
        var thanhtich = $("[name=thanhtich]").val();
        var data_add = {
            USERNAME: $scope.username,
            PASSWORD: $scope.password,
            HO_VA_TEN: $scope.hovaten,
            SDT: $scope.sdt,
            EMAIL: $scope.email,
            IS_ADMIN: $scope.admin,
            ALLOWED: $scope.allowed,
            MA_CONG_TY: "HOPLONG",
        }
        userService.add(data_add).then(function (response) {
            $scope.loadUser();
            var nhanvien_add = {
                USERNAME: $scope.username,
                GIOI_TINH: $scope.gioitinh,
                NGAY_SINH: $scope.ngaysinh,
                QUE_QUAN: $scope.quequan,
                THANH_TICH_CONG_TAC : thanhtich,
                TRINH_DO_HOC_VAN: $scope.trinhdohocvan,
                MA_PHONG_BAN: $scope.maphongban
            }
            userService.add_nhanvien(nhanvien_add).then(function (response) {
                $scope.loadUser();
            });
        });
    }

    $scope.edit = function (item) {
        $scope.item = item;
    }

    $scope.transfer = function (nv) {
        $scope.nv = nv;
    }

    $scope.update_nv = function (nv) {
        $scope.nv = nv;
        var thanhtichvalue = $('.' + nv.USERNAME + '-1').html();
        CKEDITOR.instances.editthanhtich.setData(thanhtichvalue);
    }

    $scope.save = function (username) {
        $("textarea[name=editthanhtich]").val(CKEDITOR.instances.editthanhtich.getData());
        var editthanhtich = $("[name=editthanhtich]").val();
        var data_update = {
            ID: username,
            USERNAME: $scope.nv.USERNAME,
            PASSWORD: $scope.nv.PASSWORD,
            HO_VA_TEN: $scope.nv.HO_VA_TEN,
            SDT: $scope.nv.SDT,
            EMAIL: $scope.nv.EMAIL,
            IS_ADMIN: $scope.nv.IS_ADMIN,
            ALLOWED: $scope.nv.ALLOWED,
            MA_CONG_TY: "HOPLONG",
        }
        userService.save(username, data_update).then(function (response) {
            $scope.loadUser();
            var nhanvien_update = {
                USERNAME: $scope.nv.USERNAME,
                GIOI_TINH: $scope.nv.GIOI_TINH,
                NGAY_SINH: $scope.nv.NGAY_SINH,
                QUE_QUAN: $scope.nv.QUE_QUAN,
                THANH_TICH_CONG_TAC: editthanhtich,
                TRINH_DO_HOC_VAN: $scope.nv.TRINH_DO_HOC_VAN,
                MA_PHONG_BAN: $scope.nv.MA_PHONG_BAN
            }
            userService.save_nhanvien(username, nhanvien_update).then(function (response) {
                $scope.loadUser();
            });
        });
    };
});

app.controller('nhanvienCtrl', function (nhanvienService, $scope) {
    $scope.get_nhanvien = function (username) {
        nhanvienService.get_nhanvien(username).then(function (d) {
            $scope.nhanvien = d;
        });
    };
});

app.controller('phongbanCtrl', function (phongbanService, $scope) {
    $scope.loadPhongban = function () {
        phongbanService.get_phongban().then(function (a) {
            $scope.danhsachphongban = a;
        });
    };

    $scope.loadPhongban();


    $scope.pass = function (nhanvien) {
        $scope.nhanvien = nhanvien;
    }


    $scope.edit = function (item) {
        $scope.item = item;
    }


    $scope.save = function (maphongban) {
        var data_update = {
            MA_PHONG_BAN: maphongban,
            TEN_PHONG_BAN: $scope.item.TEN_PHONG_BAN,
            SDT: $scope.item.SDT,
            MA_CONG_TY: "HOPLONG",
            GHI_CHU: $scope.item.GHI_CHU,
        }
        phongbanService.save(maphongban, data_update).then(function (response) {
            $scope.loadPhongban();
        });
    };

    $scope.delete = function (maphongban) {
        var data_delete = {
            MA_PHONG_BAN: maphongban,
        }
        phongbanService.delete(maphongban).then(function (response) {
            $scope.loadPhongban();
        });
    };
});

app.controller('nhanvienphongbanCtrl', function (nhanvienphongbanService, $scope) {
    $scope.get_listnhanvien = function (maphongban) {
        nhanvienphongbanService.get_nhanvien(maphongban).then(function (d) {
            $scope.listnhanvien = d;
        });
    };
});

app.controller('taikhoanCtrl', function (taikhoanService, $scope) {
    $scope.loadTaikhoan = function () {
        taikhoanService.get_taikhoan().then(function (a) {
            $scope.danhsachtk = a;
        });
    };

    $scope.loadTaikhoan();

    $scope.whatclass = function (somevalue) {
        if (somevalue != null) {
            return "text-center"
        }
    };

    $scope.edit = function (item) {
        $scope.item = item;
    };

    $scope.add = function () {
        var data_add = {
            SO_TK: $scope.stk,
            TEN_TK: $scope.tentaikhoan,
            TINH_CHAT: $scope.tinhchat,
            TEN_TA: $scope.tentienganh,
            TK_CAP_CHA: $scope.tk_capcha,
            DIEN_GIAI: $scope.diengiai,
        }
        taikhoanService.add(data_add).then(function (response) {
            $scope.loadTaikhoan();
        });
    };

    $scope.save = function (sotk) {
        var data_update = {
            SO_TK: sotk,
            TEN_TK: $scope.item.TEN_TK,
            TINH_CHAT: $scope.item.TINH_CHAT,
            TEN_TA: $scope.item.TEN_TA,
            TK_CAP_CHA: $scope.item.TK_CAP_CHA,
            DIEN_GIAI: $scope.item.DIEN_GIAI,
        }
        taikhoanService.save(sotk, data_update).then(function (response) {
            $scope.loadTaikhoan();
        });
    };

    $scope.delete = function (sotk) {
        var data_delete = {
            SO_TK : sotk
        }

        taikhoanService.delete(sotk).then(function (response) {
            $scope.loadTaikhoan();
        });
    };
});

app.controller('danhmucCtrl', function (danhmucService, $scope) {
    $scope.loadDanhMuc = function () {
        danhmucService.get_danhmuc().then(function (a) {
            $scope.danhsachdanhmuc = a;
        });
    };

    $scope.transfer = function (madanhmuc) {
        danhmucService.get_post(madanhmuc).then(function (z) {
            $scope.listpost = z;
        });
    };

    $scope.loadDanhMuc();
    $scope.checked_fruits = [];
    
    $scope.save = function () {
        var a = $('#imgInp').val();
        var name_without_ext = (a.split('\\').pop().split('/').pop().split())[0];
        $("textarea[name=noidung]").val(CKEDITOR.instances.noidung.getData());
        var danhmuc = $("[name=noidung]").val();
        var username = $('#username').val();
        var data_add = {
            TIEU_DE_BAI_VIET: $scope.tieude,
            NOI_DUNG_BAI_VIET: danhmuc,
            ANH_BAI_VIET: name_without_ext,
            NGUOI_DANG_BAI: username,
        }
        danhmucService.add_danhmuc(data_add).then(function (response) {


            var postcate = {
                tieu_de_bai_viet: $scope.tieude,
                ma_danh_muc: $scope.checked_fruits[0]
            }
            danhmucService.add_postcategories(postcate).then(function (response) {
                $scope.loadDanhMuc();
            });
        });
    };
});


app.controller('imgCtrl', function ($scope) {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    

    $("#imgInp").change(function () {
        readURL(this);
    });
    
});

app.controller('menuCtrl', function (menuService,$scope) {
    $scope.load_menu = function () {
        var username = $('#username').val();
        menuService.get_menu(username).then(function (a) {
            $scope.danhsachmenu = a;
        });
    };
    $scope.load_menu();

    $scope.edit = function (menucha) {
        var username = $('#username').val();
        menuService.get_menucha(username,menucha).then(function (a) {
            $scope.danhsachmenucha = a;
        });
    };
    
    $scope.push = function (zzz) {
        var username = $('#username').val();
        menuService.get_listmenucha(username, zzz).then(function (z) {
            $scope.listmenu = z;
        });
    };

    $scope.treeview = function () {
        return ('treeview');
    }

    $scope.fa = function () {
        return ('fa mini-icon fa-pie-chart')
    };

    $scope.pullright = function(){
        return ('pull-right-container');
    }

    $scope.fapullright = function () {
        return ('fa fa-angle-left pull-right');
    };

    var maphongban = $('#maphongban').val();
    var username = $('#username').val();

    $scope.get = function (tendangnhap) {
        var username = $('#username').val();
        if (tendangnhap == username) {
            return ('hienthi');
        } else {
            return ('bienmat');
        }
    };

    $scope.check = function (trangthai) {
        if (trangthai == true) {
            return ('hienthi');
        } else {
            return ('bienmat');
        }
    };

    $scope.click = function (abc,item) {
        var maphongban = $('#maphongban').val();
        var username = $('#username').val();
        $scope.item = item;
        var a = $scope.item.TRANG_THAI;
        var data_save = {
            MA_PHONG_BAN: maphongban,
            USERNAME: username,
            TRANG_THAI: a,
            MA_MENU : abc
        }
        menuService.save_menu(maphongban,username,abc,data_save).then(function (response) {
            $scope.load_menu();
        });
    }
});

app.controller('userdetailCtrl', function (userdetailService,$scope) {
    $scope.load_userdetails = function () {
        var username = $('#username').val();
        userdetailService.get_details(username).then(function (a) {
            $scope.list_details = a;
        });
    };
    $scope.load_nguoidungdetails = function (id) {
        
        userdetailService.get_details(id).then(function (a) {
            $scope.list_details = a;
        });
    };

    $scope.loadUser = function () {
        userdetailService.get_user().then(function (a) {
            $scope.danhsachuser = a;
        });
    };



    $scope.load_userdetails();

    $scope.changepw = function () {
        var username = $('#username').val();
        var oldpw = $scope.oldpw;
        var newpw = $scope.newpw;

        var data_save = {
            PASSWORD: newpw
        }
        userdetailService.save_pw(username, oldpw, data_save).then(function (response) {
            $scope.loadUser();
            $scope.load_userdetails();
            $scope.oldpw = '';
            $scope.newpw = '';
            $('.successful').css('display', 'block');
            $window.sessionStorage["windowKey"] = null;
        });

    };
    
    
});

app.controller('bangchamcongCtrl', function (bangchamcongService, $scope) {
    $scope.load_chamcong = function () {
        var username = $('#username').val();
        bangchamcongService.get_chamcong(username).then(function (a) {
            $scope.list_chamcong = a;
        });
    };
    $scope.load_chamcong();
});

app.controller('bangluongCtrl', function (bangluongService, $scope) {
    $scope.load_bangluong = function () {
        var username = $('#username').val();
        bangluongService.get_bangluong(username).then(function (a) {
            $scope.list_bangluong = a;
        });
    };
    $scope.load_bangluong();
});

app.controller('addmenuCtrl', function (addmenuService,menuService ,$scope) {
    $scope.load_menu = function () {
        addmenuService.get_menu().then(function (a) {
            $scope.dsmenu = a;
        });
    };
    $scope.load_menu();

    $scope.add = function () {
        var data_add = {
            MA_MENU: $scope.ma_menu,
            TEN_MENU: $scope.ten_menu,
            LINK: $scope.link_menu,
            MENU_CHA : $scope.menu_cha
        }
        addmenuService.add_menu(data_add).then(function (response) {
            $scope.load_menu();
        });
    }

    $scope.edit = function (menucha) {
        var username = $('#username').val();
        menuService.get_menucha(username, menucha).then(function (a) {
            $scope.danhsachmenucha = a;
        });
        $('#editbtn').show();
    };

    $scope.push = function (zzz) {
        var username = $('#username').val();
        menuService.get_listmenucha(username, zzz).then(function (z) {
            $scope.listmenu = z;
        });
    };

    $scope.send = function (abc) {
        $scope.newmodel = abc;
    };

    $scope.save = function (mamenu) {
        var data_save = {
            MA_MENU: mamenu,
            TEN_MENU: $scope.newmodel.TEN_MENU,
            LINK: $scope.newmodel.LINK,
            MENU_CHA : $scope.newmodel.MENU_CHA
        }
        addmenuService.save_menu(mamenu,data_save).then(function (response) {
            $scope.load_menu();
        });
    };

    $scope.delete = function (mamenu) {
        var data_delete = {
            MA_MENU : mamenu
        }
        addmenuService.delete_menu(mamenu,data_delete).then(function (response) {
            $scope.load_menu();
        });
    };
});

app.controller('tonghopnvCtrl', function (tonghopnvService,$scope) {
    $scope.load_tonghop = function () {
        tonghopnvService.get_tonghop().then(function (a) {
            $scope.listtonghop = a;
        });
    };
    $scope.load_tonghop();
});


app.controller('dsnghiepvuCtrl', function (dsnghiepvuService, $scope) {
    $scope.load_dsnghiepvu = function (id_menu) {

            //this gets the full url
            var url = document.location.href;
            //this removes the anchor at the end, if there is one
            url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
            //this removes the query after the file name, if there is one
            url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
            //this removes everything before the last slash in the path
            url = url.substring(url.lastIndexOf("/") + 1, url.length);
            //return
            console.log(url);
        
        var pathArray = window.location.pathname.split('/');
        dsnghiepvuService.get_dsnghiepvu(url).then(function (a) {
            $scope.dsnghiepvu = a;
        });
    };
    $scope.load_dsnghiepvu();
});

app.controller('chitietbaivietCtrl', function (chitietbaivietService,$scope) {
     $scope.checkid = function(){
        var username = $('#username').val();
        if (username == 'INTE002') {
            return "show";
        } else {
            return "notshow";
        }
     }
     $scope.checkid();

     $scope.load_chitietbaiviet = function () {

         //this gets the full url
         var url = document.location.href;
         //this removes the anchor at the end, if there is one
         url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
         //this removes the query after the file name, if there is one
         url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
         //this removes everything before the last slash in the path
         url = url.substring(url.lastIndexOf("/") + 1, url.length);
         //return
         var pathArray = window.location.pathname.split('/');
         chitietbaivietService.get_chitietbaiviet(url).then(function (a) {
             $scope.listchitiet = a;
         });
     };
     $scope.load_chitietbaiviet();

     $scope.edit = function (item) {
         $scope.item = item;
         var noidungvalue = $('.' + item.MA_BAI_VIET + '-1').html();
         CKEDITOR.instances.editnoidung.setData(noidungvalue);
     }

     $scope.save = function (mabaiviet) {
         $("textarea[name=editnoidung]").val(CKEDITOR.instances.editnoidung.getData());
         var editnoidung = $("[name=editnoidung]").val();
         var data_save = {
             MA_BAI_VIET: mabaiviet,
             NOI_DUNG_BAI_VIET: editnoidung,
             TIEU_DE_BAI_VIET: $scope.item.TIEU_DE_BAI_VIET,
         }
         chitietbaivietService.save(mabaiviet, data_save).then(function (response) {
             $scope.load_chitietbaiviet();
         });
     }
});









function reload() {
    location.reload();
}

function change() {
    $('.listmenu').toggle();
}

function accept() {
    $('.listmenu').css('display', 'none');
    reload();
}
app.directive('checkList', function () {
    return {
        scope: {
            list: '=checkList',
            value: '@'
        },
        link: function (scope, elem, attrs) {
            var handler = function (setup) {
                var checked = elem.prop('checked');
                var index = scope.list.indexOf(scope.value);

                if (checked && index == -1) {
                    if (setup) elem.prop('checked', false);
                    else scope.list.push(scope.value);
                } else if (!checked && index != -1) {
                    if (setup) elem.prop('checked', true);
                    else scope.list.splice(index, 1);
                }
            };

            var setupHandler = handler.bind(null, true);
            var changeHandler = handler.bind(null, false);

            elem.on('change', function () {
                scope.$apply(changeHandler);
            });
            scope.$watch('list', setupHandler, true);
        }
    };
});

app.filter('unsafe', function ($sce) { return $sce.trustAsHtml; });

app.filter('stringToDate', function ($filter) {
    return function (ele, dateFormat) {
        return $filter('date')(new Date(ele), dateFormat);
    }
})

function help(){
    $('.help').show();
    $('.nohelp').hide();
}
function nohelp() {
    $('.help').hide();
    $('.nohelp').show();
}


