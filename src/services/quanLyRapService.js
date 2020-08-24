import api from "../api";
import { groupID } from "../config/setting";

class CinemaService {
  layThongTinHeThongRap = () => api.get("/QuanLyRap/LayThongTinHeThongRap");
  layThongTinLichChieuHeThongRap = (maHeThongRap) =>
    api.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${groupID}`
    );
}

export const cinemaService = new CinemaService();