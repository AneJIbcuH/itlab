import { CloseOutlined } from "@ant-design/icons";
import { Visitor } from "../models/models";

type Props = {
  setOpen: (arg: boolean) => void;
  visitor: Visitor;
  setVisitor: (arg: Visitor) => void;
  index: number;
  deleteVisitor: (arg: number, e: { stopPropagation: () => void}) => void
};

const MyVisitor: React.FC<Props> = ({
  setOpen,
  visitor,
  setVisitor,
  index,
  deleteVisitor
}) => {

    
  return (
    <div
      key={visitor.id}
      className="row"
      onClick={() => {
        setVisitor(visitor);
        setOpen(true);
      }}
    >
      <div className="col-1">{index + 1}</div>
      <div className="col-2">{visitor.name}</div>
      <div className="col-3">{visitor.company} </div>
      <div className="col-4">{visitor.group}</div>
      <div className="center col-5">
        {visitor.online ? (
          <div className="true"></div>
        ) : (
          <div className="false"></div>
        )}
      </div>
      <div className="col-6 center">
        <CloseOutlined
          className="icon"
          onClick={(e) => deleteVisitor(visitor.id, e)}
        />
      </div>
    </div>
  );
};

export default MyVisitor;
