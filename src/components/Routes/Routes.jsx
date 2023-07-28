import { Table } from 'antd';

import './Routes.scss';
import { routes } from '../../data';
import { columnsRoutes } from '../../utils/constants';

const rowSelection = {
  onChange: (routeKey, routePositions) => {
    console.log(
      `route ID: ${routeKey}`,
      'route Marks: ',
      routePositions[0].positions
    );
  },
};

export default function Routes({ title }) {
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
