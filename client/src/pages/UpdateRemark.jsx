import { useState } from "react";
import { motion } from "framer-motion";
import { updateRemark } from "../services/api";
import Layout from "../components/Layout";

const UpdateRemark = () => {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await updateRemark(configId, remark);
      setMessage("Remark updated successfully");
      setConfigId("");
      setRemark("");
    } catch {
      setMessage("Failed to update remark");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Update Remark">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter configId"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <textarea
          placeholder="Enter remark"
          rows="4"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          {loading ? "Updating..." : "Update Remark"}
        </button>
      </form>

      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-gray-700"
        >
          {message}
        </motion.p>
      )}
    </Layout>
  );
};

export default UpdateRemark;
