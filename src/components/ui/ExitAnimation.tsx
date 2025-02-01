"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"


export default function ExitAnimation({children}: {children: React.ReactNode}) {

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
