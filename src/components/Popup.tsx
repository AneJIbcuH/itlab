import { Modal } from "antd";
import { Visitor } from "../models/models";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  visitors: Visitor[];
  setVisitors: (arg: Visitor[]) => void;
  open: boolean;
  setOpen: (arg: boolean) => void;
  visitor: Visitor | null;
  setVisitor: (arg: Visitor | null) => void;
};

const Popup: React.FC<Props> = ({
  visitors,
  setVisitors,
  open,
  setOpen,
  visitor,
  setVisitor,
}) => {
  const { register, handleSubmit, reset } = useForm<Visitor>();

  const cancel = () => {
    setVisitor(null);
    setOpen(false);
  };

  const sendData: SubmitHandler<Visitor> = (data) => {
    if (visitor) {
      const newVisitor = { ...data, id: visitor.id };
      const newVisitors = visitors?.map((el) =>
        el.id == visitor.id ? newVisitor : el
      );
      setVisitors(newVisitors);
    } else {
      data.id = Date.now();
      setVisitors([...visitors, data]);
    }

    reset();
    setVisitor(null);
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onCancel={cancel} footer={[]}>
        <form action="" onSubmit={handleSubmit(sendData)} className="form">
          <div className="form-row">
            <div>ФИО</div>
            <input
              {...register("name")}
              defaultValue={visitor ? visitor.name : ""}
            />
          </div>

          <div className="form-row">
            <div>Компания</div>
            <input
              {...register("company")}
              defaultValue={visitor ? visitor.company : ""}
            />
          </div>

          <div className="form-row">
            <div>Группа</div>
            <select
              {...register("group")}
              defaultValue={visitor ? visitor.group : "Не выбрано"}
            >
              <option value={visitor ? visitor.group : "Не выбрано"}>
                {visitor ? visitor.group : "Не выбрано"}
              </option>
              <option
                value={visitor?.group == "Клиент" ? "Не выбрано" : "Клиент"}
              >
                {visitor?.group == "Клиент" ? "Не выбрано" : "Клиент"}
              </option>
              <option
                value={visitor?.group == "Прохожий" ? "Не выбрано" : "Прохожий"}
              >
                {visitor?.group == "Прохожий" ? "Не выбрано" : "Прохожий"}
              </option>
              <option
                value={visitor?.group == "Партнер" ? "Не выбрано" : "Партнер"}
              >
                {visitor?.group == "Партнер" ? "Не выбрано" : "Партнер"}
              </option>
            </select>
          </div>

          <div className="form-row">
            <div>Присутствие</div>
            <input
              type="checkbox"
              className="checkbox"
              {...register("online")}
              defaultChecked={visitor?.online ? true : false}
            />
          </div>

          <button className={visitor ? "save" : "add"}>
            {visitor ? "Сохранить" : "Добавить"}
          </button>
          <button onClick={() => setOpen(false)} type="button">
            Закрыть
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Popup;
