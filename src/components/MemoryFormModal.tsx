import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Modal, FormControl, TextField, Button } from '@mui/material'

import type { MemoryType } from '../types/app'

type MemoryFormModalProps = {
  open: boolean
  onClose: () => void
  onSave: (memory: MemoryType) => Promise<void>
  memoryFormData: MemoryType
}

type Inputs = {
  title: string
  date: string
  content: string
}

/**
 * Helper function. Can be reused in other components if moved to a shared file.
 */
const formatTimestampToDateValue = (timestamp: number) => {
  return new Date(timestamp).toISOString().split('T')[0]
}

export default function MemoryFormModal(props: MemoryFormModalProps) {
  const { memoryFormData: initialData, onClose, onSave } = props

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: initialData.title,
      date: formatTimestampToDateValue(initialData.timestamp),
      content: initialData.content,
    },
  })

  const isNewMemory = !initialData.id

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const memory: MemoryType = {
      ...initialData,
      title: data.title,
      timestamp: new Date(data.date).getTime(),
      content: data.content,
    }
    await onSave(memory)
    onClose()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby='Memory Form'
      aria-describedby='Memory Form Modal'
    >
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className='p-2 w-96 bg-white'>
          <h2 className='text-2xl font-semibold mb-6'>
            {isNewMemory ? 'Add' : 'Edit'} Memory
          </h2>
          <Controller
            name='title'
            control={control}
            defaultValue={props.memoryFormData.title}
            render={({ field }) => (
              <FormControl className='w-full !mb-4'>
                <TextField id='memory-title' label='Title' {...field} />
              </FormControl>
            )}
          />
          <Controller
            name='content'
            control={control}
            defaultValue={props.memoryFormData.date}
            render={({ field }) => (
              <FormControl className='w-full !mb-4'>
                <TextField
                  id='memory-content'
                  label='Content'
                  multiline
                  rows={2}
                  maxRows={4}
                  {...field}
                />
              </FormControl>
            )}
          />
          <Controller
            name='date'
            control={control}
            defaultValue={props.memoryFormData.content}
            render={({ field }) => (
              <FormControl className='w-full !mb-4'>
                <TextField
                  id='memory-date'
                  label='Date'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...field}
                />
              </FormControl>
            )}
          />
          <div className='flex justify-end'>
            <Button
              variant='outlined'
              color='primary'
              className='!mr-2'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button type='submit' variant='contained' color='primary'>
              {isNewMemory ? 'Add' : 'Save'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
