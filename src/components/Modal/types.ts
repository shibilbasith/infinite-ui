// type.ts
import { type ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  title?: string
  children: ReactNode
  footer?: ReactNode
  size?: "small" | "medium" | "large" | "extra-large"
  variant?: "default" | "centered" | "drawer" | "fullscreen"
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  centered?: boolean
  fullScreen?: boolean
  className?: string
  overlayClassName?: string
  contentClassName?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}
