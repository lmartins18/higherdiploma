import { AttractionsList } from '../../views/Attractions/AttractionsList';

export const SearchContainer = ({ submitQuery, setQuery, result }) => {
    return (
        <div className="flex flex-col flex-1 gap-3">
            <div className="flex">
                <p className="font-uncial my-auto pr-3">Search</p>
                <input name="search-bar" type="text"
                    placeholder="Dublin"
                    className="rounded ring-1 ring-emerald-700 pl-1 mr-1"
                    onKeyDown={(e) => e.key === "Enter" && submitQuery()}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className='font-uncial rounded ring-2 ring-emerald-700 dark:ring-emerald-300 p-1'
                    onClick={submitQuery}
                >
                    Go
                </button>
            </div>
            <div className="flex flex-1 bg-slate-200 dark:bg-slate-800 rounded-xl ring-2 ring-emerald-500">
                {result?.length > 0
                    ? <AttractionsList attractionsList={result} />
                    : <p className="text-3xl m-auto font-uncial text-emerald-700">{result !== undefined && "No Data."}</p>
                }
            </div>
        </div>
    );
}