import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkipList } from '../store/skip/skipSlice';
import Card from "../components/CardComponent";
import SkipListGrid from "./components/SkipListGrid";
import SelectedSkipCard from "./components/SelectedSkipCard";

import { FaGripLines, FaGripVertical, FaEllipsisH } from 'react-icons/fa';
import FourDotsHorizontal from "../components/icons/FourDots"
const SelectSkip = ({ onNext, onBack }) => {
  const skipListApi = useSelector(state => state.skip?.skipList);
  const selectedSkipApi = useSelector(state => state.skip?.selectedSkip);
  const dispatch = useDispatch();
  const [skipList, setSkipList] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState([]);
  const [gridType, setGridType] = useState(3);

  useEffect(() => {
    dispatch(fetchSkipList());
  }, [dispatch]);
  useEffect(() => {
    if (skipListApi) { setSkipList(skipListApi); }
  }, [skipListApi]);

  useEffect(() => {
    console.log(selectedSkipApi)
    if (selectedSkipApi) { setSelectedSkip(selectedSkipApi); }
  }, [selectedSkipApi]);
  const handleClick = () => alert('Butona tıklandı!');
  return (
    <React.Fragment>
      <div className="page-content pb-40 lg:pb-28 xl:pb-28">

        <div className="prose max-w-full mx-auto">
          <h3 >Choose Your Skip Size</h3>
          <h6>Select the skip size that best suits your needs</h6>
        </div>
        <div className="hidden sm:flex justify-end gap-2 p-4">
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
        {skipList && (
          <div className={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-" + gridType + " gap-6 p-4"}>
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