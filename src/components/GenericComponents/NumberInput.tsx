import { useEffect, useState } from "react";

interface NumberInputProps {
  id: number;
  quantity: number;
  handleUpdateCart: (id :number, quantity:number) => void
}

type Operation = 'increment' | 'decrement'

const NumberInput = ({ id, quantity, handleUpdateCart }: NumberInputProps) => {
  const [qtd, setQtd] = useState(quantity);

  useEffect(()=>{
    handleUpdateCart(id, qtd)
  },[qtd])

  const count = ( operation: Operation) => {
    if (operation === 'increment') {
      const newQtd = qtd + 1;
      setQtd(newQtd)
    } else if (operation === "decrement" && qtd > 0) {
      const newQtd = qtd - 1;
      setQtd(newQtd);
    }
  };
  
  return (
    <div className="flex items-center border border-gray-300 rounded-lg w-32 justify-between px-2 py-3">
      <button onClick={() => count('decrement')} className="text-lg font-bold text-gray-600">
        -
      </button>
      <input
        type="text"
        className="text-lg text-center w-12"
        value={qtd}
        min={1}
      />
      <button onClick={() => count('increment')} className="text-lg font-bold text-gray-600">
        +
      </button>
    </div>
  );
};

export default NumberInput;
