export default function run_code(str: string) {
  if (str.charCodeAt(0) === 101) {
    throw new Error('SOME_ERROR_MESSAGE');
  } else {
    console.log('hello');
  }
}
