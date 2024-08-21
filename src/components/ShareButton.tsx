import { useState } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { Share } from '@mui/icons-material'

export default function ShareButton() {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [tooltipText, setTooltipText] = useState('')

  const handleCopyShareLink = () => {
    const currentUrlRoot = window.location.href.split('?')[0]
    const sharedUrl = `${currentUrlRoot}?shared=true`

    navigator.clipboard
      .writeText(sharedUrl)
      .then(() => {
        setTooltipText('Copied!')
        setTooltipOpen(true)
        setTimeout(() => {
          setTooltipOpen(false)
        }, 1500)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <Tooltip
      placement='right'
      title={tooltipText}
      open={tooltipOpen}
      disableHoverListener
      disableFocusListener
      disableTouchListener
    >
      <IconButton
        aria-label='share'
        color='primary'
        className='!ml-4'
        sx={{
          border: '1px solid currentColor',
          borderRadius: '50%',
        }}
        onClick={handleCopyShareLink}
      >
        <Share />
      </IconButton>
    </Tooltip>
  )
}
