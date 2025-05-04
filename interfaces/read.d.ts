export type ReadMeta<
  TBase,
  TDBBase = unknown,
  TFilter = Partial<TBase & TDBBase>,
  TProjection = unknown,
  TOptions = unknown
> = {
  filter?: TFilter;
  projection?: TProjection;
  options?: TOptions;
};

export type ReadProps<TBase, TReadMeta extends ReadMeta<TBase>> = TReadMeta

export type ReadRepository<TBase, TReadMeta extends ReadMeta<TBase>> = {
    read(props: ReadProps<TBase, TReadMeta>): Promise<TBase[]>;
}