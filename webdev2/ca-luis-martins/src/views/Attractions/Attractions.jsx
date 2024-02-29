import axios from 'axios';
import { useState } from 'react';
import { ModalContextProvider } from '../../components/Modal/context/ModalContextProvider';
import { SearchContainer } from '../../components/Search/SearchContainer';
import { FormatedTextSpan } from "./../../components/Styling/FormatedTextSpan";

export const Attractions = () => {
    const [query, setQuery] = useState();
    const [result, setResult] = useState();

    const submitQuery = async () =>
        query &&
        await axios(`https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch('${query}')&$top=10`)
            .then(resp => setResult(resp.data.results))
            .catch(() => setResult(""));

    return (
        <ModalContextProvider>
            <div className="py-6 px-3 h-full w-full flex flex-col gap-8">
                <p className="font-lobster text-xl sm:text-3xl">
                    Discover the essence of Ireland as you explore its top attractions. <br />
                    From the majestic <FormatedTextSpan>Cliffs of Moher</FormatedTextSpan> to the vibing streets of <FormatedTextSpan>Dublin</FormatedTextSpan>. <br />
                    <span className='underline underline-offset-4'>Use the search bar bellow to find attractions anywhere in Ireland.</span>
                </p>
                <SearchContainer setQuery={setQuery} submitQuery={submitQuery} result={result} />
            </div>
        </ModalContextProvider >
    )
}