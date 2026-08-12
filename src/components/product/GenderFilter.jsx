const genders = [
  "Todos",
  "Femenino",
  "Masculino",
  "Unisex"
];

function GenderFilter({ gender, setGender }) {

  return (
    <div className="mb-10">

      <h3 className="font-semibold mb-5">
        Género
      </h3>

      <div className="space-y-3">

        {genders.map(item => (

          <button
            key={item}
            onClick={() => setGender(item)}
            className={`block transition ${
              gender === item
                ? "text-[#B78A65] font-semibold"
                : "hover:text-[#B78A65]"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}

export default GenderFilter;