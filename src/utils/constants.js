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

export const routes = [
  {
    key: 1,
    name: 'Маршрут №1',
    positions: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ],
  },
  {
    key: 2,
    name: 'Маршрут №2',
    positions: [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ],
  },
  {
    key: 3,
    name: 'Маршрут №3',
    positions: [
      [59.83567701, 30.38064206],
      [59.84660399, 30.29496392],
      [59.82761295, 30.41705607],
    ],
  },
];
