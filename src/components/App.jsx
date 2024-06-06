import CTABuyTickets from './CTABuyTickets';
import Header from './Header'
import HomePresentation from './HomePresentation'
import Lines from './Lines'
import InfosCards from './InfosCards'

function App() {
  return (
    <>
      <Header />
      <main className='home-main'>
        <HomePresentation />
        <Lines />
        <CTABuyTickets />
        <Lines />
        <InfosCards />
      </main>
    </>
  );
}

export default App;
