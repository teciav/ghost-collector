
export default function Header() {
  return (
    <header>
      <div className="header-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e95d62" d="M0,160L24,144C48,128,96,96,144,74.7C192,53,240,43,288,64C336,85,384,139,432,144C480,149,528,107,576,117.3C624,128,672,192,720,197.3C768,203,816,149,864,117.3C912,85,960,75,1008,69.3C1056,64,1104,64,1152,90.7C1200,117,1248,171,1296,176C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
      </div>
      <div className="headings">
        <h1>Have you seen any ghosts around here?</h1>
        <h2>Draw it on the board and add it to the collection!</h2>
      </div>
    </header>
  );
}
