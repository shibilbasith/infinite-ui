// Modal.tsx
import React, { useEffect } from "react";
import "./Modal.css";
import { type ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClose,
  title,
  children,
  footer,
  size = "medium",
  variant = "default",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  centered = true,
  fullScreen = false,
  className = "",
  overlayClassName = "",
  contentClassName = "",
  headerClassName = "",
  bodyClassName = "",
  footerClassName = ""
}) => {
  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => { document.removeEventListener("keydown", handleEscape); };
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose?.();
    }
  };

  return (
    <div
      className={`
        infinite-modal-overlay
        ${centered ? "infinite-modal-overlay-centered" : ""}
        ${overlayClassName}
      `.trim()}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "infinite-modal-title" : undefined}
    >
      <div
        className={`
          infinite-modal
          infinite-modal-${size}
          infinite-modal-${variant}
          ${fullScreen ? "infinite-modal-fullscreen" : ""}
          ${className}
        `.trim()}
        onClick={(e) => { e.stopPropagation(); }}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={`infinite-modal-header ${headerClassName}`}>
            {title && (
              <h2 id="infinite-modal-title" className="infinite-modal-title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="infinite-modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <span className="infinite-modal-close-icon">×</span>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className={`infinite-modal-body ${bodyClassName} ${contentClassName}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className={`infinite-modal-footer ${footerClassName}`}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
