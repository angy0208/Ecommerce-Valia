function QuantitySelector({ quantity, setQuantity }) {

  return (

    <div className="flex items-center gap-4">

      <button

        type="button"

        onClick={() =>
          quantity > 1 &&
          setQuantity(quantity - 1)
        }

        className="border px-4 py-2 hover:bg-gray-100 transition"

      >

        -

      </button>


      <span className="text-xl min-w-[20px] text-center">

        {quantity}

      </span>


      <button

        type="button"

        onClick={() =>
          setQuantity(quantity + 1)
        }

        className="border px-4 py-2 hover:bg-gray-100 transition"

      >

        +

      </button>

    </div>

  );

}

export default QuantitySelector;