import Paper from '@mui/material/Paper'

import logoImg from '../assets/logo.png'

export default function SideNavigation() {
  return (
    <Paper
      className='relative overflow-hidden w-20 h-full border-r flex flex-col items-center'
      elevation={0}
      square
    >
      <div className='mt-4'>
        <img src={logoImg} alt='Shared Memoriess' className='h-8 w-8' />
      </div>
    </Paper>
  )
}
