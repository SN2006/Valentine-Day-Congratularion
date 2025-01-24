import styles from "./CenterFullScreenContainer.module.css"

export const CenterFullScreenContainer  = ({children, id}) => {
    return <div className={styles.container} id={id}>
        {children}
    </div>
}