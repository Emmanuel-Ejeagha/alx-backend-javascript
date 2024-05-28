export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const data = mathFunction();
    queue.push(data, 'Guardrial was processwd');
  } catch (error) {
    queue.push(`Error: ${error.message}`, 'Guaedrail was proceessed');
  }
  return queue;
}
