export const columnsRoutes = [
  {
    title: 'Маршрут',
    dataIndex: 'name',
  },

  {
    title: 'Точка 1 (lat, lng)',
    dataIndex: 'positions',
    render: (positions) => (
      <>
        <span className='routes__span'>{positions[0][0]}</span>
        <span className='routes__span'>{positions[0][1]}</span>
      </>
    ),
  },

  {
    title: 'Точка 2 (lat, lng)',
    dataIndex: 'positions',
    render: (positions) => (
      <>
        <span className='routes__span'>{positions[1][0]}</span>
        <span className='routes__span'>{positions[1][1]}</span>
      </>
    ),
  },

  {
    title: 'Точка 3 (lat, lng)',
    dataIndex: 'positions',
    render: (positions) => (
      <>
        <span className='routes__span'>{positions[2][0]}</span>
        <span className='routes__span'>{positions[2][1]}</span>
      </>
    ),
  },
];
