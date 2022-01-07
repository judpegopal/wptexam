export default function App() {
  return (
    <div>
      <div className="container-fluid  p-2">
        <div className="row text-centre bg-dark text-white">
          <h2>MyChatApp</h2>(BY Gopal Judpe)(029_JH)
        </div>

        <div className="row p-2">
          <input type="text" placeholder="let's chat here.." />
          <input type="button" value="SUBMIT" />
        </div>

        <div>
          <div className="row p-2 text-left">
            <input type="text" placeholder="Hii." />
          </div>
          <br />
          <div className="row p-2 text-centre">
            <input type="text" placeholder="Hello." />
          </div>
          <br />
          <div className="row p-2">
            <input type="text" placeholder="What's App" />
          </div>
          <br />
          <div className="row p-2">
            <input type="text" placeholder="All Good." />
          </div>
          <br />
          <div className="row p-2">
            <input type="text" placeholder="All The Best." />
          </div>
        </div>
      </div>
    </div>
  );
}
