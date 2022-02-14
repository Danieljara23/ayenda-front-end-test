import React from 'react'
import styles from '../style/Footer.module.css'

export const Footer = (() => {
  return (
    <footer className={styles.footer}>
        <p>Powered by{' '}</p>
        <a
            href="https://ricardomazuera.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            Ricardo Mazuera
        </a>
    </footer>
  )
})

