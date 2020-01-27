module.exports = {
  'extends': [ 'plugin:react-perf/all' ],
  'plugins': [ 'react-perf' ],
  'rules': {
    'react-perf/jsx-no-new-object-as-prop': 'warn',
    'react-perf/jsx-no-new-array-as-prop': 'warn',
    'react-perf/jsx-no-new-function-as-prop': 'warn',
    'react-perf/jsx-no-jsx-as-prop': 'warn',
  },
}
