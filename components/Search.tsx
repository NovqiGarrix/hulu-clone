import { SearchIcon } from '@heroicons/react/outline';

interface SearchProps {

    handleOnChange: (e: any) => void,
    value: string

}

const Search = ({ handleOnChange, value }: SearchProps) => {

    return (
        <div className="flex rounded text-gray-500 border border-gray-100 mb-3 p-3 py-2 items-center justify-between w-full group hover:shadow-md">
            <SearchIcon className="w-5 h-5 mr-3" />
            <input style={{ background: 'none' }} value={value} onChange={handleOnChange} className="text-gray-300 flex-grow rounded-lg bg-none bg-opacity-0 outline-none border-none" placeholder="Search anything..." />
        </div>
    )
}

export default Search;