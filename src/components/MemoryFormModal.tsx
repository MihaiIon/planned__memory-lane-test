import { useEffect } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import {
  Modal,
  FormControl,
  TextField,
  Button,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { formatTimestampToLocalDateString } from '../utils/dateUtils'

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
      date: formatTimestampToLocalDateString(initialData.timestamp),
      description: initialData.description,
    },
  })

  const isNewMemory = !initialData.id

  // Reset form data when the modal is opened
  useEffect(() => {
    reset({
      name: initialData.name,
      date: formatTimestampToLocalDateString(initialData.timestamp),
      description: initialData.description,
    })
  }, [initialData, reset])

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const [year, month, day] = data.date.split('-').map(Number)
    const memory: MemoryType = {
      ...initialData,
      name: data.name.trim(),
      timestamp: Date.UTC(year, month - 1, day + 1),
      description: data.description.trim(),
    }
    await onSave(memory)
    handleClose()
  }

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby='Memory Form'
      aria-describedby='Memory Form Modal'
    >
      <div className='modal--inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8'>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          style={{ position: 'absolute', top: 20, right: 20 }}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit(onSubmit)} className='p-2 w-120 bg-white'>
          <h2 className='text-3xl font-semibold mb-3'>
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
                'Descripton cannot be empty or contain only spaces',
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
            rules={{
              required: 'Date is required',
              validate: (value) => {
                const inputDate = new Date(value)
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                return inputDate <= today || 'Date cannot be in the future'
              },
            }}
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
          <div className='flex justify-end mt-4'>
            <Button
              variant='outlined'
              color='primary'
              className='!mr-2'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
            >
              {isNewMemory ? 'Add' : 'Save'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
