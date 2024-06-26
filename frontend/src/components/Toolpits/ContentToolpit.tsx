
const ContentToolpit = ({children, isShown}: {children: JSX.Element; isShown: boolean}) => {
  return (
    <div className={`flex flex-col justify-around bg-fore-pri p-2 sm:hidden ${isShown ? 'visible' : 'hidden'} absolute mt-1 top-full right-0  rounded right-0 z-10`}>
        {children}
    </div>
  )
}

export default ContentToolpit