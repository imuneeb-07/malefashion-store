import React from 'react'

const Scrolleffect = () => {
  return (

    <div>
      <h3 className='text-center mt-8 text-blue-500 text-lg'>Brand Partners</h3>
    <div className="relative max-w-3xl   mx-auto overflow-hidden mt-8">
      {/* Fading overlay on the left */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      {/* Fading overlay on the right */}
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      
      <div className="whitespace-nowrap  animate-scroll infinite-scroll">
        <img  src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F1.webp&w=256&q=75" alt="Logo 1" className="inline-block  w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F2.webp&w=256&q=75" alt="Logo 2" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F3.webp&w=256&q=75" alt="Logo 3" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F4.webp&w=256&q=75" alt="Logo 4" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F5.webp&w=256&q=75" alt="Logo 5" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F6.webp&w=256&q=75" alt="Logo 5" className="inline-block w-48 mx-4" />
        {/* Repeat the logos to ensure continuity */}
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F7.webp&w=256&q=75" alt="Logo 1" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F8.webp&w=256&q=75" alt="Logo 2" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F9.webp&w=256&q=75" alt="Logo 3" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F10.webp&w=256&q=75" alt="Logo 3" className="inline-block w-48 mx-4" />
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Fpartners%2F11.webp&w=256&q=75" alt="Logo 3" className="inline-block w-48 mx-4" />
        {/* Add more logos or repeat as needed */}
      </div>
    </div>
    </div>
  )
}

export default Scrolleffect;
