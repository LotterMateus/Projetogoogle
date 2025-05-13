import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { style: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }, children: _jsxs("div", { style: { textAlign: 'center' }, children: [_jsxs("h1", { style: { fontSize: '48px', color: '#4285F4' }, children: ["G", _jsx("span", { style: { color: '#EA4335' }, children: "o" }), _jsx("span", { style: { color: '#FBBC05' }, children: "o" }), _jsx("span", { style: { color: '#34A853' }, children: "g" }), _jsx("span", { style: { color: '#EA4335' }, children: "l" }), _jsx("span", { style: { color: '#4285F4' }, children: "e" })] }), _jsx("input", { type: "text", value: termo, onChange: (e) => setTermo(e.target.value), style: {
                        padding: '10px',
                        width: '300px',
                        fontSize: '16px',
                        marginTop: '20px',
                    }, placeholder: "Digite sua pesquisa" }), _jsx("br", {}), _jsx("button", { onClick: handlePesquisar, style: {
                        marginTop: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }, children: "Pesquisar" }), pesquisa && (_jsxs("p", { style: { marginTop: '30px', fontSize: '18px' }, children: ["Voc\u00EA pesquisou por: ", _jsx("strong", { children: pesquisa })] }))] }) }));
}
export default App;
