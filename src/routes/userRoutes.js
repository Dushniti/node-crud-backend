const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/create", createUser);
router.put("/update/:id", updateUser);

// router.put("/update/", (req, res) => {
//     const { data } = req.body;
//     const {id} = req.query;
//     if (!id) return res.status(400).json({ success: false, message: "User ID is required" });

//     updateUser(req, res);
//   });

// router.put("/update", (req, res) =>
//   req.query.id
//     ? updateUser(req, res)
//     : res.status(400).json({ error: "User ID is required" })
// );

// router.put("/update", (req, res) => {
//     const { id } = req.query; // Extract 'id' from query parameters
//     if (!id) {
//       return res.status(400).json({ error: "User ID is required" });
//     }
//     updateUser(req, res);
//   });

router.delete("/delete/:id", deleteUser);

// router.delete("/delete", (req, res) =>
//   req.query.id
//     ? deleteUser(req, res)
//     : res.status(400).json({ error: "User ID is required" })
// );

// router.delete("/delete", async (req, res) => {
//     try {
//       const { id } = req.query;
//       if (!id) return res.status(400).json({ success: false, message: "User ID is required" });

//       const result = await deleteUser(id); // Ensure deleteUser is an async function handling DB logic
//       if (!result) return res.status(404).json({ success: false, message: "User not found" });

//       res.status(200).json({ success: true, message: "User deleted successfully" });
//     } catch (err) {
//       res.status(500).json({ success: false, message: "Failed to delete user", error: err.message });
//     }
//   });

module.exports = router;
