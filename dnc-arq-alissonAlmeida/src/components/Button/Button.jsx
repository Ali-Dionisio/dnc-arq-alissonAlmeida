import './Button.css'
import whiteArrow from '../../assets/setaDireita.svg'
//arrow, loading
function Button ({arrow, buttonStyle, children, ...props}) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow} />}
        </button>
    )
}

export default Button