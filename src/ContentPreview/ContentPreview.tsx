import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';

const ContentPreview = () => {
  const selectedItem = useSelector((state: RootState) =>
    state.list.items.find((item) => item.episode_id === state.list.selectedItemId)
  );

  if (!selectedItem) {
    return <div>Select an item to preview and edit its details.</div>;
  }

  return (
    <>
      {
        <div className="preview-container">
          <h1 className="preview-title">{selectedItem?.episode_id} - {selectedItem?.title}</h1>
          <div className="image-description">
            {/* <img src="https://via.placeholder.com/300" alt="Item Image" className="preview-image" /> */}
            <p className="preview-description">
              {selectedItem?.opening_crawl}
            </p>
            <p><strong>Director by:</strong> {selectedItem?.director}</p>
          </div>

          <div className="ratings">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
            <p className="rating-text">3/5 Ratings</p>
          </div>
        </div>
      }

    </>
  )
}

export default ContentPreview