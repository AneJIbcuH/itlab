import { useState } from "react";
import { Visitor } from "./models/models";
import Popup from "./components/Popup";
import Nav from "./components/Nav";
import Head from "./components/Head";
import MyVisitor from "./components/MyVisitor";
import Filter from "./components/Filter";
import "./App.css";

const App: React.FC = () => {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [visitor, setVisitor] = useState<Visitor | null>(null);
  const [filterName, setFilterName] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const [filterState, setFilterState] = useState<boolean | 'all'>("all");

  function deleteVisitor(id: number, e: { stopPropagation: () => void; }) {
    e.stopPropagation();
    setVisitors([...visitors.filter((visitor) => visitor.id != id)]);
  }

  const filtredVisitors = visitors
    .filter((vis) => vis.name.toLowerCase().includes(filterName.toLowerCase()))
    .filter((vis) =>
      vis.company.toLowerCase().includes(filterCompany.toLowerCase())
    )
    .filter((vis) => {switch (filterState) {
      case true:
        return vis.online;
      case false:
        return !vis.online;
      case "all":
        return vis;
      default:
        return 'all';
    }});

  return (
    <div>
      <Nav
        setOpen={setOpen}
        visitors={visitors}
        setFilterName={setFilterName}
        setFilterCompany={setFilterCompany}
      />
      <Popup
        visitors={visitors}
        setVisitors={setVisitors}
        setOpen={setOpen}
        open={open}
        visitor={visitor}
        setVisitor={setVisitor}
      />
      <div className="table">
        <Head />

        <div className="body">
          {filtredVisitors.map((el, index) => (
            <MyVisitor
              key={el.id}
              setOpen={setOpen}
              visitor={el}
              setVisitor={setVisitor}
              index={index}
              deleteVisitor={deleteVisitor}
            />
          ))}
        </div>
      </div>

      <Filter setFilterState={setFilterState}/>
    </div>
  );
};

export default App;
