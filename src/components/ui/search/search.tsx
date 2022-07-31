import Spinner from "../spinner/spinner";
import React, {ChangeEvent, useState} from "react";
import Link from "next/link";
import {PATHS, SEARCH_DATA} from "../../../types";
import axios from "axios";


const Search = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState<SEARCH_DATA>([]);

  const onChangeSearchValue = async (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.trimStart();
    setSearchValue(value);

    if (value.length > 1) {
      const data = await fetchSearchData(value);
      setSearchData(data)
    }
  }

  const fetchSearchData = async (value: string) => {
    setLoading(true);
    const { data } = await axios.get(encodeURI("https://vosne-api.herokuapp.com/api/interpretation/search/" + value));
    setLoading(false);
    return data;
  }

  const SearchEl = () => {
    if(!searchData.length) {
      return (
        <span>Ничего не найдено</span>
      )
    }

    return (
      <ul>
        {searchData.map((it, idx) => {
          return (
            <li key={idx}>
              <Link href={`${PATHS.INTERPRETATION}/${it}`}>
                <a className="text-sky-800">{it}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="relative flex flex-col gap-2">
      <label className="w-full relative">
        <input value={searchValue} onChange={onChangeSearchValue}
               className="text-black text-sm w-full px-4 py-1.5 pr-10 border rounded" placeholder="Что вам приснилось?"
               type="text"/>
      </label>
      {searchValue.length > 1 &&
        <div className="relative min-h-[50px] max-h-[400px] overflow-y-scroll rounded p-4 w-full bg-white border">
          {loading ? <Spinner/> : SearchEl()}
        </div>
      }
    </div>
  )
}

export default Search;