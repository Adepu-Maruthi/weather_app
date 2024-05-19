
import React, { useState } from 'react'

const Search = ({onValue}) => {
    console.log(onValue);
    const[search, setSearch] = useState('')
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearch('')
        onValue(search)
        
    }
  return (
    <>
  <form onSubmit={handleSubmit} className='row' >
       <div className="col-md-9">
       <input type="text" 
        className="form-control" 
        placeholder="Enter City Name ?" 
        aria-label='First name' 
        value={search}
        onChange={handleChange}/>
       </div>
   <div className="col-md-3">
   <button type="submit" className="btn btn-primary w-75">Search</button>
   </div>
  </form>
  </>
  )
}

export default Search
