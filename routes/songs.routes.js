const router = require("express").Router();

const authService = require("../services/auth.services");
const service = require("../services/songs.services");

router.get("/", service.findAll);
router.get("/:id", service.findById);
router.put("/add-to-playlists/:id", service.addToPlaylists);

//admin routes
router.use(authService.isAdmin);

router.post("/", service.insert);
router.put("/:id", service.updateById);
router.delete("/:id", service.deleteById);

module.exports = router;
