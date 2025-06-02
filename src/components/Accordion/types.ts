export interface InfiniteAccordionItem {
  id: string
  title: string
  content: string | React.ReactNode
}

export interface InfiniteAccordionProps {
  items: InfiniteAccordionItem[]
  allowMultiple?: boolean
  className?: string
}

// Individual Accordion Item Component
export interface InfiniteAccordionItemProps {
  item: InfiniteAccordionItem
  isOpen: boolean
  onToggle: () => void
}
