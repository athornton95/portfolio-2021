import { Container, Footer, Navigation } from '../components'

export default function Custom404() {
  return (
    <>
      <Navigation />
      <Container>
        <div className='text-center pt-40'>
          <h1 className='text-9xl text-textPrimary font-title'>404</h1>
          <p className='text-4xl text-textSecondary font-display mb-12'>Page Not Found</p>
          <a href="/" className='text-textSecondary font-title border border-textPrimary px-6 py-4 rounded-md hover:bg-textPrimary hover:text-bgPrimary'>Go Home</a>
        </div>
      </Container>
    </>
   )
}
