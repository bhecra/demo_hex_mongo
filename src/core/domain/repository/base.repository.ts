import { IUbitsFilter } from '../../utils';

export abstract class BaseRepository<T, ID> {
  abstract getById(id: ID): Promise<T | undefined>;
  abstract search(options?: IUbitsFilter): Promise<T[]>;
  abstract create(entity: T): Promise<T>;
  abstract update(id: ID, updatedEntity: T): Promise<T | undefined>;
  abstract deleteById(id: ID): Promise<void>;

  abstract inputFormat(data: any, args?: any): T;
  abstract outputFormat(data: any, args?: any): any;
}
