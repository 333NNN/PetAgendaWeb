import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Bem-vindo ao PetAgenda</h1>
            <Link to="/cadastro" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cadastrar Pet</Link>
        </div>
    );
}

function PetForm() {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [owner, setOwner] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/pets', { name, race, owner });
        alert('Pet cadastrado!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold">Cadastrar Pet</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded shadow-md">
                <input className="border p-2" type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="border p-2" type="text" placeholder="Raça" value={race} onChange={(e) => setRace(e.target.value)} required />
                <input className="border p-2" type="text" placeholder="Dono" value={owner} onChange={(e) => setOwner(e.target.value)} required />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Salvar</button>
            </form>
        </div>
    );
}

function PetList() {
    const [pets, setPets] = useState<{ id: number; name: string; race: string; owner: string }[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/pets').then(response => setPets(response.data));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold">Lista de Pets</h2>
            <ul className="bg-white p-4 rounded shadow-md">
                {pets.map(pet => (
                    <li key={pet.id} className="border-b p-2">{pet.name} - {pet.race} (Dono: {pet.owner})</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<PetForm />} />
                <Route path="/pets" element={<PetList />} />
            </Routes>
        </Router>
    );
}

export default App;
