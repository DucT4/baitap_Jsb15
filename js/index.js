// // bài tập tuyển sinh:
// document.getElementById('btnKetQuaB1').onclick = function () {
//     //input: khuVuc: number, doiTuong:number, soDiem1:nunber, soDiem3:nunber, soDiem2:nunber

//     var soDiem1 = document.getElementById('diem-mon-thu1').value;
//     var soDiem2 = document.getElementById('diem-mon-thu2').value;
//     var soDiem3 = document.getElementById('diem-mon-thu3').value;
//     var diem3Mon = soDiem1 + soDiem2 + soDiem3;
//     tinhDiemChuan(diem3Mon, 'khu-vuc', 'doi-tuong', 'kq-bai1');
// }
// function tinhDiemChuan(idDiem3Mon, idKhuVuc, idDoiTuong, idOutput) {
//     var diem3Mon = +document.getElementById(idDiem3Mon).value;
//     var khuVuc = document.getElementById(idKhuVuc).value;
//     var doiTuong = +document.getElementById(idDoiTuong).value;
//     var ketQua = '';
//     if (doiTuong === 1 && khuVuc == 'A' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 2.5 + 2;
//     } else if (doiTuong === 1 && khuVuc == 'B' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 2.5 + 1;
//     } else if (doiTuong === 1 && khuVuc == 'C' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 2.5 + 0.5;
//     } else if (doiTuong === 2 && khuVuc == 'A' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 1.5 + 2;
//     } else if (doiTuong === 2 && khuVuc == 'B' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 1.5 + 1.5;
//     } else if (doiTuong === 2 && khuVuc == 'C' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 1.5 + 0.5;
//     } else if (doiTuong === 3 && khuVuc == 'A' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 1 + 2;
//     } else if (doiTuong === 3 && khuVuc == 'B' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 1 + 1;
//     } else if (doiTuong === 3 && khuVuc == 'C' && soDiem1 !== 0 && soDiem2 !== 0 && soDiem3 !== 0) {
//         diemChuan = diem3Mon + 0.5 + 1;
//     }
//     ketQua = diemChuan;
//     if (ketQua >= 21 && ketQua < 25) {
//         'đậu trường tầm trung'
//     } else if (ketQua >= 25 && ketQua < 27) {
//         'đậu trường tốt'
//     } else if (ketQua > 27) {
//         'chúc mừng bạn đã đậu trương top!!!!'
//     } else if (ketQua< 21){
//         'chúc bạn may mắn lần sau:(('
//     }
//     document.getElementById(idOutput).innerHTML = `
//     kết quả đạt được: ${diemChuan}- Bạn đã đậu:${ketQua}
//     `;
// }


document.getElementById('btnKetQuaB1').onclick = function () {
    tinhDiemChuan('doi-tuong', 'khu-vuc', 'kq-bai1');
}
function tinhDiemChuan(idDoiTuong, idKhuVuc, idOutput) {
    var soDiem1 = +document.getElementById('diem-1').value;
    var soDiem2 = +document.getElementById('diem-2').value;
    var soDiem3 = +document.getElementById('diem-3').value;
    var diemChuan = 0;
    diemChuan = +document.getElementById('diem-chuan').value;
    var diem3Mon = 0;
    diem3Mon = soDiem1 + soDiem2 + soDiem3;
    var doiTuong = document.getElementById(idDoiTuong).value;
    var khuVuc = document.getElementById(idKhuVuc).value;
    var ketQua = 0;
    switch (doiTuong) {
        case '1': {
            if (khuVuc = '1' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 2.5 + 2;
            } else if (khuVuc = '2' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 2.5 + 1;
            } else if (khuVuc = '3' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 2.5 + 0.5;
            } else {
                ketQua = 'bạn đã bị điểm liệt'
            };
        }; break;
        case '2': {
            if (khuVuc = '1' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1.5 + 2;
            } else if (khuVuc = '2' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1.5 + 1;
            } else if (khuVuc = '3' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1.5 + 0.5;
            } else {
                ketQua = ' đã bị điểm liệt'
            };
        }; break;
        case '3': {
            if (khuVuc = '1' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1 + 2;
            } else if (khuVuc = '2' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1 + 1;
            } else if (khuVuc = '3' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1 + 0.5;
            } else {
                ketQua = ' đã bị điểm liệt'
            };
        }; break;
        case '0': {
            if (khuVuc = '1' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 2;
            } else if (khuVuc = '2' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 1;
            } else if (khuVuc = '3' && soDiem1 != 0 && soDiem2 != 0 && soDiem3 != 0) {
                ketQua = diem3Mon + 0.5;
            } else {
                ketQua = ' đã bị điểm liệt'
            };
        }; break;
    }
    var tenTen = '';
    if (ketQua >= diemChuan) {
        tenTen = ' chúc mừng bạn đã đậu'
    } else if (ketQua < diemChuan && ketQua >= 0) {
        tenTen = 'rất tiếc cho bạn'
    }
    else {
        tenTen = 'rất tiếc cho bạn'
    }
    document.getElementById(idOutput).innerHTML = `
    điểm của bạn:${ketQua} - Kết quả:${tenTen}
    `;
    return diemChuan;
}


