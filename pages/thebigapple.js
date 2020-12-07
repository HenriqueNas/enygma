
import styles from './styles.module.css'

function Apple() {
  return (
    <div className={styles.form_group}>
      <input className={styles.form_field} type="email" placeholder="Email" />
      <span className={styles.span}>@effecti.com.br</span>
    </div>
  )
}

export default Apple