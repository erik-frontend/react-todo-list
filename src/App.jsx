import Footer from "./Footer"
import Header from "./header/Header"
import Content from "./content/Content"

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>My First HomeWork React</h1>
          <Content/>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
