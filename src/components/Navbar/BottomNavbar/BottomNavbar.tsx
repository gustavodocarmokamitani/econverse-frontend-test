import React from 'react'
import styles from './BottomNavbar.module.scss';

function BottomNavbar() {
  return (
    <div className={styles.bottomNavbar}>
        <p>TODAS CATEGORIAS</p>
        <p>SUPERMERCADO</p>
        <p>LIVROS</p>
        <p>MODA</p>
        <p>LANÇAMENTOS</p>
        <p>OFERTAS DO DIA</p>
        <p>ASSINATURA</p>
    </div>
  )
}

export default BottomNavbar