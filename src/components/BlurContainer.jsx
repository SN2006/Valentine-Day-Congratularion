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
        borderColor: "#FFF",
        outlineColor: '#C94F4F',
        backgroundColor: '#C94F4F',
        scale: 1,
    },
    hover: {
        borderColor: "#C94F4F",
        outlineColor: '#C94F4F',
        backgroundColor: '#C94F4F',
        scale: 1.2,
    },
    tap: {
        scale: 0.9,
        outlineColor: '#FFF',
        backgroundColor: '#FFF',
        borderColor: "#FFF",
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
            </motion.button>
        </CenterFullScreenContainer>
    </motion.div>
}