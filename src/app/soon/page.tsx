"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
        <h1 className="mb-8 text-6xl font-bold">Coming Soon</h1>
        <p className="mb-12 text-xl">We are working hard to bring you something amazing. Stay tuned!</p>
        {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mb-4 w-64 rounded-md border border-gray-300 bg-white p-2 text-black"
                />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="rounded-md bg-[#FF3D00] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#FF3D00]"
                >
                Notify Me
            </motion.button>
            </form>
        ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">
            Thank you for subscribing!
            </motion.p>
        )}
        </motion.div>
      </div>
  )
}

