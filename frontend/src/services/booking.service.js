import http from "../http-common";

class bookingDataService {
  getAll() {
    return http.get("/bookings");
  }

  get(id) {
    return http.get(`/bookings/${id}`);
  }

  create(data) {
    return http.post("/bookings", data);
  }

  update(id, data) {
    return http.put(`/bookings/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bookings/${id}`);
  }

  deleteAll() {
    return http.delete(`/bookings`);
  }
}

export default new bookingDataService();