const router = require ("express").Router();
const controller = require ("../controller/userController");

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUsers);
router.put("./:id", controller.updateUser)



module.exports = router;