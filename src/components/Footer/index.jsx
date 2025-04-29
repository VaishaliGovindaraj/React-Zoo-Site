import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h4>Wild Wonders Zoo</h4>
                    <p>Explore the beauty of wildlife and conservation at Wild Wonders Zoo. Adventure awaits you!</p>
                </div>

                <div className={styles.footerSection}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mammals">Mammals</a></li>
                        <li><a href="/birds">Birds</a></li>
                        <li><a href="/reptiles">Reptiles</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>Contact Us</h4>
                    <p>Email: info@wildwonderszoo.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Location: 123 Safari Lane, Adventure City</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                © {new Date().getFullYear()} Wild Wonders Zoo | All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;