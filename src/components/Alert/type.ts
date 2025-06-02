export interface AlertProps {
  message: string
  type?: "success" | "error" | "warning" | "info"
  className?: string
}
