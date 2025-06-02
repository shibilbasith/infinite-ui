import React, { useState } from "react";
import { type InfiniteAccordionItemProps, type InfiniteAccordionProps } from "./types";
import "./Accordion.css";

const InfiniteAccordionItem: React.FC<InfiniteAccordionItemProps> = ({
  item,
  isOpen,
  onToggle
}) => {
  return (
    <div className="infinite-accordion-item">
      <button
        className="infinite-accordion-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`infinite-accordion-content-${item.id}`}
      >
        <span>{item.title}</span>
        {/* <ChevronDown

          size={20}
        /> */}
        <div style={{ width: "30px", height: "30px" }} className={`infinite-accordion-icon ${isOpen ? "infinite-accordion-icon-open" : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g></svg>
        </div>
      </button>
      <div
        id={`infinite-accordion-content-${item.id}`}
        className={`infinite-accordion-content ${isOpen ? "infinite-accordion-content-open" : ""}`}
        role="region"
        aria-labelledby={`infinite-accordion-header-${item.id}`}
      >
        <div className="infinite-accordion-body">
          {item.content}
        </div>
      </div>
    </div>
  );
};

// Main Accordion Component
const InfiniteAccordion: React.FC<InfiniteAccordionProps> = ({
  items,
  allowMultiple = false,
  className = ""
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev => {
        const newOpenItems = new Set(prev);
        if (newOpenItems.has(id)) {
          newOpenItems.delete(id);
        } else {
          newOpenItems.add(id);
        }
        return newOpenItems;
      });
    } else {
      setOpenItems(prev => {
        return prev.has(id) ? new Set() : new Set([id]);
      });
    }
  };

  return (
    <div className={`infinite-accordion ${className}`}>
      {items.map((item) => (
        <InfiniteAccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => { toggleItem(item.id); }}
        />
      ))}
    </div>
  );
};

export default InfiniteAccordion;
