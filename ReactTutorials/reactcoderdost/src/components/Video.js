import './Video.css';


function Video({ title, channel = "Kontent Stacked", views, time, verified, children }) {
  return (
    <>
      <div className='container'>
        <div className="pic">
          <img src="https://i.imgur.com/OKS67lh.jpg" alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel"> {channel} {verified && '✅'}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>

        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Video;
