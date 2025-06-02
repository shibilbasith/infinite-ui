import React, { useState, useRef, useEffect, useCallback } from "react";
import { type PopoverProps } from "./types";
import "./Popover.css";

const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  trigger = "click",
  placement = "bottom",
  variant = "default",
  size = "medium",
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  offset = 8,
  showArrow = true,
  closeOnClickOutside = true,
  closeOnEscape = true,
  className = "",
  contentClassName = "",
  delay = 0,
  hideDelay = 0,
  id,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const hideTimeoutRef = useRef<NodeJS.Timeout>();

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const popoverId = id || `popover-${Math.random().toString(36).substr(2, 9)}`;

  const setOpen = useCallback((open: boolean) => {
    if (disabled) return;

    if (isControlled) {
      onOpenChange?.(open);
    } else {
      setInternalOpen(open);
    }
  }, [disabled, isControlled, onOpenChange]);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case "top-start":
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.left;
        break;
      case "top-end":
        top = triggerRect.top - contentRect.height - offset;
        left = triggerRect.right - contentRect.width;
        break;
      case "bottom":
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case "bottom-start":
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case "bottom-end":
        top = triggerRect.bottom + offset;
        left = triggerRect.right - contentRect.width;
        break;
      case "left":
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.left - contentRect.width - offset;
        break;
      case "right":
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.right + offset;
        break;
    }

    // Boundary detection and adjustment
    if (left < 0) left = 8;
    if (left + contentRect.width > viewportWidth) left = viewportWidth - contentRect.width - 8;
    if (top < 0) top = 8;
    if (top + contentRect.height > viewportHeight) top = viewportHeight - contentRect.height - 8;

    setPosition({ top, left });
  }, [placement, offset]);

  const handleShow = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = undefined;
    }

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => { setOpen(true); }, delay);
    } else {
      setOpen(true);
    }
  }, [delay, setOpen]);

  const handleHide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    if (hideDelay > 0) {
      hideTimeoutRef.current = setTimeout(() => { setOpen(false); }, hideDelay);
    } else {
      setOpen(false);
    }
  }, [hideDelay, setOpen]);

  const handleTriggerClick = () => {
    if (trigger === "click") {
      setOpen(!isOpen);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (trigger === "hover") {
      handleShow();
    }
  };

  const handleTriggerMouseLeave = () => {
    if (trigger === "hover") {
      handleHide();
    }
  };

  const handleTriggerFocus = () => {
    if (trigger === "focus") {
      handleShow();
    }
  };

  const handleTriggerBlur = () => {
    if (trigger === "focus") {
      handleHide();
    }
  };

  const handleContentMouseEnter = () => {
    if (trigger === "hover" && hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = undefined;
    }
  };

  const handleContentMouseLeave = () => {
    if (trigger === "hover") {
      handleHide();
    }
  };

  // Click outside handler
  useEffect(() => {
    if (!isOpen || !closeOnClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        contentRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, [isOpen, closeOnClickOutside, setOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => { document.removeEventListener("keydown", handleEscape); };
  }, [isOpen, closeOnEscape, setOpen]);

  // Position calculation
  useEffect(() => {
    if (isOpen) {
      calculatePosition();

      const handleResize = () => { calculatePosition(); };
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleResize);
      };
    }
    return undefined;
  }, [isOpen, calculatePosition]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const triggerClasses = [
    "popover-trigger",
    disabled ? "popover-trigger--disabled" : "",
    className
  ].filter(Boolean).join(" ");

  const contentClasses = [
    "popover-content",
    `popover-content--${variant}`,
    `popover-content--${size}`,
    `popover-content--${placement}`,
    showArrow ? "popover-content--with-arrow" : "",
    contentClassName
  ].filter(Boolean).join(" ");

  return (
    <>
      <div
        ref={triggerRef}
        className={triggerClasses}
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
        onFocus={handleTriggerFocus}
        onBlur={handleTriggerBlur}
        aria-describedby={isOpen ? popoverId : undefined}
        {...props}
      >
        {children}
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          className={contentClasses}
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            zIndex: 1000
          }}
          id={popoverId}
          role="tooltip"
          onMouseEnter={handleContentMouseEnter}
          onMouseLeave={handleContentMouseLeave}
        >
          {showArrow && <div className="popover-arrow" />}
          <div className="popover-inner">
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Popover;
