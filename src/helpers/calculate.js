export default function calculate(state, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: '420',
      nextNumber: null,
      operation: null,
    };
  }
  return {
    total: '33',
    nextNumber: '33',
    operation: '23'
  }
}