import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({details, onAdd, showAdd}) => {
    return (
    <header>
        <h1 className='header'>{details}</h1>
        <Button color={showAdd ? 'yellow' : 'maroon'} text={showAdd ? 'collapse' : 'add'} onClick={onAdd}/>
    </header>
  )
}


Header.defaultProps = {
    title: 'hello',
    details: 'task tracker'
}
// CSS in JS
// const headingStyle = {
//     color: 'yellow', 
//     backgroundColor: 'green'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header