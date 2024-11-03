

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form className="serchForm" onSubmit={e => e.preventDefault()}>
        <input 
            type="search" 
            placeholder="Search item" 
            value={searchItem}
            onChange={e => setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem