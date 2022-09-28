interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <>
      <h1>Hello NLW</h1>
      <Button title="Send 1" />
      <Button title="Excluir" />
    </>
  )
}

export default App
