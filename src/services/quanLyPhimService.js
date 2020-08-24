import { groupID, soPhanTuTrenTrang } from "../config/setting";
import api from "../api";

class MovieService {
  layDanhSachPhim = () =>
    api.get(`/quanlyphim/laydanhsachphim?manhom=${groupID}`);

  layDanhSachPhimPhanTrang = (soTrang) =>
    api.get(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${groupID}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    );

  layThongTinPhim = (maPhim) =>
    api.get(`/QuanLyRap/LayThongTinLichChieuPhim?maphim=${maPhim}`);
}

export const movieService = new MovieService();
