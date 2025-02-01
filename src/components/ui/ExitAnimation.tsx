"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"


export default function ExitAnimation({children}: {children: React.ReactNode}) {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ y:20 }}
                transition={{ delay: 0.3 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
}

const box: React.CSSProperties = {
    width: 100,
    height: 100,
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
}

const button: React.CSSProperties = {
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#0f1115",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
}
