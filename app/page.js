"use client";

export function Square( ) {
  const [value, setValue] = useState(Array(9).fill(null));

  function handleClick() {
    setValue("🕷️"); //🐛
  }

  return (
    <button
      onClick={handleClick}
      className=" h-20 rounded-md  border-2 bg-sky-500  p-6 text-3xl text-white hover:bg-sky-700"
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="grid grid-cols-3 gap-1 ">
    <h1 className="bg-emerald-500 max-w-none "  >Tic Tac Toe</h1>
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  );
}
