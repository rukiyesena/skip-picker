import React, { useEffect, useMemo, useState } from "react";
import { formatCurrency } from "../../helpers/currencyFormatter";
import Card from "../../components/CardComponent";
import { selectSkip } from "../../store/skip/skipSlice"
import { useSelector, useDispatch } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';

const SkipListGrid = ({ skip }) => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(selectSkip(skip));
  }
  return (
    <React.Fragment>
      <Card onButtonClick={() => onButtonClick()} selected={skip.selected}>
        <div className={`basic-skip theme-skip`}>
          <div className="img-wrapper">
            {skip.size && <label className="unit-label">{skip.size} Yards</label>}
            <ul className="trending-label" style={{ paddingLeft: "0", marginBottom: "0" }}>
              {skip.allowed_on_road == false ? <li className="out_of_stock" style={{ display: "ruby" }}>
                <FaInfoCircle />  Not Allowed On The Road</li> : null}

            </ul>
            {skip.size &&
              <img className="w-full h-48 object-cover"
                src={"https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/"
                  + skip.size + "-yarder-skip.jpg"}
                alt={skip.size} />}
          </div>
          <div className="product-detail">
            <div className="title">{skip.size} Yard Skip</div>
            <h6>{skip.hire_period_days} day hair period</h6>
            <h4 className="digital-price">
              {formatCurrency(skip.price_before_vat, "GBP")}
            </h4>
            <div className="addtocart_btn" style={{ width: "auto" }}>
              <button
                className={`bg-primary text-white px-4 py-2 rounded ${skip.selected ? 'opacity-50' : ''}`}
              >
                {skip.selected ? 'Selected' : 'Select This Skip'}
              </button>

            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default SkipListGrid;