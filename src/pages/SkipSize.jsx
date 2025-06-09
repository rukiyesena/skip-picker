import React, { useEffect, useMemo, useState } from "react";
import PostCode from "./PostCode";
import WasteType from "./WasteType";
import SelectSkip from "./SelectSkip";
import PermitCheck from "./PermitCheck";
import ChooseDate from "./ChooseDate";
import Payment from "./Payment"
import TabComponent from "../components/TabComponent";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkipList } from '../store/skip/skipSlice';
import { FaLocationArrow, FaRegTrashAlt, FaShippingFast, FaLock, FaRegCalendarAlt, FaCreditCard } from 'react-icons/fa';
const SkipSizeSelection = () => {
  const [currentTab, setCurrentTab] = useState("selectSkip");
  const skipListApi = useSelector(state => state.skip?.skipList);
  const dispatch = useDispatch();
  const [skipList, setSkipList] = useState([]);

  useEffect(() => {
    dispatch(fetchSkipList());
  }, [dispatch]);
  useEffect(() => {
    if (skipListApi) setSkipList(skipList)
  }, [skipListApi]);

  return (
    <React.Fragment>
      <div className="page-content">
        <TabComponent
          tabs={[
            { id: 'postCode', title: 'Post Code', icon: <FaLocationArrow />, 
              content: <PostCode onNext={() => setCurrentTab('wasteType')}  /> },
            { id: 'wasteType', title: 'Waste Type', icon: <FaRegTrashAlt />, 
              content: <WasteType onNext={() => setCurrentTab('selectSkip')} onBack={() => setCurrentTab('postCode')}/> },
            { id: 'selectSkip', title: 'Select Skip', icon: <FaShippingFast />, 
              content: <SelectSkip onNext={() => setCurrentTab('permitCheck')} onBack={() => setCurrentTab('wasteType')}/> },
            { id: 'permitCheck', title: 'Permit Check', icon: <FaLock />, 
              content: <PermitCheck onNext={() => setCurrentTab('chooseDate')} onBack={() => setCurrentTab('selectSkip')}/> },
            { id: 'chooseDate', title: 'Choose Date', icon: <FaRegCalendarAlt />, 
              content: <ChooseDate onNext={() => setCurrentTab('payment')} onBack={() => setCurrentTab('permitCheck')}/> },
            { id: 'payment', title: 'Payment', icon: <FaCreditCard />, content: <Payment onBack={() => setCurrentTab('chooseDate')}/> },
          ]}
          activeTab={currentTab}
          onTabChange={(id) => setCurrentTab(id)}
        />
      </div>
    </React.Fragment>
  );
}

export default SkipSizeSelection;