import Link from 'next/link'
import style from './about.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
        <Navbar />
      <h1 className={style.heading1}>About page</h1>
      <div>
        <p>Click to contact page </p>
        <Link href="/contact" className={style.link}>
          Contact page
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page
