const genders = [
"Todos",
"Femenino",
"Masculino",
"Unisex",
];

function GenderFilter({ gender, setGender }) {
return ( <div className="mb-6 lg:mb-10"> <h3 className="font-semibold mb-4 lg:mb-5">
Género </h3>

  <div className="flex lg:flex-col gap-3 lg:space-y-3 overflow-x-auto pb-2 lg:overflow-visible">
    {genders.map((item) => (
      <button
        key={item}
        onClick={() => setGender(item)}
        className={`shrink-0 px-4 py-2 rounded-full border transition whitespace-nowrap lg:w-fit lg:border-0 lg:p-0 lg:rounded-none ${
          gender === item
            ? "bg-[#B78A65] text-white border-[#B78A65] lg:bg-transparent lg:text-[#B78A65] lg:font-semibold"
            : "border-gray-200 text-gray-600 hover:border-[#B78A65] hover:text-[#B78A65]"
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
