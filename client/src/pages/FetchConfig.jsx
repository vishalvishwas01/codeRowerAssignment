import { useState } from "react";
import { motion } from "framer-motion";
import { fetchConfiguration } from "../services/api";
import Layout from "../components/Layout";

const FetchConfig = () => {
  const [configId, setConfigId] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMatrix([]);
    setLoading(true);

    try {
      const res = await fetchConfiguration(configId);
      setMatrix(res.data);
    } catch {
      setError("Configuration not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Fetch Configuration">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter configId"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
        >
          {loading ? "Loading..." : "Fetch Config"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}

      {matrix.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gray-100 rounded-lg p-4"
        >
          <p className="font-medium mb-2">Result</p>
          {matrix.map((row, index) => (
            <div key={index} className="text-gray-700">
              {row.join(", ")}
            </div>
          ))}
        </motion.div>
      )}
    </Layout>
  );
};

export default FetchConfig;
