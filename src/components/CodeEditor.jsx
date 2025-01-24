import styles from "./CodeEditor.module.css"
import pythonLogo from "../assets/python_logo.png"
import runIcon from "../assets/run_icon.png"
import {motion} from "motion/react"

const runVariables = {
    initial: {
        scale: [1, 1.2, 1],
    },
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.4,
            repeat: 1
        }
    }
}

export const CodeEditor = ({onExecute}) => {
    return <div className={styles["code-editor"]}>
        <div className={styles["code-editor__run"]}>
            <p className={styles["code-editor__tab-text"]}>
                love_confession
                <img src={pythonLogo} alt="python" className={styles["code-editor__tab-img"]} />
            </p>
            <motion.button
                className={styles["code-editor__run-btn"]}
                variants={runVariables}
                initial="initial"
                whileHover="hover"
                onClick={onExecute}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5
                }}
            >
                <img src={runIcon} alt="run-icon" className={styles["code-editor__run-image"]} />
            </motion.button>
        </div>
        <div className={styles["code-editor__tabs"]}>
            <div className={styles["code-editor__tab"]}>
                <p className={styles["code-editor__tab-text"]}>
                    love_confession.py
                    <img src={pythonLogo} alt="python" className={styles["code-editor__tab-img"]} />
                </p>
            </div>
        </div>
        <div className={styles["code-editor__line"]}>
            <p className={styles['code-editor__line-number']}>1</p>
            <p className={styles['code-editor__code']}>
                <span className={styles.blue}>print</span><span className={styles.black}>(</span><span className={styles.green}>&#34;I love youuu&#34;</span><span className={styles.black}>)</span>
            </p>
        </div>
    </div>
}