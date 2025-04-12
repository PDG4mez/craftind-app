import React, { useState } from 'react';

function App() {
  const [itemType, setItemType] = useState('');
  const [tier, setTier] = useState('T4');
  const [materials, setMaterials] = useState(0);
  const [materialPrice, setMaterialPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [focus, setFocus] = useState(false);

  const items = [
    { name: 'Miecz Jednoręczny', tier: { T4: 10, T5: 20, T6: 30 } },
    { name: 'Miecz Dwuręczny', tier: { T4: 15, T5: 25, T6: 35 } },
    { name: 'Clarent Blade', tier: { T4: 20, T5: 30, T6: 40 } },
  ];

  const handleCalculate = () => {
    const item = items.find(i => i.name === itemType);
    const costPerItem = item.tier[tier] * materialPrice;
    const totalCost = costPerItem * materials;
    const totalRevenue = sellPrice * materials;

    const profit = totalRevenue - totalCost;
    const profitPerItem = profit / materials;

    const isProfitable = profit > 0;

    return {
      totalCost,
      totalRevenue,
      profit,
      profitPerItem,
      isProfitable,
    };
  };

  const result = handleCalculate();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Crafting Calculator Albion Online</h1>

      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2">Wybierz przedmiot:</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          >
            <option value="">Wybierz przedmiot</option>
            {items.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Wybierz Tier:</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
          >
            <option value="T4">T4</option>
            <option value="T5">T5</option>
            <option value="T6">T6</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Ilość surowców:</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={materials}
            onChange={(e) => setMaterials(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Cena materiału:</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={materialPrice}
            onChange={(e) => setMaterialPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Cena sprzedaży przedmiotu:</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={sellPrice}
            onChange={(e) => setSellPrice(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={focus}
            onChange={(e) => setFocus(e.target.checked)}
          />
          <label className="text-lg">Czy używasz focusa?</label>
        </div>

        <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-6">
          Oblicz
        </button>
      </div>

      {itemType && (
        <div className="mt-8 w-full max-w-xl bg-white rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Wyniki</h2>
          <p>
            <strong>Całkowity koszt produkcji:</strong> {result.totalCost} zł
          </p>
          <p>
            <strong>Całkowity zysk ze sprzedaży:</strong> {result.totalRevenue} zł
          </p>
          <p>
            <strong>Zysk całkowity:</strong> {result.profit} zł
          </p>
          <p>
            <strong>Zysk na sztuce:</strong> {result.profitPerItem} zł
          </p>
          <p
            className={`mt-2 text-lg font-medium ${result.isProfitable ? 'text-green-500' : 'text-red-500'}`}
          >
            {result.isProfitable ? 'Opłacalne' : 'Nie opłacalne'}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
Express yourself with emojis
💖 👍 😂 🎉
Respond quickly and add fun and personality to your emails
