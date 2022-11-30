import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
<div>
    <h1>Produits</h1>
    <ul>
      <li>Produit 1</li>
      <li>Produit 2</li>
      <li>Produit 3</li>
    </ul>
   </div>
    </Layout>
   
  )
}
