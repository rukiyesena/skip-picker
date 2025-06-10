import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkipList } from '../store/skip/skipSlice';
import Card from "../components/CardComponent";
import SkipListGrid from "./components/SkipListGrid";
import SelectedSkipCard from "./components/SelectedSkipCard";

import { FaGripLines, FaGripVertical, FaEllipsisH, FaSearch } from 'react-icons/fa';
import FourDotsHorizontal from "../components/icons/FourDots"
const SelectSkip = ({ onNext, onBack }) => {
  const skipListApi = useSelector(state => state.skip?.skipList);
  const selectedSkipApi = useSelector(state => state.skip?.selectedSkip);
  const dispatch = useDispatch();
  const [skipList, setSkipList] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState([]);
  const [gridType, setGridType] = useState(() => {
    return window.innerWidth < 640 ? 1 : 3;
  });

  const [query, setQuery] = useState('');

  const searchedSkips = (value) => {

    let filteredData = []
    if (value) {
      filteredData = skipList.filter((item) => {
        const searchString = value.toLowerCase();
        return (
          item.size.toString().includes(searchString) ||
          item.price_before_vat.toString().includes(searchString) ||
          item.postcode.toLowerCase().includes(searchString)
        );
      });
    }
    else filteredData = skipListApi
    setSkipList(filteredData);
  }


  useEffect(() => {
    dispatch(fetchSkipList());
  }, [dispatch]);
  useEffect(() => {
    if (skipListApi) { setSkipList(skipListApi); }
  }, [skipListApi]);
  useEffect(() => {
    if (selectedSkipApi) { setSelectedSkip(selectedSkipApi); }
  }, [selectedSkipApi]);
  const handleClick = () => alert('Butona tıklandı!');
  return (
    <React.Fragment>
      <div className="page-content pb-60 lg:pb-28 xl:pb-28">

        <div className="prose max-w-full mx-auto">
          <h3 >Choose Your Skip Size</h3>
          <h6>Select the skip size that best suits your needs</h6>
        </div>
        <Card className="p-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pl-4 pr-4 pt-4 gap-4">

            <div className="flex items-center border rounded-md pl-2 w-full sm:w-auto flex-1">
              <FaSearch
                className="text-gray-500 mr-2 cursor-pointer"
                onClick={() => searchedSkips(query)}
              />

              <input
                type="text"
                placeholder="Ara..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); searchedSkips(e.target.value) }}
                className="border p-2 w-full"
              />
            </div>
            <div className="hidden sm:flex justify-end gap-2">
              <button onClick={() => setGridType(1)} className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaGripLines size={20} />
              </button>
              <button onClick={() => setGridType(2)} className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaGripVertical size={20} />
              </button>
              <button onClick={() => setGridType(3)} className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaEllipsisH size={20} />
              </button>
              <button onClick={() => setGridType(4)} className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FourDotsHorizontal size={20} />
              </button>
            </div>
          </div>
        </Card>


        {skipList && (
          <div
            className={`grid gap-6 pt-5 ${gridType === 1
              ? "grid-cols-1"
              : gridType === 2
                ? "grid-cols-2"
                : gridType === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
              }`}
          >
            {skipList.map((skip, key) => (
              <SkipListGrid skip={skip} handleClick={handleClick} />
            ))}
          </div>
        )}
      </div>
      {selectedSkip.id && (
        <SelectedSkipCard next={onNext} back={onBack} skip={selectedSkip} />
      )}
    </React.Fragment>
  );
}

export default SelectSkip;