import { useState } from 'react'
import PageLayout from './components/layout/PageLayout'
import Acceuil from './pages/Acceuil'
import Address from './pages/Address'
import Preference from './pages/Preference'

export default function HomePage() {
  const [etape, setEtape] = useState(1)
  let page;

  if (etape === 1) page = <Acceuil onSuivant={() => { setEtape(2) }} />;
  else if (etape === 2) page = <Address onSuivant={() => { setEtape(3) }} />;
  else if (etape === 3) page = <Preference />;
  else page = <Acceuil onSuivant={() => { setEtape(2) }} />;

  return (
    <PageLayout>
      {page}
    </PageLayout>

  )
}

