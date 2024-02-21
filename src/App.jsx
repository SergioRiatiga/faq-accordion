import FaqCard from './components/FaqCard'

function App() {
  return (
    <div className='flex h-screen  bg-violet-100'>
      <div className='hidden sm:block'>
        <img
          className='absolute top-0 w-full'
          src='../images/background-pattern-desktop.svg'
          alt=''
        />
      </div>
      <div className='sm:hidden'>
        <img
          className='absolute top-0 w-full'
          src='../images/background-pattern-mobile.svg'
          alt=''
        />
      </div>
      <div className='z-10 flex justify-center items-center w-full'>
        <FaqCard />
      </div>
    </div>
  )
}

export default App