//bài 2 tính tiền điện
document.getElementById('btnTienDien').onclick = function () {
    //input: name: string,soKw:nunber
    var name = '';
    name = document.getElementById('name').value;
    var soKw = document.getElementById('so-kw').value;
    //output: tinhTien:number
    var tinhTien = 0;
    //process:
    if (soKw <= 50) {
        tinhTien = soKw * 500
    } else if (soKw > 50 && soKw <= 100) {
        tinhTien = soKw * 650 - 50 * 500
    } else if (soKw > 100 && soKw <= 200) {
        tinhTien = soKw * 850 - 50 * 500 - 50 * 650
    } else if (soKw > 200 && soKw <= 350) {
        tinhTien = soKw * 1100 - 50 * 500 - 50 * 650 - 100 * 850
    } else if (soKw > 350) {
        tinhTien = soKw * 1300 - 50 * 500 - 50 * 650 - 100 * 850 - 150 * 1100
    }

    document.getElementById('kq-bai2').innerHTML = `
    số tiền phải đóng: ${tinhTien}d<br>
     name:${name}    <br>
     số điện đã tiêu thụ: ${soKw}
    `;
}


//bài tập:tính thuế thu nhập
document.getElementById('btnTinhThue').onclick = function () {
    //input:name:string, tongThuNhap: number, soNguoiPhuThuoc: number
    var name = '';
    name = document.getElementById('name-thue').value;
    var tongThuNhap = +document.getElementById('all-thu-nhap').value;
    var soNguoiPhuThuoc = +document.getElementById('so-nguoi-phu-thuoc').value;
    // output: tinhThueCaNhan: nunber
    var tinhThueCaNhan = 0;
    var thuNhanCaNhanSauThue = 0;
    tinhThueCaNhan = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
    if (tongThuNhap <= 60) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.95
    } else if (tinhThueCaNhan > 60 && tinhThueCaNhan <= 120) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.9
    } else if (tinhThueCaNhan > 120 && tinhThueCaNhan <= 210) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.85
    } else if (tinhThueCaNhan > 210 && tinhThueCaNhan <= 384) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.8
    } else if (tinhThueCaNhan > 384 && tinhThueCaNhan <= 624) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.75
    } else if (tinhThueCaNhan > 624 && tinhThueCaNhan <= 960) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.7
    } else if (tinhThueCaNhan > 960) {
        thuNhanCaNhanSauThue = tinhThueCaNhan * 0.65
    }
    document.getElementById('kq-bai3').innerHTML = `
Họ tên: ${name}<br>
Thu nhập cá nhân trước thuế: ${tinhThueCaNhan.toFixed(3)}Tr<br>
Thu nhập cá nhân sau thuế: ${thuNhanCaNhanSauThue.toFixed(3)}Tr<br>
`;
}
// Bài tập tính tiền cap





document.getElementById('loai-khach-hang').onchange = function(){
    var loaiKhachHang=document.getElementById('loai-khach-hang').value;
    var tagInput=document.getElementById('so-ket-noi');
    if(loaiKhachHang=='nhadan'){
        tagInput.style.opacity='0'
    } else if(loaiKhachHang=='doanhngiep')
    {
        tagInput.style.opacity='1'
        
    }
    document.getElementById('so-ket-noi'),innerHTML = tagInput;
}
document.getElementById('btnTinhTienCap').onclick = function () {
    //input  maKhachHang:number, loaiKhachHang: string, kenhCaoCap: string, soketNoi: number
    var maKhachHang = document.getElementById('ma-khach-hang').value;
    var kenhCaoCap = document.getElementById('kenh-cao-cap').value;
    var ketNoi = document.getElementById('so-ket-noi').value;

    var tienCap = 0;
    if (loaiKhachHang = 'doanhngiep' && ketNoi <= 10) {
        tienCap = 75 + 15 + kenhCaoCap * 50
    } else if (loaiKhachHang = 'doanhngiep' && ketNoi > 10) {
        tienCap = (ketNoi - 10) * 5 + 15 + 75 + kenhCaoCap * 50
    } else if (loaiKhachHang = 'nhadan') {
        tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap
    }
    document.getElementById('kq-bai4').innerHTML = `
     Mã khách hàng:${maKhachHang}<br>
      Tiền cap:${tienCap}
    `;
}
