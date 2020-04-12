import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/api/users");
  },
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },

  getUserByEmail: function (email) {
    return axios.get("api/users/" + email);
  },
  updateUserByEmail: function (email) {
    return axios.put("api/users/" + email);
  },
};
