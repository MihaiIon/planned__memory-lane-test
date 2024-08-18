import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Modal, FormControl, TextField, Button } from '@mui/material'

import type { MemoryType } from '../types/app'

type MemoryFormModalProps = {
  open: boolean
  onClose: () => void
  memoryFormData: MemoryType
}

type Inputs = {
  title: string
  date: string
  content: string
}

export default function MemoryFormModal(props: MemoryFormModalProps) {
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      title: props.memoryFormData.title,
      date: props.memoryFormData.date,
      content: props.memoryFormData.content,
    },
  })

  const isNewMemory = !props.memoryFormData.id
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const handleClose = () => {
    reset()
    props.onClose()
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
