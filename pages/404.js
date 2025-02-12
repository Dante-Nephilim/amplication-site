import DocumentHead from "../components/Common/DocumentHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import PageNotFoundIcon from "../public/images/404.png";
import Link from "next/link";

const errorPage = () => {
  return (
    <>
      <>
        <DocumentHead
          pageTitle="Page Not Found"
          pageDescription="Page Not found"
        />

        <div className='page relative min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[65px] laptop:pt-[143px] bg-purple-dark'>
          <div className='block absolute w-[85%] aspect-square bottom-0 left-0 translate-x-[-50%] translate-y-[50%] rounded-[50%] bg-pink-bright opacity-20 blur-[200px] laptop:blur-[500px] z-10 pointer-events-none'></div>
          <Header/>

          <main className="w-full bg-dark-black-100 font-poppins overflow-hidden my-auto py-8">
            <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop'>
              <div className='max-w-[670px] mx-auto'>
                <Image src={PageNotFoundIcon} alt='404' />
              </div>
              <div className='flex flex-col justify-start items-stretch max-w-[410px] mx-auto px-4'>
                <h3 className='w-full text-lg text-white text-center mb-4'>
                  <strong className='block w-full font-extrabold'>You broke the internet, again!</strong> not really, that was kim k.
                </h3>
                <Link href='/'>
                  <a className='flex justify-center items-center mx-auto py-1.5 px-3 border rounded border-white text-white font-poppins font-medium text-center text-xs'>
                    Back to Homepage
                  </a>
                </Link>
              </div>
            </div>
          </main>

          <Footer
            compactView={true}
          />
        </div>
      </>
    </>
  )
}

export default errorPage;