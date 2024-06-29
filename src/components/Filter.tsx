import { useState } from "react";

type Props = {
  setFilterState: (arg: boolean | "all") => void;
};

const Filter: React.FC<Props> = ({ setFilterState }) => {
  const [activeBtn, setActiveBtn] = useState<number>(3);

  return (
    <div className="filter">
      Фильтровать по:
      <button
        className={activeBtn == 1 ? "active" : ""}
        onClick={() => {
          setActiveBtn(1);
          setFilterState(false);
        }}
      >
        Отсутствующим
      </button>
      <button
      className={activeBtn == 2 ? 'active' : ''}
        onClick={() => {
          setActiveBtn(2);
          setFilterState(true);
        }}
      >
        Присутствующим
      </button>
      <button
      className={activeBtn == 3 ? 'active' : ''}
        onClick={() => {
          setActiveBtn(3);
          setFilterState("all");
        }}
      >
        Без фильтра
      </button>
    </div>
  );
};

export default Filter;
