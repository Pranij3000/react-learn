import "./ttt-game.scss";
import TttBox from "../../components/tictactoe/TttInputBox";

export default function TttGame() {
  return (
    <>
      <section className="game">
        <div className="container">
          <div className="game-wrapper">
            <div className="row">
              <div className="col-4">
                <TttBox></TttBox>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
