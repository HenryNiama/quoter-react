import { useState, useEffect } from  "react";
import Header from "./components/Header";
import Button from "./components/Button.jsx";
import { formatearDinero, calculeTotal}from './helpers';


function App() {

  let [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(calculeTotal(cantidad, meses));
  const [pago, setPago] = useState(0);

  useEffect(() => {
    setTotal(calculeTotal(cantidad, meses));
  }, [cantidad, meses, total])


    useEffect(() => {
        // Calcular el pago mensual
        setPago(total / meses);
    }, [total])


  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleRangeChange(e) {
    // console.log(e.target.value);
    setCantidad(+e.target.value);
  }

  function handleClickDecrement() {
    if (cantidad > MIN) {
      setCantidad(cantidad - STEP);
    }
  }

  function handleClickIncrement() {
    if (cantidad < MAX) {
      setCantidad(cantidad + STEP);
    }
  }
  

  return (

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />

        <div className="flex justify-between my-6">
            <Button
                operator="-"
                fn ={handleClickDecrement}
            />
            <Button
                operator="+"
                fn ={handleClickIncrement}
            />
        </div>

        <input
            type="range"
            className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 focus:accent-lime-600"
            onChange={handleRangeChange}
            min={MIN}
            max={MAX}
            step={STEP}
            value={cantidad}
        />

        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
            {formatearDinero(cantidad)}
        </p>

        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
            Elige un <span className="text-indigo-600">plazo</span> que se adapte a tus necesidades.
        </h2>

        <select name="" id="" className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
                value={meses} onChange={e => setMeses(+e.target.value)}>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5">
            <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                Resumen de <span className="text-indigo-600">pagos</span>
            </h2>

            <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
            <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} a pagar</p>
            <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pago)}Mensuales</p>
        </div>
        
    </div>

  )


}

export default App
