import Loader from 'react-loader-spinner'
import './index.css'

const LoaderComponent = () => (
  <div data-testid="loader" className="loader-cnt">
    <Loader type="ThreeDots" color="#4656a1" />
  </div>
)

export default LoaderComponent
