interface StackSidebarProps {
  selectedTechs: Technology[];
  onRemoveTech: (id: string) => void;
  onClearAll: () => void;
}

export default function StackSidebar({ selectedTechs, onRemoveTech, onClearAll }: StackSidebarProps) {
  return (
    <div>StackSidebar</div>
  )
}
