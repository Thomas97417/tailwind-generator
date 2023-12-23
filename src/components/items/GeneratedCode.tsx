type GeneratedCodeProps = {
  htmlCode: string
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { magula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from '../ui/button';

const GeneratedCode: React.FC<GeneratedCodeProps> = ({htmlCode}) => {
  const CopyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
  }
  return (
    <>
    <div className='w-full flex flex-col'>
      <Button className='mb-2 text-center' onClick={CopyToClipboard}>Copy</Button>
      <SyntaxHighlighter language="javascript" style={magula} wrapLines={true} showLineNumbers={true} className="h-[67vh]">
        {htmlCode}
      </SyntaxHighlighter>
    </div>
    </>
  );
};

export default GeneratedCode;