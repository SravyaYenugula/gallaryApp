// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, onclickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails
  const changeColor = isActive ? 'thumbnail' : 'active'

  const onButtonClick = () => {
    onclickThumbnail(id)
  }

  return (
    <li className="thunder-mail-iteam">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onButtonClick}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={changeColor}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
