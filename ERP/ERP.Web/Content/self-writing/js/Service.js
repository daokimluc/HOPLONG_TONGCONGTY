﻿app.service('giamdocService', function ($http) {
    this.get_giamdoc = function (username) {
        return $http.get("/api/Api_ChiTietNhanVien/" + username).then(function (response) {
            return response.data;
        });
    }
});

app.service('hanghoaService', function ($http) {
    this.get_hanghoa = function () {
        return $http.get("/api/Api_HanghoaHL").then(function (response) {
            return response.data;
        });
    }
    this.get_nhomhang = function () {
        return $http.get("/api/Api_NhomVTHHHL").then(function (response) {
            return response.data;
        });
    }
    this.add = function (data_add) {
        return $http.post("/api/Api_HanghoaHL", data_add);
    };

    this.save = function (mahang, data_update) {
        return $http.put("/api/Api_HanghoaHL/" + mahang, data_update);
    }

    this.delete = function (mahang, data_delete) {
        return $http.delete("/api/Api_HanghoaHL/" + mahang, data_delete);
    }
    this.get_hangtonkho = function (id) {
        return $http.get("/api/Api_TonkhoHL/" + id).then(function (response) {
            return response.data;
        });
    };
    this.get_quantam = function (username) {
        return $http.get("/api/Api_HangDuocQuanTam/" + username).then(function (response) {
            return response.data;
        });
    }
});



app.service('NhomvthhService', function ($http) {
    this.get_hangsp = function () {
        return $http.get("/api/Api_NhomVTHHHL").then(function (response) {
            return response.data;
        });
    }
    this.add = function (data_add) {
        return $http.post("/api/Api_NhomVTHHHL/", data_add);
    };

    this.save = function (hangsp, data_update) {
        return $http.put("/api/Api_NhomVTHHHL/" + hangsp, data_update);
    }

    this.delete = function (hangsp, data_delete) {
        return $http.delete("/api/Api_NhomVTHHHL/" + hangsp, data_delete);
    }
    
});


app.service('khoService', function ($http) {
    this.get_kho = function () {
        return $http.get("/api/Api_KhoHL").then(function (response) {
            return response.data;
        });
    };
    this.add = function (data_add) {
        return $http.post("/api/Api_KhoHL", data_add);
    };

    this.save = function (makho, data_update) {
        return $http.put("/api/Api_KhoHL/" + makho, data_update);
    };

    this.delete = function (makho, data_delete) {
        return $http.delete("/api/Api_KhoHL/" + makho, data_delete);
    };
});

app.service('userService', function ($http) {
    this.get_user = function () {
        return $http.get("/api/Api_NguoidungHL").then(function (response) {
            return response.data;
        });
    };
    this.add = function (data_add) {
        return $http.post("/api/Api_NguoidungHL", data_add);
    };
    this.add_nhanvien = function (nhanvien_add) {
        return $http.post("/api/Api_NhanvienHL", nhanvien_add);
    };

    this.save = function (username, data_update) {
        return $http.put("/api/Api_NguoidungHL/" + username, data_update);
    };

    this.save_nhanvien = function (username, nhanvien_update) {
        return $http.put("/api/Api_NhanvienHL/" + username, nhanvien_update);
    };
});

app.service('nhanvienService', function ($http) {
    this.get_nhanvien = function (username) {
        return $http.get("/api/Api_ChiTietNhanVien/" + username).then(function (response) {
            return response.data;
        });
    };
});

app.service('phongbanService', function ($http) {
    this.get_phongban = function () {
        return $http.get("/api/Api_PhongbanHL").then(function (response) {
            return response.data;
        });
    };
    this.save = function (maphongban, data_update) {
        return $http.put("/api/Api_PhongbanHL/" + maphongban, data_update);
    };

    this.delete = function (maphongban, data_delete) {
        return $http.delete("/api/Api_PhongbanHL/" + maphongban, data_delete);
    };
});

app.service('nhanvienphongbanService', function ($http) {
    this.get_nhanvien = function (maphongban) {
        return $http.get("/api/Api_NhanvienphongbanHL/" + maphongban).then(function (response) {
            return response.data;
        });
    };
});

