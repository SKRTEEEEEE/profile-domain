export type PopulateRepository<TBase, TDBBase = unknown> = {
    populate(
      docs: Array<TBase>
    ): Promise<(TBase & TDBBase)[]>
  }
  