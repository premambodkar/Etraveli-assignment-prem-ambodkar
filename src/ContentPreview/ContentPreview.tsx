import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';

const ContentPreview = () => {
  const selectedItemId = useSelector((state: RootState) => state.list.selectedItemId);
  const selectedItem = useSelector((state: RootState) =>
    state.list.items.find((item) => item.episode_id === selectedItemId)
  );


  const [loading, setLoading] = useState<boolean>(true);
  const [detailsData, setDetailsData] = useState<any>(null);

  const loadImage = async () => {
    setLoading(true); // Show loader
    try {
      if (!selectedItem) {
        throw new Error('Selected item is undefined');
      }
      const response = await fetch(`http://www.omdbapi.com/?apikey=b9a5e69d&t=${selectedItem.title}&y=${selectedItem.release_date}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setDetailsData(result)
    } catch (err: any) {
    }
    finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    if (selectedItem) {
      loadImage()
    }
  }, [selectedItemId])


  if (!selectedItem) {
    return <div>Select an item to preview and edit its details.</div>;
  }

  return (
    <>
      {loading && <div className="loader">Loading...</div>}  {/* Loader */}
      {
        <div className="preview-container">
          <h1 className="preview-title">{selectedItem?.episode_id} - {selectedItem?.title}</h1>
          <div className="image-description">
            <img src={detailsData?.Poster} alt="Item Image" className="preview-image" />
            <p className="preview-description">
              {selectedItem?.opening_crawl}
            </p>
          </div>
          <p><strong>Director by:</strong> {selectedItem?.director}</p>
          <StarRating ratings={detailsData?.Ratings} maxRating={10} />
          <div className="chips-list-container">
            <div className="chips-list">
              {detailsData?.Ratings?.map((chip: any, index: number) => (
                <div key={index} className="chip">
                  {chip.Source} - {chip.Value}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ContentPreview