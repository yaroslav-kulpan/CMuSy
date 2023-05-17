import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

import {
  TableAction,
  tableReducer,
  TableState,
} from '../reducer/table-reducer';

type TableProviderProps = {
  selectionMode?: string;
  defaultSelectedKeys?: string[];
  list: Record<string, any>[];
};

const TableContext = createContext<TableState<any>>({
  selectedKeys: new Set(),
  list: [],
});
TableContext.displayName = 'TableContextProvider';
const TableContextActions = createContext<Dispatch<TableAction<any>>>(() => 0);
TableContextActions.displayName = 'TableContextActions';

export function TableProvider({
  children,
  selectionMode,
  defaultSelectedKeys,
  list,
}: PropsWithChildren<TableProviderProps>) {
  const [state, dispatch] = useReducer(tableReducer, null, () => {
    return {
      list,
      selectedKeys: new Set(defaultSelectedKeys),
    };
  });

  return (
    <TableContext.Provider value={state}>
      <TableContextActions.Provider value={dispatch}>
        {children}
      </TableContextActions.Provider>
    </TableContext.Provider>
  );
}

export function useTable() {
  const context = useContext(TableContext);

  if (typeof context === 'undefined') {
    throw new Error('You need wrapped component, with TableProvider.');
  }

  return context;
}

export function useTableAction() {
  const dispatch = useContext(TableContextActions);

  if (typeof dispatch === 'undefined') {
    throw new Error('You need wrapped component, with TableProvider.');
  }

  return dispatch;
}
