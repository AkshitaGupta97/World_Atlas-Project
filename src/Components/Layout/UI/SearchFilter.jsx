
export function SearchFilter({ filter, setFilter, search, setSearch, countries, setCounteries }) {

    const handleInputChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }

    const handleSelectChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    }

    const sortCountry = (value) => {
        const sortingData = [...countries].sort((a, b) => {
            if (value === 'asc') {
                return a.name.common.localeCompare(b.name.common);
            }
            else {
                return b.name.common.localeCompare(a.name.common);
            }
        })
        setCounteries(sortingData);
    }


    return (
        <section className="section-searchFilter container">
            <input className="searchIn" type="text" placeholder="search" value={search} onChange={handleInputChange} />

            <div>
                <button onClick={() => sortCountry('asc')}>Asc..</button>
            </div>

            <div>
                <button onClick={() => sortCountry('desc')}>Desc..</button>
            </div>

            <div>
                <select className="select-section" value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}