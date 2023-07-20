import '../styles/globals.css'
import Provider from '../components/Provider'
import Nav from '../components/Nav'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
               
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
