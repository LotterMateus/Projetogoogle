import { useState } from 'react';

function App() {
  const [termo, setTermo] = useState('');
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisar = () => {
    if (!termo.trim()) {
      alert('Por favor, digite algo para pesquisar!');
      return;
    }

    setPesquisa(termo);
    
    setTermo('');
    
    window.open(`https://www.google.com/search?q=${encodeURIComponent(termo)}`, '_blank');
    
    console.log(`Pesquisa realizada: ${termo}`);
  };

  return (
    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', color: '#4285F4' }}>
          G<span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#34A853' }}>g</span>
          <span style={{ color: '#EA4335' }}>l</span>
          <span style={{ color: '#4285F4' }}>e</span>
        </h1>

        <input
          type="text"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            fontSize: '16px',
            marginTop: '20px',
          }}
          placeholder="Digite sua pesquisa"
        />
        <br />
        <button
          onClick={handlePesquisar}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Pesquisar
        </button>

        {pesquisa && (
          <p style={{ marginTop: '30px', fontSize: '18px' }}>
            Você pesquisou por: <strong>{pesquisa}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
