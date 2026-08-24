import "./HelloWorld.css"

export default function HelloWorld() {
  return (
    <div>
        <HeaderHelloWorld text='Hello World' />
        <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({text = "Ups, i forgot declare a text here!"}: {text?: string}) {
  return (
    <header>
        <h1 className="title">{text.toLowerCase()}</h1>
    </header>
  );
}

function ParagraphHelloWorld() {
    const text: string = 'Welcome to learn react in my website';
    return (
        <section className="content">
            <p>{text.toUpperCase()}</p>
        </section>
    );
}