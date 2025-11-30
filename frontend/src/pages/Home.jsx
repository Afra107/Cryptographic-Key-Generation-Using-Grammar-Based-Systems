import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Cryptographic Key Generation
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Using Grammar-Based Systems
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Link to="/generate" className="block">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-blue-500 transition-all"
              >
                <div className="text-4xl mb-4">🔑</div>
                <h3 className="text-xl font-semibold text-white mb-2">Generate Key</h3>
                <p className="text-slate-400">Create cryptographic keys using CFG-based generation</p>
              </motion.div>
            </Link>

            <Link to="/parse-tree" className="block">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-green-500 transition-all"
              >
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Parse Tree</h3>
                <p className="text-slate-400">Visualize the derivation tree of generated keys</p>
              </motion.div>
            </Link>

            <Link to="/encryption" className="block">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-purple-500 transition-all"
              >
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-white mb-2">Encryption</h3>
                <p className="text-slate-400">Encrypt and decrypt text using AES-GCM</p>
              </motion.div>
            </Link>
          </div>

          <div className="mt-16 bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4">About This System</h2>
            <p className="text-slate-300 leading-relaxed">
              This application generates cryptographic keys using Context-Free Grammar (CFG) based systems.
              The system supports multiple grammar modes including numeric, alphanumeric, symbolic, and
              combined character sets. Each generated key is derived through randomized CFG derivations,
              ensuring high entropy and unique structure.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
