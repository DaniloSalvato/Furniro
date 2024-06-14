interface NumberInputComponentProps {
  id: number;
  quantity?: number;
  newQuantity: number;
  setNewQuantity: (e: number) => void;
}

const NumberInputComponent = ({
  newQuantity,
  setNewQuantity,
}: NumberInputComponentProps) => {
  const increment = () => {
    const updatedQuantity = newQuantity + 1;
    setNewQuantity(updatedQuantity);
  };

  const decrement = () => {
    if (newQuantity > 1) {
      const updatedQuantity = newQuantity - 1;
      setNewQuantity(updatedQuantity);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setNewQuantity(value);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg w-24 justify-between px-2 py-1">
      <button onClick={decrement} className="text-lg font-bold text-gray-600">
        -
      </button>
      <input
        type="number"
        className="text-lg text-center w-12"
        value={newQuantity}
        onChange={handleChange}
        min={1}
      />
      <button onClick={increment} className="text-lg font-bold text-gray-600">
        +
      </button>
    </div>
  );
};

export default NumberInputComponent;
