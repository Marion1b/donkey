import CTABuyTickets from './CTABuyTickets';
import Header from './Header'
import HomePresentation from './HomePresentation'
import Lines from './Lines'

function App() {
  return (
    <>
      <Header />
      <main className='home-main'>
        <HomePresentation />
        <Lines />
        <CTABuyTickets />
        <Lines />
      </main>
    </>
  );
}

export default App;
