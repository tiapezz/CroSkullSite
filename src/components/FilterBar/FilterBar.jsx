import React from "react";
import Select from "react-select"

const FilterBar = ( { 
    traits, 
    traitsTypes,
    handleFilterBar,
    handleStatusNFTFilter
    } ) => {
    const nftStatusOptions = [{
        value: "all", label: "All"
    },{
        value: "inSale", label: "In Sale"
    },{
        value: "notInSale", label: "Not in Sale"
    },{
        value: "owned", label: "Owned"
    }]

    let customStyle = {
        option: (provided) => ({
          ...provided,
          color: 'black',
        })
      }
      
    return (
        <div className="filterBar align-items-right d-flex justify-content-right spaced">
            {  traitsTypes.length > 0 ?
                traitsTypes.map( (type, i ) => {
                    let items = []
                    traits[traitsTypes[i]].forEach( (value, key) => {
                        let valueKey = type + '_' + value.replace(' ', '-');
                        if( ! key )
                          items.push( { value: type + '_none', label: 'None'} );

                        items.push( { value: valueKey, label: value } );
                    })
                    return (
                        items &&
                        <div key={i}>
                            <span>{type}</span>
                            <Select 
                                options={items}
                                onChange={handleFilterBar}
                                key={i}
                                placeholder="None"
                                styles={customStyle}
                            />
                        </div>
                    )

                })
                : 'Loading Skulls traits...' }
                <div>
                    <span>NFT Status</span>
                    <Select
                        options={nftStatusOptions}
                        onChange={handleStatusNFTFilter}
                        placeholder="all"
                        styles={customStyle}
                    ></Select>
                </div>
        </div>
    );
};

export default FilterBar;
/**
 *        <FilterSelect
                            traits={traits}
                            type={type}
                            key={i}
                        />
 */
