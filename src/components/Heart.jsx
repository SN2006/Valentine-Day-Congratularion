import styles from "./Heart.module.css"
import {motion} from "motion/react"
import {useState} from "react";
import {CodeEditor} from "./CodeEditor.jsx";
import BlurText from "./UI/text/BlurText.jsx";
import {BlurContainer} from "./BlurContainer.jsx";

const redHeartVariants = {
    initial: {
        scale: 1,
        translateX: "-50%",
        translateY: "-50%",
        rotate: 0,
    },
    hover: {
        scale: 1.2,
        rotate: 0,
    },
    open: {
        scale: 1,
        translateX: "10%",
        translateY: "10%",
        rotate: 380,
        transition: {
            duration: 0.8,
        }
    }
}

const whiteHeartVariants = {
    initial: {
        scale: 0.4,
        translateX: "-50%",
        translateY: "-50%",
    },
    open: {
        scale: 1,
        translateX: "-50%",
        translateY: "-50%",
        transition: {
            duration: 0.8,
        }
    }
}

export const Heart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExecuted, setIsExecuted] = useState(false);

    const onRedHeartClickHandler = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleAnimationComplete = () => {
        const container = document.getElementById("heart-container");

        setInterval(() => {
            const heart = document.createElement("div");
            heart.className = "heart";

            // Random size between 10px and 40px
            const size = Math.random() * 30 + 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;

            // Random horizontal position
            const posX = Math.random() * window.innerWidth;
            heart.style.left = `${posX}px`;

            // const posY = Math.random() * window.innerHeight;
            // heart.style.top = `${posY}px`;

            // Random falling duration between 3s and 7s
            const duration = Math.random() * 4 + 3;
            heart.style.animationDuration = `${duration}s, 1s`;

            // Add heart to the container
            container.appendChild(heart);

            // Remove the heart after the animation ends
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, 300);
    };

    const onExecuteHandler = () => {
        setIsExecuted(true);
    }

    const onCloseHandler = () => {
        setIsExecuted(false);
        setIsOpen(false);
    }

    return <div style={{position: "relative"}}>
        <motion.div
            onClick={onRedHeartClickHandler}
            className={styles["red-heart"]}
            variants={redHeartVariants}
            animate={isOpen ? "open" : "initial"}
            whileHover={isOpen ? "open" : "hover"}
        >
            <p className={styles['red-heart__text']}>Happy valentine&#39;s day!!!</p>
            <p className={styles['red-heart__text']}>CLick to see more)))</p>
        </motion.div>
        <motion.div
            className={styles["white-heart"]}
            variants={whiteHeartVariants}
            animate={isOpen ? "open" : "initial"}
        >
            <CodeEditor onExecute={onExecuteHandler} />
        </motion.div>
        {
            isExecuted && (
                <BlurContainer onClose={onCloseHandler}>
                    <div className={styles['animated-text--large']}>
                        <BlurText
                            text="Nastya, I love youuuuuu"
                            delay={1000}
                            animateBy="words"
                            direction="bottom"
                            onAnimationComplete={handleAnimationComplete}
                            className={styles['animated-text']}
                        />
                    </div>
                    <div className={styles['animated-text--small']}>
                        <BlurText
                            text="Nastya, I love youuuuuu"
                            delay={1000}
                            animateBy="words"
                            direction="bottom"
                            onAnimationComplete={handleAnimationComplete}
                            className={styles['animated-text']}
                        />
                    </div>
                </BlurContainer>
            )
        }
    </div>
}