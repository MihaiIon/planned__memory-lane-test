import React from 'react'

import { IconButton } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'

type BackToTopButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>
}

function BackToTopButton({ targetRef }: BackToTopButtonProps) {
  const handleScrollToView = () => {
    // Use the reference to call scrollIntoView with an offset
    targetRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <IconButton
      aria-label='scroll-to-top'
      className='!fixed bottom-16 right-16'
      onClick={() => handleScrollToView()}
      size='large'
      sx={{
        border: '1px solid currentColor',
        borderRadius: '50%',
      }}
    >
      <KeyboardArrowUp />
    </IconButton>
  )
}

export default BackToTopButton
