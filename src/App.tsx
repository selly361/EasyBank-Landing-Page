import { Header, HeroSection, KeyFeatures, Articles, Footer } from "Components"
import { InstagramIcon } from "Icons"
import { Fragment } from "react"

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <HeroSection />
        <KeyFeatures />
        <Articles />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
