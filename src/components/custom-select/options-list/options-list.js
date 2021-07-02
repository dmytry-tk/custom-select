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
    }, [options])

    return optionsList;
}

export default OptionsList