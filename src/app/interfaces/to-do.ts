export interface ITodo {
  id: number;
  subject: string;
  description: string;
  priority: string;
  category: string;
  due: Date;
  done: Boolean;
}
