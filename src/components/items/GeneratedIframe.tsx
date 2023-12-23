import React from 'react'
import ExampleToGenerate from './ExampleToGenerate'

type GeneratedIframeProps = {
  timedHtmlCode: string | unknown
}

const GeneratedIframe: React.FC<GeneratedIframeProps> = ({timedHtmlCode}) => {
  return (
    <>
      {timedHtmlCode ? (
        <div className="h-[72vh]">
          <iframe
            className='w-full h-full'
            srcDoc={
            `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <title>CodePen - Tailwind CSS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
              </head>
              <body>
                ${timedHtmlCode}
              </body>
            </html>`
            }
          />
        </div>
      ) : (
      <>
        <div className='flex flex-col justify-between h-[70vh]'>
          <ExampleToGenerate />
        </div>
      </> 
      )}
    </>
  )
}

export default GeneratedIframe