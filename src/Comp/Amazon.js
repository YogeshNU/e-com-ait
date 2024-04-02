import list from "../Data"
import Cards from "./Cards"
import "../Styles/amazon.css"

const Amazon =({handleClick}) => {
    return (
        <section>
            {
                list.map((item) => (
                    <Cards item = {item} key={item.id} handleClick={handleClick} />
                ))
            }
        </section>
    )
}
export default Amazon