import styles from './Footer.module.css'
export default function Footer ({completedTasks, totalTasks}) {
    return <>
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div>Completed Tasks: {completedTasks}</div>
        <div>Total Tasks: {totalTasks}</div>
     </div>
    </div>
    </>
}