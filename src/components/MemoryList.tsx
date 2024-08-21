import React from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import MemoryCard from './MemoryCard'
import type { MemoryWithUserType, MemoryType } from '../types/app'

type MemoryListProps = {
  memories: MemoryWithUserType[]
  onEdit: (memory: MemoryType) => void
  onDelete: (memoryId: number) => void
}

const MemoryList: React.FC<MemoryListProps> = ({
  memories,
  onEdit,
  onDelete,
}) => {
  return (
    <div>
      {memories.map((memory, index) => (
        <React.Fragment key={memory.id}>
          <MemoryCard memory={memory} onEdit={onEdit} onDelete={onDelete} />
          {index !== memories.length - 1 && (
            <EllipsisVerticalIcon className='h-6 w-6 text-gray-500 mx-auto my-2' />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default MemoryList
