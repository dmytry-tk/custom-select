import React, {useMemo} from 'react'

const OptionsList = ({options, onChange}) => {
    const optionsList = useMemo(() => {
        return(
            <>
                {
                    options.map(({value, name}) => {
                        return(
                            <div
                                key={value}
                                onClick={() => onChange({value, name})}
                                className="custom-option">
                                {name}
                            </div>
                        )
                    })
                }
            </>
        )
    }, [options, onChange])

    return optionsList;
}

export default OptionsList