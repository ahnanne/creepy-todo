import Tile from "./demo/Tile";
import ServerStatus from "./demo/ServerStatus";
import Admin from "./demo/Admin";
import Todo from "./demo/todo/Todo";

export default function App() {
  return (
    <div className="tiles">
      <Tile
        title="creepy-todo"
        subtitle=""
        icon="remult"
        className="intro"
        status="Success"
        width="half"
      >
        <div className="tile__title">What's next?</div>
        <div className="button-row">
          <a
            className="button"
            href="https://learn.remult.dev/"
            target="_blank"
          >
            Interactive Tutorial
          </a>
          <a className="button" href="https://remult.dev/docs" target="_blank">
            Documentation
          </a>
          <a
            className="button"
            href="https://github.com/remult/remult"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="tile__subtitle"> Technology Stack Info:</div>
        <div className="intro__stack">
          <div className="intro__stack-item">
            <span>Framework</span>
            React
          </div>
          <div className="intro__stack-item">
            <span>Bundler</span>
            Vite
          </div>
          <div className="intro__stack-item">
            <span>Server</span>
            Express
          </div>
          <div className="intro__stack-item">
            <span>Database</span>
            SQLite3
          </div>
        </div>
      </Tile>
      <ServerStatus />
      <Admin />
      <Todo />
    </div>
  );
}
