
const SearchBox = ({ onSearchChange }) => {
    return (
        <div className='pa2'>
            <input onChange={onSearchChange} className="pa3 ba b--green bg-lighttest-blue" type="search" placeholder="Serach Robots" />
        </div>
    )
}

export default SearchBox