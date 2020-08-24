import api from "../api";

class TicketService {
  layDanhSachPhongVe = (maLichChieu) =>
    api.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);

  datVe = (data) => api.post("/QuanLyDatVe/DatVe", data);
}

export const tichketService = new TicketService();
