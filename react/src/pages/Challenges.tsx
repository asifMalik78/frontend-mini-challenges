import ChallengeGrid from '@/components/challenges/ChallengeGrid';
import Navbar from '@/components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <a href="/frontend-mini-challenges/native">JavaScript Mini Challenges</a>
      </Navbar>
      <div className="container text-center">
        <ChallengeGrid />
      </div>
    </>
  );
}

export default App;
