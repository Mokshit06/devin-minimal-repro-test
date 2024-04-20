import Nav from '@/components/nav';

export default function HelloLayout({ children }: any) {
  return (
    <div>
      <Nav />

      <h1>Hello some header</h1>
      {children}
    </div>
  );
}
