import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
type GeneratedCodeProps = {
  htmlCode: string
}

const GeneratedCode: React.FC<GeneratedCodeProps> = ({htmlCode}) => {
  return (
    <>
      <CopyBlock 
        text={htmlCode}
        language="javascript"
        showLineNumbers={true}
        wrapLongLines
        theme={dracula}
      />
    </>
  )
}

export default GeneratedCode