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
  name: string
  date: string
  description: string
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
      name: initialData.name,
      date: formatTimestampToDateValue(initialData.timestamp),
      description: initialData.description,
    },
  })

  const isNewMemory = !initialData.id

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const memory: MemoryType = {
      ...initialData,
      name: data.name.trim(),
      timestamp: new Date(data.date).getTime(),
      description: data.description.trim(),
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
            name='name'
            control={control}
            rules={{
              required: 'Name is required',
              validate: (value) =>
                value.trim() !== '' ||
                'Name cannot be empty or contain only spaces',
            }}
            render={({ field }) => (
              <FormControl fullWidth margin='normal'>
                <TextField
                  id='form--memory-name'
                  label='Name'
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ''}
                  {...field}
                />
              </FormControl>
            )}
          />
          <Controller
            name='description'
            control={control}
            rules={{
              required: 'Description is required',
              validate: (value) =>
                value.trim() !== '' ||
                'Content cannot be empty or contain only spaces',
            }}
            render={({ field }) => (
              <FormControl fullWidth margin='normal'>
                <TextField
                  id='form--memory-description'
                  label='Description'
                  multiline
                  rows={2}
                  error={!!errors.description}
                  helperText={
                    errors.description ? errors.description.message : ''
                  }
                  {...field}
                />
              </FormControl>
            )}
          />
          <Controller
            name='date'
            control={control}
            rules={{ required: 'Date is required' }}
            render={({ field }) => (
              <FormControl fullWidth margin='normal'>
                <TextField
                  id='form--memory-date'
                  label='Date'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.date}
                  helperText={errors.date ? errors.date.message : ''}
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
