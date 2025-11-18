export default function Privacy() {
  return (
    <div className='flex items-center justify-center '>
      <div className='flex flex-col flex-wrap items-start w-full md:w-[75vw] max-w-screen-md px-6 space-y-4 break-words'>
        <h1 className='font-bold text-[4rem] text-gray-900 leading-[1] mb-4'>Privacy Policy</h1>
        <p className='text-[1.2rem] text-gray-900'>
          The Berkeley Mobile iOS app is created by the Associated Students of the University of
          California through the Office of the CTO. If you would like a copy of the Berkeley Mobile
          Privacy Policy, please email{" "}
          <a
            href='mailto:octo.berkeleymobile@asuc.org'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1'
          >
            octo.berkeleymobile@asuc.org
          </a>
          .
        </p>
        <h2 className='text-xl font-semibold mt-4'>Data Usage</h2>
        <p className='text-[1.2rem] text-gray-900'>
          We use precise location data only if users enable their location on their iOS device. Your
          location will be used to calculate distance to points of interest, display your location
          on the map, and for other location-based features. We do not collect or retain these data.
          Users can disable location usage for this app within their device's settings.
        </p>
        <p className='text-[1.2rem] text-gray-900'>
          Calendar access will only be used to allow you to add events you select to your calendar.
          We do not collect or retain these data. We request user permission each time this feature
          is used.
        </p>

        <h2 className='text-xl font-semibold mt-4'>Collected Data</h2>
        <p className='text-[1.2rem] text-gray-900'>
          Collected data is used for analytics or diagnostics (e.g. analysis of feature adoption;
          understanding and resolving app crashes). We do not use Apple's Identifier for Advertisers
          (IDFA), and collected data are not tracked or associated with advertising profiles.
        </p>
        <p className='text-[1.2rem] text-gray-900'>
          We use{" "}
          <a
            href='https://firebase.google.com/products/analytics'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1'
          >
            Google Analytics for Firebase
          </a>{" "}
          to collect user interaction data to know how often specific pages of the app are opened,
          or how often specific features of the app are used. Google Analytics also collects coarse
          location data based on anonymized IP addresses. These data are associated with an app
          instance identifier. Demographic information (e.g. age, gender, etc.) are not used or
          collected. Read more about Google's collection policies at{" "}
          <a
            href='https://firebase.google.com/support/privacy#data_processing_information'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1'
          >
            this link.
          </a>
        </p>
      </div>
    </div>
  );
}