app.service('taikhoanService', function ($http) {
    this.get_taikhoan = function () {
        return $http.get("/api/Api_TaiKhoanHachToan").then(function (response) {
            return response.data;
        });
    };
    this.add = function (data_add) {
        return $http.post("/api/Api_TaiKhoanHachToan", data_add);
    };

    this.save = function (sotk, data_update) {
        return $http.put("/api/Api_TaiKhoanHachToan/" + sotk, data_update);
    }

    this.delete = function (sotk, data_delete) {
        return $http.delete("/api/Api_TaiKhoanHachToan/" + sotk, data_delete);
    }
});

app.service('danhmucService', function ($http) {
    this.get_danhmuc = function () {
        return $http.get("/api/Api_Categories").then(function (response) {
            return response.data;
        });
    };
    this.add_danhmuc = function (data_add) {
        return $http.post("/api/Api_Post", data_add);
    };

    this.add_postcategories = function (postcate) {
        return $http.post("/api/Api_POST_CATEGORIES", postcate);
    };

    this.get_post = function (madanhmuc) {
        return $http.get("/api/Api_POST_CATEGORIES/" + madanhmuc).then(function (response) {
            return response.data;
        });
    };
});

app.service('menuService', function ($http) {
    this.get_menu = function (username) {
        return $http.get('/api/Api_ListMenu/' + username).then(function (response) {
            return response.data;
        });
    };

    this.save_menu = function (maphongban,username,mamenu,data_save) {
        return $http.put('/api/Api_MENU_USER/' + maphongban + '/' + username + '/' + mamenu, data_save);
    }

    this.get_menucha = function (username,menucha) {
        return $http.get('/api/Api_ListMenu/' + username + '/' + menucha).then(function (response) {
            return response.data;
        });
    }

    this.get_listmenucha = function (username, menucha) {
        return $http.get('/api/Api_ListMenuCha/' + username + '/' + menucha).then(function (response) {
            return response.data;
        });
    }
});

app.service('userdetailService', function ($http) {
    this.get_details = function (username) {
        return $http.get('/api/Api_ChiTietNhanVien/' + username).then(function (response) {
            return response.data;
        });
    };

    this.save_pw = function (username,oldpw, data_save) {
        return $http.put('/api/DoiMatKhau/' + username + '/' + oldpw, data_save);
    };

    this.get_user = function () {
        return $http.get("/api/Api_NguoidungHL").then(function (response) {
            return response.data;
        });
    };
});

app.service('bangchamcongService', function ($http) {
    this.get_chamcong = function (username) {
        return $http.get('/api/Api_BangChamCong/' + username).then(function (response) {
            return response.data;
        });
    };
});

app.service('bangluongService', function ($http) {
    this.get_bangluong = function (username) {
        return $http.get('/api/Api_BangLuong/' + username).then(function (response) {
            return response.data;
        });
    };
});

app.service('addmenuService', function ($http) {
    this.add_menu = function (data_add) {
        return $http.post('/api/Api_Menu', data_add);
    }

    this.get_menu = function () {
        return $http.get('/api/Api_Menu').then(function (response) {
            return response.data;
        });
    };

    this.save_menu = function (mamenu,datasave) {
        return $http.put('/api/Api_Menu/' + mamenu, datasave);
    };

    this.delete_menu = function (mamenu, data_delete) {
        return $http.delete('/api/Api_Menu/' + mamenu, data_delete);
    };
});

app.service('tonghopnvService', function ($http) {
    this.get_tonghop = function () {
        return $http.get('/api/Api_TongHopNhanVien').then(function (response) {
            return response.data;
        });
    };
});

app.service('dsnghiepvuService', function ($http) {
    this.get_dsnghiepvu = function (id_menu) {
        return $http.get('/api/Api_Chitietnghiepvu/' + id_menu  ).then(function (response) {
            return response.data;
        });
    };
});

app.service('chitietbaivietService', function ($http) {
    this.get_chitietbaiviet = function (mabaiviet) {
        return $http.get('/api/Api_ThongTinBaiViet/' + mabaiviet).then(function (response) {
            return response.data;
        });
    };

    this.save = function (mabaiviet, data_update) {
        return $http.put('/api/Api_ChiTietBaiViet/' + mabaiviet, data_update);
    };
});