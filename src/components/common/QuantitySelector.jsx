function QuantitySelector({ quantity, setQuantity }) {

  return (

    <div className="flex items-center gap-6">

      <button

        onClick={() => quantity > 1 && setQuantity(quantity - 1)}

        className="border px-4 py-2"

      >

        -

      </button>

      <span className="text-xl">

        {quantity}

      </span>

      <button

        onClick={() => setQuantity(quantity + 1)}

        className="border px-4 py-2"

      >

        +

      </button>

    </div>

  );

}

export default QuantitySelector;;