'use client'

import GeneratedCode from "@/src/components/items/GeneratedCode";
import GeneratedIframe from "@/src/components/items/GeneratedIframe";
import { Button } from "@/src/components/ui/button";
import { Sparkles, Trash2 } from "lucide-react";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useEffect, useRef, useState } from "react";

const useTimedState = (state: unknown, delay: number) => {
  const [timedState, setTimedState] = useState(state);
  const lastUpdateRef = useRef(Date.now());

  useEffect(() => {
    if (Date.now() - lastUpdateRef.current > delay) {
      setTimedState(state);
      lastUpdateRef.current = Date.now();
      return;
    }
    const timeout = setTimeout(() => {
      setTimedState(state);
      lastUpdateRef.current = Date.now();
    }, delay - (Date.now() - lastUpdateRef.current));

    return () => clearTimeout(timeout);
    
  }, [state, delay]);
  return timedState
}

export default function Home() {
  const [htmlCode, setHtmlCode] = useState(() => {
    return localStorage.getItem('htmlCode') || '';
  })
  const [isCode, setIsCode] = useState(false)
  const timedHtmlCode = useTimedState(htmlCode, 4000)
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('htmlCode', htmlCode);
    console.log('code : ' + htmlCode)
  }, [htmlCode]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (loading) return;

    const formData = new FormData(event.currentTarget)

    const prompt = formData.get('prompt') as string;

    setLoading(true);
    setHtmlCode('');
    const newMessages: ChatCompletionMessageParam[] = [...messages, {
      content: prompt,
      role: 'user',
    }]

    setMessages(newMessages)

    const result = await fetch('/api/tailwind', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages }),
    })

    const body = result.body;

    if (!body) {
      alert('Something went wrong')
      return;
    }

    const reader = body.getReader();

    let html = ""

    const readChunk = async () => {
      const { done, value } = await reader.read();

      if (done) {
        setLoading(false);
        setMessages(current => {
          const newCurrent = current.filter(c => c.role !== "assistant")
          return [...newCurrent, {
            content: html,
            role: 'assistant',
          }]
        })
        return;
      }

      const chunk = new TextDecoder().decode(value);
      html += chunk;
      setHtmlCode(html)
      await readChunk();
    }

    await readChunk();
  }

  return (
    <main className="h-full flex flex-col px-4 justify-center">
      {loading ? (
        <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
          <progress className="progress w-56 not-daisy"/>
        </div>
      ) : null}

      <div className="mt-5 w-full">
        { isCode ? <GeneratedCode htmlCode={htmlCode} /> : <GeneratedIframe timedHtmlCode={timedHtmlCode} /> }
      </div>

      <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center">
        <div className="p-4 bg-neutral-50 max-w-lg w-full rounded-lg shadow-xl">
          {/* <div className="max-w-full overflow-auto flex flex-col gap-1" style={{maxHeight: 150}}>
            {messages.filter(message => message.role === "user").map((message, index) => (
              <div key={index}><b>You</b> : {String(message.content)}</div>
            ))}
          </div> */}
          <form onSubmit={handleSubmit}>
            <fieldset className="flex gap-4 items-start">
              <textarea name="prompt" className="w-full textarea textarea-primary" />
              <div className="flex flex-col gap-1">
                <button className="btn btn-primary btn-sm" type="submit">
                  <Sparkles size={20} />
                </button>
                <button className="btn btn-neutral btn-sm" type="button" onClick={() => {
                  setMessages([]);
                  setHtmlCode('');
                }}>
                  <Trash2 size={20} />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <Button className="ml-4" onClick={() => setIsCode(!isCode)}>{isCode ? 'Show Generation' : 'Show Code'}</Button>
      </div>
    </main>
  )
}
