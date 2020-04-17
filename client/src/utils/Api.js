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
    return axios.get("api/users/email/" + email);
  },

  newUserKid: function (data) {
    return axios.post("api/users/" + data.userId + "/kids", data);
  },

  getKidSchoolTask: function (kidId) {
    return axios.get("/api/kids/" + kidId + "/schoolWork");
  },

  saveSchoolWork: function (data) {
    return axios.post("api/kids/" + data.kidId + "/schoolWork", data);
  },
};
