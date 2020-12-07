export const testInput = [
  { icon: '家', name: 'Home' },
  {
    icon: '鈴',
    name: 'Bell',
    children: [
      { icon: '', name: 'feature1' },
      { icon: '', name: 'feature2' }
    ]
  },
  { icon: '報', name: 'Report' },
  { icon: '四', name: 'Feature-4' }
]

export const userRoles = {
  userA: {
    feature1: true,
    feature2: true
  },
  userB: {
    feature1: true,
    feature2: true,
    feature4: true,
    Home: true,
    Bell: true,
    Report: true,
    'Feature-4': true
  }
}