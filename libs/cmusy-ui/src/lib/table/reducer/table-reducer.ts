export type TableState<T> = {
  selectedKeys: Set<T>;
  list: T[];
};

export type TableAction<T> =
  | { type: 'toggle-selected'; payload: T }
  | { type: 'toggle-all'; payload: T[] };

export function tableReducer<T>(state: TableState<T>, action: TableAction<T>) {
  switch (action.type) {
    case 'toggle-selected': {
      const selectedKeys = new Set([...state.selectedKeys]);
      const value = action.payload;

      if (selectedKeys.has(value)) {
        selectedKeys.delete(value);
      } else {
        selectedKeys.add(action.payload);
      }

      return {
        ...state,
        selectedKeys,
      };
    }
    case 'toggle-all': {
      const selectedKeys = new Set([...action.payload]);
      return {
        ...state,
        selectedKeys,
      };
    }
    default: {
      throw new Error(
        `This ${JSON.stringify(
          action,
          null,
          2
        )} not supported, please verify you actions.`
      );
    }
  }
}
