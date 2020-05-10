import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = (address) => {
        this.setState({ address });
        this.props.updateLocation({});
    };

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then((results) => {
                const addressResult = results[0].formatted_address;
                this.setState({ address: addressResult });

                return getLatLng(results[0]);
            })
            .then((latLng) => {
                console.log('Success', latLng);
                this.props.updateLocation(latLng);
            })
            .catch((error) => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                }) => (
                    <div className='form-group'>
                        <label className='form-label' htmlFor='location-input'>
                            Location
                        </label>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input form-control',
                            })}
                        />
                        <div className='autocomplete-dropdown-container'>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? {
                                          backgroundColor: '#fafafa',
                                          cursor: 'pointer',
                                      }
                                    : {
                                          backgroundColor: '#ffffff',
                                          cursor: 'pointer',
                                      };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;
