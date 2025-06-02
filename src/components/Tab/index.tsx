// Tab.tsx
import React, { useState } from "react";
import "./Tab.css";
import { type TabProps } from "./types";

const Tab: React.FC<TabProps> = ({
  tabs,
  defaultActiveTab,
  onChange,
  variant = "default",
  size = "medium",
  position = "horizontal",
  fullWidth = false,
  disabled = false,
  className = "",
  tabsClassName = "",
  contentClassName = ""
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.key);

  const handleTabClick = (tabKey: string) => {
    if (disabled) return;
    const tab = tabs.find(t => t.key === tabKey);
    if (tab?.disabled) return;

    setActiveTab(tabKey);
    onChange?.(tabKey);
  };

  const activeTabContent = tabs.find(tab => tab.key === activeTab)?.content;

  return (
    <div
      className={`
        infinite-tab-container 
        infinite-tab-${variant} 
        infinite-tab-${size}
        infinite-tab-${position}
        ${fullWidth ? "infinite-tab-full-width" : ""}
        ${disabled ? "infinite-tab-disabled" : ""}
        ${className}
      `.trim()}
    >
      <div
        className={`infinite-tab-list infinite-tab-list-${position} ${tabsClassName}`}
        role="tablist"
        aria-orientation={position}
      >
        {tabs.map((tab) => (
          <div
            key={tab.key}
            // type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`infinite-tab-panel-${tab.key}`}
            id={`infinite-tab-${tab.key}`}
            className={`
              infinite-tab-item
              ${activeTab === tab.key ? "infinite-tab-item-active" : ""}
              ${tab.disabled ? "infinite-tab-item-disabled" : ""}
            `.trim()}
            onClick={() => { handleTabClick(tab.key); }}
            // disabled={disabled || tab.disabled}
          >
            {tab.icon && (
              <span className="infinite-tab-item-icon">
                {tab.icon}
              </span>
            )}
            <span className="infinite-tab-item-label">
              {tab.label}
            </span>
            {tab.badge && (
              <span className="infinite-tab-item-badge">
                {tab.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        className={`infinite-tab-content ${contentClassName}`}
        role="tabpanel"
        id={`infinite-tab-panel-${activeTab}`}
        aria-labelledby={`infinite-tab-${activeTab}`}
      >
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tab;
