import {CenterFullScreenContainer} from "./UI/containers/CenterFullScreenContainer.jsx";
import styles from "./BlurContainer.module.css"
import {motion} from "motion/react";

const containerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }
}

const closeButtonVariables = {
    initial: {
        background: "#e67fff",
        borderColor: "#c700ff",
        color: "#ffffff",
        scale: 1,
    },
    hover: {
        background: "#c700ff",
        borderColor: "#c700ff",
        color: "#ffffff",
        scale: 1.2,
    },
    tap: {
        scale: 0.9,
        background: "#ffffff",
        borderColor: "#ffffff",
        color: "#c700ff",
    }
}

export const BlurContainer = ({children, onClose}) => {
    return <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="initial"
        animate="animate"
    >
        <CenterFullScreenContainer id="heart-container">
            {children}
            <motion.button
                variants={closeButtonVariables}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={styles['close-button']}
                onClick={onClose}
            >
                Close
            </motion.button>
        </CenterFullScreenContainer>
    </motion.div>
}