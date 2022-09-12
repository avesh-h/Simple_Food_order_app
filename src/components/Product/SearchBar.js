import React ,{useState} from 'react'


function SearchBar(props) {
  const [countryFood,setCountryFood] = useState('')

  const getCountryHandler = (e) =>{
    setCountryFood(e.target.value)
  }

  const SubmitHandler = (e)=>{
    e.preventDefault();
    props.onSearch(countryFood)
  }


  return (
    <form className="d-flex" role="search" onSubmit={SubmitHandler}>
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={getCountryHandler} />
    <button className="btn btn-outline-light" type="submit">Search</button>
  </form>
  )
}

export default SearchBar
