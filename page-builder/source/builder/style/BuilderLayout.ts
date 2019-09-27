const palette = { 
    grey: '#EFEFEF',
    white: 'white'
}

export default {
    '@global': {
        '.builder': {
            '&-header': {
                height: '50px',
                background: `${palette.white}`,
                clear: 'both',
                padding: '5px',
                overflow: 'hidden',
                position: 'sticky',
                top: 0,
                'z-index': 10
            },
            '&-draggables': {
                height: '110px',
                background: `${palette.grey}`,
                clear: 'both',
                padding: '5px',
                overflow: 'hidden',
                position: 'sticky',
                top: '50px',
                'z-index': 10
            },
            '&-droppables': {
                '& > div': {
                    'margin-bottom': '20px'
                },
                '& .content': {
                    '& .draggable-component': {
                        display: 'block',
                        float: 'none',
                        margin: 0,
                        width: '100%',
                        'margin-bottom': '5px'
                    }
                }
            }
        }
    }
}