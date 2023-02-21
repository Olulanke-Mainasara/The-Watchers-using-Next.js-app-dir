import React from 'react'

function PWithAfter({ after, text}) {
  return (
    <p className={`relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-2xl allT:after:text-sm after:content-['${after}']`}>{text}</p>
  )
}

export default PWithAfter