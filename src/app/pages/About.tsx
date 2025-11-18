export default function About() {
  return (
    <div className='flex items-center justify-center '>
      <div className='flex flex-col flex-wrap items-start w-full md:w-[75vw] max-w-screen-md px-6 space-y-4 break-words'>
        <h1 className='font-bold text-[4rem] text-gray-900 leading-[1] mb-4'>About Us</h1>
        <p className='text-[1.2rem] text-gray-900'>
          Berkeley Mobile is a native iOS application designed to provide UC Berkeley students with
          quick access to essential campus information — all in one place. The app is organized into
          four main tabs: Home, Events, Safety, and Resources.
        </p>
        <p className='text-[1.2rem] text-gray-900'>
          On the Home tab, students can explore points of interest across campus using an
          interactive map, and find detailed information about libraries, gyms, and dining halls.
          Real-time gym occupancy percentages are also available directly within the app or via a
          convenient Home Screen widget.
        </p>
        <p className='text-[1.2rem] text-gray-900'>
          The Events tab aggregates academic and campus-wide events from the official{" "}
          <a
            href='https://events.berkeley.edu/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1'
          >
            Berkeley Events
          </a>{" "}
          website, making it easy for users to browse upcoming happenings and seamlessly add them to
          their Apple Calendar.
        </p>
        <p className='text-[1.2rem] text-gray-900'>
          The Safety tab compiles all recent WarnMe alerts in a clean, easy-to-read layout. Each
          alert can be viewed on an interactive map that provides geo-spatial context — helping
          users understand where incidents occurred relative to their current location and other
          alerts.
        </p>
        <p className='text-[1.2rem] text-gray-900'>
          Lastly, the Resources tab features a curated collection of links chosen by the Berkeley
          Mobile team, covering topics such as wellbeing, campus life, and academics, ensuring
          students have quick access to trusted support and information.
        </p>
      </div>
    </div>
  );
}
