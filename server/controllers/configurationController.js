const Configuration = require("../models/Configuration");

// GET /api/configurations/:id
exports.getConfiguration = async (req, res) => {
  try {
    const config = await Configuration.findOne({
      configId: req.params.id,
    });

    if (!config) {
      return res.status(404).json({ message: "Configuration not found" });
    }

    res.json(config.data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/configurations/:id
exports.updateRemark = async (req, res) => {
  try {
    const { remark } = req.body;

    const config = await Configuration.findOneAndUpdate(
      { configId: req.params.id },
      { remark },
      { new: true }
    );

    if (!config) {
      return res.status(404).json({ message: "Configuration not found" });
    }

    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
