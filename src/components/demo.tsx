import runCode from '../lib/run_code';

export default function Demo() {
  return (
    <button
      onClick={() => {
        runCode('e');
      }}
    >
      Click me
    </button>
  );
}
