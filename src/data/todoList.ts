import uniqid from "uniqid";

interface iTodoList {
  title: string;
  status: string;
  id: string;
}
interface istatusTodo {
  open: string;
  done: string;
  "in-progress": string;
}
const statusTodo: istatusTodo = {
  open: "open",
  done: "done",
  "in-progress": "inProgress",
};

const todoList: Array<iTodoList> = [
  {
    title: "work",
    status: statusTodo.open,
    id: uniqid(),
  },
  {
    title: "work",
    status: statusTodo.open,
    id: uniqid(),
  },
  {
    title: "two",
    status: statusTodo.done,
    id: uniqid(),
  },
  {
    title: "three",
    status: statusTodo["in-progress"],
    id: uniqid(),
  },
];

export default todoList;
