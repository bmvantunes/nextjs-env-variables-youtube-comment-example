export default function ({ serverPublicVar1, serverVar1 }) {
  return (
    <div>
      <div>NEXT_PUBLIC_VAR1 = {process.env.NEXT_PUBLIC_VAR1}</div>
      <div>FROM SERVER: NEXT_PUBLIC_VAR1 = {serverPublicVar1}</div>
      ---------------------
      <div>VAR1 = {process.env.VAR1 || '-----'}</div>
      <div>FROM SERVER: VAR1 = {serverVar1}</div>
    </div>
  );
}

export function getServerSideProps() {
  console.log('NODE.JS NEXT_PUBLIC_VAR1', process.env.NEXT_PUBLIC_VAR1);
  console.log('NODE.JS VAR1', process.env.VAR1);

  return {
    props: {
      serverPublicVar1: process.env.NEXT_PUBLIC_VAR1,
      serverVar1: process.env.VAR1,
    },
  };
}
