import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const page = () => {
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
              <Link href="#events">
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
      <p className="m-5 h3-medium">Get Started</p>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={600}
            height={600}
            className="max-h [70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Create your Dream Website with an AI Assistant</h1>
            <p className="p-regular-20 md:p-regular-24">
              Tell us what you want and we will generate a website for you.
              Refine, Adjust, and Customize your website with our AI Assistant.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Try Now
              </Link>
            </Button>
          </div>

          
        </div>
      </section>
      
    </>
  )
}

export default page