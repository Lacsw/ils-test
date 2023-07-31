import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';

import './Routes.scss';
import { columnsRoutes } from '../../utils/constants';
import { selectRoute } from '../../reducers/routesSlice';

export default function Routes({ title }) {
  const routes = useSelector((state) => state.routes.routes);
  const dispatch = useDispatch();

  const rowSelection = {
    onChange: (routeKey, routePositions) => {
      dispatch(selectRoute({ route: routePositions[0] }));
    },
  };

  return (
    <section className='routes'>
      <h2>{title}</h2>
      <Table
        className='routes__table'
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columnsRoutes}
        dataSource={routes}
        pagination={false}
      />
    </section>
  );
}
