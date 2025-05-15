export function SortFilter({setFilter, setSort}){


    return(
        <div>
            <label htmlFor="filter">Filter by:</label>
            <select name="" id="filter" onChange={event => setFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="done">Finished</option>
                <option value="notDone">Not finished </option>
            </select>

            <label htmlFor="sort">Sort by:</label>
            <select name="" id="sort" onChange={event => setSort(event.target.value) }>
                <option value="default">Default</option>
                <option value="des">A-Z</option>
                <option value="asc">Z-A</option>
            </select>
        </div>
    )
}