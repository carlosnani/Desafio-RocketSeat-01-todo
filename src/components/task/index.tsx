import style from './task.module.css';
import { RiDeleteBin5Line } from "react-icons/ri"

export function Task(){
  return (
    <div className={style.task}>
      <button>
        <div></div>
      </button>
      <p>
      Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p> 
      <button>
        <RiDeleteBin5Line size={18}/>
      </button>
    </div>
  )
}


