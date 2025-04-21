const filterData = [
    {
        label: 'Size',
        name: 'size',
        type: 'checkbox',
        Options: ['S', 'M', 'L', 'XL'],
    },
    {
        label: 'Color',
        name: 'color',
        type: 'checkbox',
        Options: ['Red', 'Blue', 'Black', 'White'],
      },
      {
        label: 'Fabric',
        name: 'fabric',
        type: 'checkbox',
        Options: ['Cotton', 'Silk', 'Wool', 'Linen'],
      },
      {
        label: 'Price',
        name: 'price',
        type: 'select',
        Options: ['Low to High', 'High to Low'],
      },
]
export default filterData;