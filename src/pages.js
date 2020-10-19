const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },
  orphanage(req, res) {
    return res.render("orphanage");
  },
  orphanages(req, res) {
    //colocar o orphanage pelo banco
    return res.render("orphanages", { orphanages });
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
};
