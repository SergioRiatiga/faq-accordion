import {useState} from 'react'
import dataFaqs from './dataFaqs'

const FaqCard = () => {
  const [selected, setSelected] = useState(null)
  const handleSelection = (getCurrentId) => {
    setSelected(getCurrentId !== selected && getCurrentId)
  }

  return (
    <div className='max-w-xl w-[500px] m-6 bg-white px-6 pt-8 rounded-xl drop-shadow-xl'>
      <header className='flex gap-4 pb-8'>
        <span>
          <img src='../../images/icon-star.svg' alt='' />
        </span>
        <h1 className='text-3xl text-center font-bold'>FAQs</h1>
      </header>
      <section>
        {dataFaqs.map((faq) => (
          <div
            key={faq.id}
            className='border-b cursor-pointer'
            onClick={() => handleSelection(faq.id)}
          >
            <div className='flex py-4 justify-between gap-10'>
              <h2 className='font-semibold text-lg hover:text-fuchsia-600'>
                {faq.question}
              </h2>
              <span className='flex justify-center items-center min-w-8 max-w-8'>
                {selected === faq.id ? (
                  <img
                    src='../../images/icon-minus.svg'
                    alt='minus'
                  />
                ) : (
                  <img src='../../images/icon-plus.svg' alt='plus' />
                )}
              </span>
            </div>
            {selected === faq.id && (
              <p className='text-sm text-neutral-500 pb-4'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default FaqCard
