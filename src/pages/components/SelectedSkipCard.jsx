import React, { useEffect, useMemo, useState } from "react";
import { formatCurrency } from "../../helpers/currencyFormatter";

const SelectedSkipCard = ({ skip, next, back }) => {

  return (
    <React.Fragment>
      <div className="fixed bottom-1 bg-primary-light left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-white shadow-lg rounded-2xl p-4 z-50">
        <p className="text-xs mb-5">
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </p>

        <div className="flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-4">

          <div className="flex pl-4 items-center gap-4 flex-wrap">
            <span className="text-lg font-semibold">{skip.size} Yard Skip</span>
            <h4 className="text-lg text-primary font-bold">
              {formatCurrency(skip.price_before_vat, "GBP")}
            </h4>
            <p>{skip.hire_period_days} day hire</p>
          </div>

          <div className="flex  gap-2 sm:ml-auto w-full sm:w-auto">
            <button className="bg-dark text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto" onClick={back}>
              Back
            </button>
            <button
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
              onClick={next}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default SelectedSkipCard;