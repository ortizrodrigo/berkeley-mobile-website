import { ContactLink } from "../../components";

export default function Contact() {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col flex-wrap items-start w-full md:w-[75vw] max-w-screen-md px-6 space-y-4 break-words'>
        <h1 className='font-bold text-[4rem] text-gray-900 leading-[1] mb-4'>Contact Us</h1>

        <ContactLink
          text='Email:'
          linkText='berkeleymobile@asuc.org'
          href='mailto:berkeleymobile@asuc.org'
          target='_self'
        />

        <ContactLink
          text='Join Berkeley Mobile:'
          linkText='Apply here'
          href='https://docs.google.com/forms/d/e/1FAIpQLSfa7IntnIQYDDcXwe2xVaP2f-xOuxRoitoz4YOt97dHPZ5slg/viewform'
        />
      </div>
    </div>
  );
}
