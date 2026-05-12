// HOC - adds a colored wrapper
function withColor(WrappedComponent) {
  return function (props) {
    return (
      <div style={{ border: "2px solid purple", padding: "10px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Simple component
function Hello({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Wrap it with HOC
const ColoredHello = withColor(Hello);

// Use it
export default function App() {
  return <ColoredHello name="React" />;
}