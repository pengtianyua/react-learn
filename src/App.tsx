import "./App.css";

type ButtonProps = {
  children: string;
  onSmash: () => void;
};

function Button({ children, onSmash }: ButtonProps) {
  return <button onClick={onSmash}>{children}</button>;
}

function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    console.log(`正在播放${movieName}`);
  }
  return <Button onSmash={handlePlayClick}>{`播放${movieName}`}</Button>;
}

function UploadButton() {
  return <Button onSmash={() => console.log("正在上传")}>上传图片</Button>;
}

function ToolBar() {
  return (
    <div>
      <PlayButton movieName="电影" />
      <UploadButton />
    </div>
  );
}

function App() {
  return (
    <>
      <ToolBar></ToolBar>
    </>
  );
}

export default App;
