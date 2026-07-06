const express = require("express");

const Lead = require("../models/Lead");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, phone, message, plan, source } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All contact fields are required" });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      message,
      plan: plan || "General Inquiry",
      source: source || "contact",
    });

    return res.status(201).json({ lead });
  } catch (error) {
    return next(error);
  }
});

router.post("/enquiry", async (req, res, next) => {
  try {
    const { name, email, phone, message, plan, source } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email and phone are required" });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      message: message || "",
      plan: plan || "Membership Enquiry",
      source: source || "enquiry",
    });

    return res.status(201).json({ lead });
  } catch (error) {
    return next(error);
  }
});

router.get("/recent", requireAuth, async (_req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(10).lean();
    return res.json({ leads });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;