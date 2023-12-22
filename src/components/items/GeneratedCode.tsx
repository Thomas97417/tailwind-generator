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
    <div className='h-45'>
      <Button className='mb-2' onClick={CopyToClipboard}>Copy</Button>
      <SyntaxHighlighter language="javascript" style={magula} wrapLines={true} showLineNumbers={true}>
        {htmlCode}
      </SyntaxHighlighter>
    </div>
    </>
  );
};

export default GeneratedCode;