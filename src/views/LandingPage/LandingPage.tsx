
export const LandingPage =  () => {
    return (
      <div className='container'>
          <h1 style={{ textAlign: 'center' }}>Welcome!!!</h1>
          <hr />
          <div className="row">
              <div className="col-md-6">
                  <a  href="/posts" className="btn btn-secondary btn-lg btn-block" style={{ padding: '5%' }}>
                      View Posts
                  </a>
              </div>
              <div className="col-md-6">
                  <a href="/users" className="btn btn-secondary btn-lg btn-block" style={{ padding: '5%' }}>
                      View Users
                  </a>
              </div>

          </div>
      </div>
    );
}