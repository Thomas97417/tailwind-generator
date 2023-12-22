import React from 'react'

type GeneratedIframeProps = {
  timedHtmlCode: string | unknown
}

const GeneratedIframe: React.FC<GeneratedIframeProps> = ({timedHtmlCode}) => {
  return (
    <>
      {timedHtmlCode ? (
        <iframe 
          className="w-full not-daisy"
          height="650px"
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
      ) : <p className="h3-medium text-center justify-center">Tell me something to generate.</p>}
    </>
  )
}

export default GeneratedIframe