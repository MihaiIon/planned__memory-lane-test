import React from 'react'

import { IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'

import MemoryCard from './MemoryCard'

import type { MemoryWithUserType, MemoryType } from '../types/app'

type MemoryListProps = {
  memories: MemoryWithUserType[]
  onAdd: (memory: Partial<MemoryType>) => void
  onEdit: (memory: MemoryType) => void
  onDelete: (memoryId: number) => void
  readOnly?: boolean
}

const sortByTimestampAscending = (
  a: MemoryWithUserType,
  b: MemoryWithUserType
) => a.timestamp - b.timestamp

const MemoryList: React.FC<MemoryListProps> = ({
  memories,
  onAdd,
  onEdit,
  onDelete,
  readOnly = false,
}) => {
  return (
    <div>
      {memories.sort(sortByTimestampAscending).map((memory, index) => (
        <React.Fragment key={`${memory.timestamp}-${memory.id}`}>
          <MemoryCard
            memory={memory}
            onEdit={onEdit}
            onDelete={onDelete}
            readOnly={readOnly}
          />
          {
            <div className='text-center my-3'>
              {!readOnly && (
                <IconButton
                  aria-label='add-memory'
                  onClick={() =>
                    onAdd({
                      timestamp:
                        index !== memories.length - 1
                          ? memory.timestamp
                          : new Date().getTime(),
                    })
                  }
                  className='text-center !text-gray-400'
                >
                  <Add />
                </IconButton>
              )}
            </div>
          }
        </React.Fragment>
      ))}
    </div>
  )
}

export default MemoryList
