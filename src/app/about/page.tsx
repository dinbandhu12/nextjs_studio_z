import Link from 'next/link'
import style from './about.module.css'

const page = () => {
  return (
    <div>
      <h1 className={style.heading1}>About page</h1>
      <div>
        <p>Click to contact page </p>
        <Link href="/contact" className={style.link}>
          Contact page
        </Link>
      </div>
    </div>
  )
}

export default page
