import { Visitor } from "../models/models";

type Props = {
  setOpen: (arg: boolean) => void;
  visitors: Visitor[];
  setFilterName: (arg: string) => void;
  setFilterCompany: (arg: string) => void;
};

const Nav: React.FC<Props> = ({ setOpen, visitors, setFilterName, setFilterCompany }) => {


  return (
    <div className="nav">
      <img src="https://i.ibb.co/xjr3F8P/image.png" alt="" />
      <input placeholder="Поиск по имени" onChange={(e) => setFilterName(e.target.value)}/>
      <input placeholder="Поиск по компании" onChange={(e) => setFilterCompany(e.target.value)}/>
      <button className="add" onClick={() => setOpen(true)}>
        Добавить
      </button>
      <div>
        Посетители
        <br />
        <span className="all">{visitors.filter((el) => el.online == true).length}</span> /{" "}
        <span className="online">{visitors.filter((el) => el.online == false).length}</span>
      </div>
    </div>
  );
};

export default Nav;
