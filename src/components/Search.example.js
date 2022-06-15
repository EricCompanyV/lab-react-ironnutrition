// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ setter, data }) {
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    const newSearch = (event.target.value)
    setSearch(newSearch)
    const newData = []
    data.forEach(element => {
      if (element.name.toLowerCase().includes(newSearch)) {
        newData.push(element)
      }      
    });
    setter(newData)
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
