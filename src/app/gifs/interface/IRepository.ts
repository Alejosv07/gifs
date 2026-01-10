export interface IRepository<T,ID> {
  save(t: T): T;
  delete(id:ID): void;
  getAll():T;
}
