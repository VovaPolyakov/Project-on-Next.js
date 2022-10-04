
import Link from "next/link"
import links from "../link/link"
import styled from  '../../styles/i.module.scss'

const Form = () => {
  return (
    <form action="/" method="post" className={styled.form}>
        <h1>Found your tours</h1>
        <label  className={styled.form_label} for="first">Name of Country</label>
        <input  className={styled.form_input} type="text" id="first" name="first" />
        <label  className={styled.form_label} for="last">Time</label>
        <input  className={styled.form_input} type="datetime-local"></input>
        <div className={styled.buttons}>
            <button  className={styled.form_button} type="submit">Submit</button>
            {links.map(item =>
            <Link key={item.name} href={item.link}>
                <button  className={styled.form_button} type="submit">{item.name}</button>
            </Link>
        )}
        </div>
    </form>
  )
}

export default Form
