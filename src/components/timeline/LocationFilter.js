import React, { useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const GoogleMapWithAutocomplete = () => {
  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      console.log('Latitude and Longitude:', latLng);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // İlgili Google Maps API anahtarınızı buraya ekleyin
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCWijshhiCqvD2xHw3bRFaf0QTmRylC_4M&libraries=places`;
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);

    return () => {
      window.document.body.removeChild(googleMapsScript);
    };
  }, []);

  return (
    <div>
      <PlacesAutocomplete
        value=""
        onChange={() => {}}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Search Address' })} />
            <div>
              {loading ? <div>Loading...</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <div id="map" style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default GoogleMapWithAutocomplete;
