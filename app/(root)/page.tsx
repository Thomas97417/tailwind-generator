"use client"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const page = () => {
  const [apiKey, setApiKey] = useState('');
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Create your Dream Website with an AI Assistant</h1>
            <p className="p-regular-20 md:p-regular-24">
              Tell us what you want and we will generate a website for you.
              Refine, Adjust, and Customize your website with our AI Assistant.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#get-started">
                Try Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={600}
            height={600}
            className="max-h [70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <p id="get-started" className="m-5 h3-medium text-center">Get Started by generating your own API Key</p>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <Image 
            src="/assets/get_started/start-1.png"
            alt="hero"
            width={500}
            height={304}
            className="max-h [70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
          <div className="flex flex-col justify-center gap-8">
            <h3 className="h3-medium">Create & Log to your OpenAI account</h3>
            <p className="p-regular-20 md:p-regular-24">
              Start by creating and log to your OpenAI account.<br />
              Use this link.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="https://openai.com/" target="__blank">
                To OpenAI
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* GET STARTED 2 */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h3 className="h3-medium">Click on the API section</h3>
            <p className="p-regular-20 md:p-regular-24">
              Go to the API section of your OpenAI account.
            </p>
          </div>
          <Image 
            src="/assets/get_started/start-2.png"
            alt="hero"
            width={500}
            height={304}
            className="max-h [70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
          
        </div>
      </section>
      {/* GET STARTED 3 */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <Image 
            src="/assets/get_started/start-3.png"
            alt="hero"
            width={500}
            height={304}
            className="max-h [70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
          <div className="flex flex-col justify-center gap-8">
            <h3 className="h3-medium">Click on the API section</h3>
            <p className="p-regular-20 md:p-regular-24">
              In the API Key section, click on "Create a new secret key".<br />
              Copy your API Key and paste it in the input below.
              The key will be stored in your browser's local storage and only used to generate your website.
            </p>
          </div>
        </div>
      </section>
      {/* KEY INPUT */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="flex flex-row justify-center">
        <form onSubmit={async (e) => {
          e.preventDefault();
          // Store the API key in localStorage
          localStorage.setItem('apiKey', apiKey);
          const response = await fetch('/api/useOpenAI', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ apiKey }),
          });
          console.log(response);
        }}>
          <label htmlFor="">Renseignez votre API Key :</label>
          <input type="text" placeholder="Type your key" className="mt-2 ml-2" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          <Button className="button w-full sm:w-fit ml-2" type="submit">
            Store key
          </Button>
        </form>
        </div>
      </section>
    </>
  )
}

export default page