import Services from '@/components/Services/page'
import style from './services.module.css'

const page = () => {
  return (
    <div className={style.container}>
      <h1>Services page</h1>
      <Services />
    </div>
  )
}

export default page
