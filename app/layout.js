import '@styles/globals.css'
import Provider from '@components/Provider'
import Nav from '@components/Nav'

export const metadata = {
  title: 'GitArch',
  description: 'Discover and access GitHub user accounts instantly with Arc',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <Provider>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </body>
        </Provider>
    </html>
  )
}

export default RootLayout

