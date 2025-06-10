import React, { useState, useEffect } from "react";

const TabComponent = ({ tabs = [], activeTab: controlledActiveTab, onTabChange }) => {
  const [internalActiveTab, setInternalActiveTab] = useState(null);

  const isControlled = controlledActiveTab !== undefined && onTabChange;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  const handleTabClick = (tab, index) => {
    if (index > activeIndex) return; // Aktif olandan sonraki sekmelere geçişi engelle
    if (isControlled) {
      onTabChange(tab.id);
    } else {
      setInternalActiveTab(tab.id);
    }
  };

  // İlk aktif sekmeyi belirle
  useEffect(() => {
    if (!activeTab && tabs.length > 0) {
      const firstId = tabs[0].id;
      if (isControlled) onTabChange(firstId);
      else setInternalActiveTab(firstId);
    }
  }, [tabs]);

  return (
    <div className="tab-container">
      <div className="tab-headers w-full flex justify-center space-x-4 border-b border-gray-200 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => {
          const isDisabled = index > activeIndex;
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              className="tab-buttons"
              onClick={() => handleTabClick(tab, index)}
              disabled={isDisabled}
              style={{
                opacity: isDisabled ? 0.5 : 1,
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
                cursor: isDisabled ? "not-allowed" : "pointer",
                color: isActive ? "#1E40AF" : "black",
              }}
            >
              {tab.icon}
              {tab.title}
            </button>
          );
        })}
      </div>

      <div className="tab-content" style={{ marginTop: "20px" }}>
        {tabs.map(
          (tab) => tab.id === activeTab && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
