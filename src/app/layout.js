

import Cube from '../../components/Cube/Cube'
import Header from '../../components/Header/Header'
import Main from '../../components/main/Main'
import './globals.css'



export const metadata = {
  title: 'Xzect - Revolutionizing Technology',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <hr className="horizontal-line"/>
        <Main/>
        <Cube/>

      
      
      
      </body>
    </html>
  )
}
