app.controller('giamdocCtrl', function (giamdocService, $scope) {
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

    $scope.loadHangHoa();
    
    $scope.comments;
    $scope.add = function () {
        var data_add = {
            MA_HANG: $scope.mahang,
            TEN_HANG: $scope.tenhang,
            MA_NHOM_HANG: $scope.manhomhang,
            SERI: $scope.seri,
            DON_VI_TINH: $scope.donvitinh,
            MODEL_DAC_BIET: $scope.modeldacbiet,
            HINH_ANH: $scope.hinhanh,
            DAC_TINH: $scope.dactinh,
            GHI_CHU: $scope.ghichu,
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

    }
    $scope.passing = function (item) {
        $scope.item = item;
    }

    $scope.save = function (mahang) {
        var data_update = {
            MA_HANG: $scope.item.MA_HANG,
            TEN_HANG: $scope.item.TEN_HANG,
            MA_NHOM_HANG: $scope.item.MA_NHOM_HANG,
            SERI: $scope.item.SERI,
            DON_VI_TINH: $scope.item.DON_VI_TINH,
            MODEL_DAC_BIET: $scope.item.MODEL_DAC_BIET,
            HINH_ANH: $scope.item.HINH_ANH,
            DAC_TINH: $scope.item.DAC_TINH,
            GHI_CHU: $scope.item.GHI_CHU,
            TK_HACH_TOAN_KHO: $scope.item.TK_HACH_TOAN_KHO,
            TK_DOANH_THU: $scope.item.TK_DOANH_THU,
            TK_CHI_PHI: $scope.item.TK_CHI_PHI,
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

    $scope.update_nv = function (nhanvien) {
        $scope.nhanvien = nhanvien;
    }

    $scope.save = function (username) {
        var data_update = {
            ID: username,
            USERNAME: $scope.item.USERNAME,
            PASSWORD: $scope.item.PASSWORD,
            HO_VA_TEN: $scope.item.HO_VA_TEN,
            SDT: $scope.item.SDT,
            EMAIL: $scope.item.EMAIL,
            IS_ADMIN: $scope.item.IS_ADMIN,
            ALLOWED: $scope.item.ALLOWED,
            MA_CONG_TY: "HOPLONG",
        }
        userService.save(username, data_update).then(function (response) {
            $scope.loadUser();
            var nhanvien_update = {
                USERNAME: $scope.item.USERNAME,
                GIOI_TINH: $scope.nhanvien.GIOI_TINH,
                NGAY_SINH: $scope.nhanvien.NGAY_SINH,
                QUE_QUAN: $scope.nhanvien.QUE_QUAN,
                TRINH_DO_HOC_VAN: $scope.nhanvien.TRINH_DO_HOC_VAN,
                MA_PHONG_BAN: $scope.nhanvien.MA_PHONG_BAN
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